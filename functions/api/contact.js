const INFO_EMAIL = "info@thehomelessgrouptours.com";
const BOOKINGS_EMAIL = "bookings@thehomelessgrouptours.com";
const FROM_EMAIL = "Homeless Group Tours <no-reply@thehomelessgrouptours.com>";

function escapeHtml(value) {
    return value.replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
    }[char]));
}

export async function onRequestPost({ request, env }) {
    let form;
    try {
        form = await request.formData();
    } catch {
        return new Response(JSON.stringify({ error: "Invalid form submission." }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    const name = (form.get("name") || "").toString().trim();
    const phone = (form.get("phone") || "").toString().trim();
    const email = (form.get("email") || "").toString().trim();
    const message = (form.get("message") || "").toString().trim();
    const to = (form.get("to") || "").toString().trim();

    if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: "Please fill in your name, email and message." }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return new Response(JSON.stringify({ error: "Please provide a valid email address." }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    const recipient = to === "bookings" ? BOOKINGS_EMAIL : INFO_EMAIL;

    const bodyHtml = `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from: FROM_EMAIL,
            to: [recipient],
            reply_to: email,
            subject: `New ${to === "bookings" ? "booking enquiry" : "contact message"} from ${name}`,
            html: bodyHtml,
        }),
    });

    if (!resendResponse.ok) {
        const errorText = await resendResponse.text();
        return new Response(JSON.stringify({ error: "Could not send your message. Please try again later." }), {
            status: 502,
            headers: { "Content-Type": "application/json" },
        });
    }

    return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}

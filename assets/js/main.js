
(function ($) {
  "use strict";

  const $documentOn = $(document);
  const $windowOn = $(window);

  $documentOn.ready(function () {

    $("#mobile-menu").meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "1199",
      meanExpand: ['<i class="far fa-plus"></i>'],
    });

    //>> Sidebar Toggle Js Start <<//
    $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
      $(".offcanvas__info").removeClass("info-open");
      $(".offcanvas__overlay").removeClass("overlay-open");
    });
    $(".sidebar__toggle").on("click", function () {
      $(".offcanvas__info").addClass("info-open");
      $(".offcanvas__overlay").addClass("overlay-open");
    });

    //>> Body Overlay Js Start <<//
    $(".body-overlay").on("click", function () {
      $(".offcanvas__area").removeClass("offcanvas-opened");
      $(".df-search-area").removeClass("opened");
      $(".body-overlay").removeClass("opened");
    });

    //>> Sticky Header Js Start <<//



    $windowOn.on("scroll", function () {
      if ($(this).scrollTop() > 250) {
        $("#header-sticky").addClass("sticky");
      } else {
        $("#header-sticky").removeClass("sticky");
      }
    });

    //>> Video Popup Start <<//
    $(".img-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    $(".img-popup2").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    $(".video-popup").magnificPopup({
      type: "iframe",
      callbacks: {},
    });

    //>> Counterup Start <<//
    $(".count").counterUp({
      delay: 15,
      time: 4000,
    });

    //>> Wow Animation Start <<//
    new WOW().init();

    //>> Nice Select Start <<//
    $("select").niceSelect();


    //>> team Slider Start <<//
    if ($(".service-slider").length > 0) {
      const serviceSlider = new Swiper(".service-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          prevEl: ".array-prev",
          nextEl: ".array-next",
        },
        breakpoints: {
          1199: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    //>> Brand Slider Start <<//
    if ($(".brand-slider").length > 0) {
      const brandSlider = new Swiper(".brand-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },

        breakpoints: {
          1199: {
            slidesPerView: 6,
          },
          991: {
            slidesPerView: 5,
          },
          767: {
            slidesPerView: 4,
          },
          575: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    //>> Testimonial Slider Start <<//
    if ($(".testimonial-slider").length > 0) {
      const testimonialSlider = new Swiper(".testimonial-slider", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          prevEl: ".array-prev",
          nextEl: ".array-next",
        },
        breakpoints: {
          1199: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    //>> Testimonial Slider Start <<//
    if ($(".testimonial-slider2").length > 0) {
      const testimonialSlider2 = new Swiper(".testimonial-slider2", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          prevEl: ".array-prev",
          nextEl: ".array-next",
        },

      });
    }

    //>> Testimonial Slider Start <<//
    if ($(".testimonial-slider3").length > 0) {
      const testimonialSlider3 = new Swiper(".testimonial-slider3", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          prevEl: ".array-prev",
          nextEl: ".array-next",
        },
        breakpoints: {
          1199: {
            slidesPerView: 1,
          },
          991: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 1,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    if ($(".process-slider").length > 0) {
      const processSlider = new Swiper(".process-slider", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          prevEl: ".array-prev",
          nextEl: ".array-next",
        },
        breakpoints: {
          1199: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    //>> destination Slider Start <<//
    if ($(".destination-slider").length > 0) {
      const destinationSlider = new Swiper(".destination-slider", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".dot",
          clickable: true,
        },
        breakpoints: {
          1200: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    //>> destination Slider Start <<//
    if ($(".destination-slider2").length > 0) {
      const destinationSlider2 = new Swiper(".destination-slider2", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".dot",
          clickable: true,
        },
        breakpoints: {
          1200: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    //>> destination Slider Start <<//
    if ($(".destination-slider3").length > 0) {
      const destinationSlider3 = new Swiper(".destination-slider3", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".dot",
          clickable: true,
        },
        breakpoints: {
          1200: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    //>> newsSlider Slider Start <<//
    if ($(".newsSlider").length > 0) {
      const newsSlider = new Swiper(".newsSlider", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".dot",
          clickable: true,
        },
        breakpoints: {
          1400: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    //>> categorySlider Slider Start <<//
    if ($(".categorySlider").length > 0) {
      const categorySlider = new Swiper(".categorySlider", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".dot",
          clickable: true,
        },
        breakpoints: {
          1400: {
            slidesPerView: 6,
          },
          1200: {
            slidesPerView: 5,
          },
          992: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          576: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    //>> cta-slider Start <<//
    if ($(".cta-slider").length > 0) {
      const ctaSlider = new Swiper(".cta-slider", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".dot",
          clickable: true,
        },
        breakpoints: {
          1199: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    //>> instagram slider Start <<//
    if ($(".instagramSlider").length > 0) {
      const instagramSlider = new Swiper(".instagramSlider", {
        spaceBetween: 30,
        speed: 1200,
        loop: true,
        autoplay: {
          delay: 1200,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".arrow-next",
          prevEl: ".arrow-prev",
        },
        breakpoints: {
          1199: {
            slidesPerView: 5,
          },
          991: {
            slidesPerView: 4,
          },
          767: {
            slidesPerView: 3,
          },
          575: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    //>> thumb slider Start <<//
    if ($(".thumb-slider").length > 0) {
      const thumbSlider = new Swiper(".thumb-slider", {
        spaceBetween: 30,
        speed: 2500,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-next",
          prevEl: ".array-prev",
        },
      });
    }

    if ($(".imgSlider").length > 0) {
      var swiper = new Swiper(".imgSlider", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
    }

    if ($(".imgSlider2").length > 0) {
      var swiper2 = new Swiper(".imgSlider2", {
        spaceBetween: 10,
        thumbs: {
          swiper: swiper,
        },
      });
    }

    //>> Search Popup Start <<//
    const $searchWrap = $(".search-wrap");
    const $navSearch = $(".nav-search");
    const $searchClose = $("#search-close");

    $(".search-trigger").on("click", function (e) {
      e.preventDefault();
      $searchWrap.animate({ opacity: "toggle" }, 500);
      $navSearch.add($searchClose).addClass("open");
    });

    $(".search-close").on("click", function (e) {
      e.preventDefault();
      $searchWrap.animate({ opacity: "toggle" }, 500);
      $navSearch.add($searchClose).removeClass("open");
    });

    function closeSearch() {
      $searchWrap.fadeOut(200);
      $navSearch.add($searchClose).removeClass("open");
    }

    $(document.body).on("click", function (e) {
      closeSearch();
    });

    $(".search-trigger, .main-search-input").on("click", function (e) {
      e.stopPropagation();
    });


   //>> Mouse Cursor Start <<//
        function mousecursor() {
            if ($("body")) {
                const e = document.querySelector(".cursor-inner"),
                    t = document.querySelector(".cursor-outer");
                let n,
                    i = 0,
                    o = !1;
                (window.onmousemove = function(s) {
                    o ||
                        (t.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (e.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (n = s.clientY),
                        (i = s.clientX);
                }),
                $("body").on("mouseenter", "a, .cursor-pointer", function() {
                        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                    }),
                    $("body").on("mouseleave", "a, .cursor-pointer", function() {
                        ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
                        (e.classList.remove("cursor-hover"),
                            t.classList.remove("cursor-hover"));
                    }),
                    (e.style.visibility = "visible"),
                    (t.style.visibility = "visible");
            }
        }
        $(function() {
            mousecursor();
        });
        
         //>> Back To Top Slider Start <<//
         $windowOn.on('scroll', function() {
            if ($(this).scrollTop() > 20) {
                $("#back-top").addClass("show");
            } else {
                $("#back-top").removeClass("show");
            }
        });
        
        $documentOn.on('click', '#back-top', function() {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });

  }); // End Document Ready Function

  // star background color

  function handleStarRating(starGroup) {
    const stars = starGroup.querySelectorAll('i');
  
    stars.forEach(star => {
      star.addEventListener('mouseover', () => {
        highlightStars(stars, star.dataset.index);
      });
  
      star.addEventListener('mouseout', () => {
        clearHighlight(stars);
      });
  
      star.addEventListener('click', () => {
        selectStars(stars, star.dataset.index);
      });
    });
  }
  
  function highlightStars(stars, index) {
    stars.forEach(star => {
      star.classList.toggle('hovered', star.dataset.index <= index);
    });
  }
  
  function clearHighlight(stars) {
    stars.forEach(star => star.classList.remove('hovered'));
  }
  
  function selectStars(stars, index) {
    stars.forEach(star => {
      star.classList.toggle('selected', star.dataset.index <= index);
    });
  }
  
  document.querySelectorAll('.star-rating').forEach(handleStarRating);
  

  //Price Range Slideer
  document.addEventListener("DOMContentLoaded", function () {
    const minSlider = document.getElementById("min-slider");
    const maxSlider = document.getElementById("max-slider");
    const amount = document.getElementById("amount");

    function updateAmount() {
      const minValue = parseInt(minSlider.value, 10);
      const maxValue = parseInt(maxSlider.value, 10);

      // Ensure the minimum value is always lower than the maximum value
      if (minValue > maxValue) {
        minSlider.value = maxValue;
      }

      // Update the displayed price range
      amount.value = "R" + minSlider.value + " - R" + maxSlider.value;

      // Calculate the percentage positions of the sliders
      const minPercent =
        ((minSlider.value - minSlider.min) /
          (minSlider.max - minSlider.min)) *
        100;
      const maxPercent =
        ((maxSlider.value - maxSlider.min) /
          (maxSlider.max - maxSlider.min)) *
        100;

      // Update the background gradient to show the active track color
      minSlider.style.background = `linear-gradient(to right, #D0D0D2 ${minPercent}%, #c89128 ${minPercent}%, #c89128 ${maxPercent}%, #D0D0D2 ${maxPercent}%)`;
      maxSlider.style.background = `linear-gradient(to right, #D0D0D2 ${minPercent}%, #c89128 ${minPercent}%, #c89128 ${maxPercent}%, #D0D0D2 ${maxPercent}%)`;
    }

    // Initialize the sliders and track with default values
    amount && updateAmount();

    // if (minSlider && maxSlider) {

    // Add event listeners for both sliders
    minSlider && minSlider.addEventListener("input", updateAmount);
    maxSlider && maxSlider.addEventListener("input", updateAmount);
    // }
  });

  function loader() {
    $windowOn.on('load', function() {
        // Animate loader off screen
        $(".preloader").addClass('loaded');
        $(".preloader").delay(600).fadeOut();
    });
}
  loader();
  
})(jQuery); // End jQuery
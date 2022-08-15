// $(document).ready(function () {
//   // Toggle menu on click
//   $("#menu-toggler").click(function () {
//     toggleBodyClass("menu-active");
//   });

//   function toggleBodyClass(className) {
//     document.body.classList.toggle(className);
//   }
// });

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const html = document.querySelector("html");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  html.classList.toggle("overflow");
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".Hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

$(document).ready(function () {
  // Progressbar
  var $slider = $(".sliderDemo");
  var $progressBar = $(".progressBar");
  var $progressBarLabel = $(".progressBarLabel");

  //$('.bannerItem1').clone().appendTo('.sliderDemo');

  // ADD CONTENT
  $slider.on("init", function () {
    //manually create element and append
    console.log("entraaa");
  });

  // Initialize slick
  $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    var calc = (nextSlide / (slick.slideCount - 1)) * 100;

    $progressBar
      .css("background-size", calc + "% 100%")
      .attr("aria-valuenow", calc);

    $progressBarLabel.text(calc + "% completed");
  });

  // Slick parameters
  $slider.slick({
    centerMode: false,
    slidesToShow: 1.9,
    slidesToScroll: 2,
    infinite: false,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 8000,
    arrows: true,
    responsive: [
      {

        breakpoint: 1199,
        settings: {
          centerPadding: "42px",
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        // BS4 MD
        breakpoint: 991,
        settings: {
          centerPadding: "42px",
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
      {
        // BS4 SM
        breakpoint: 767,
        settings: {
          centerPadding: "42px",
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
      {
        // BS4 XS
        breakpoint: 575,
        settings: {
          centerPadding: "42px",
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },

      {
        // BS4 XS
        breakpoint: 475,
        settings: {
          centerPadding: "42px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

    ],
  });
});

$(".applications").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

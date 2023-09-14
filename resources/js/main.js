window.addEventListener("wheel", (e) => {
  const header = document.querySelector(".header");
  const yOffset = window.scrollY || document.documentElement.scrollTop;
  yOffset > 0 ? header.classList.add("scroll") : header.classList.remove("scroll");
});

$(".popup_image").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
});

const closeBtn = document.getElementById("close_btn");
const popup = document.getElementById("popup_wrap");
closeBtn.onclick = function () {
  popup.style.display = "none";
};

$(".main_visual").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: ".main_visual_prev",
  nextArrow: ".main_visual_next",
  dots: true,
  appendDots: ".main_visual_paging",
  customPaging: function (slider, i) {
    return i + 1 + "/" + slider.slideCount;
  },
});

$(".main_visual_play").click(function () {
  $(".main_visual").slick("slickPlay");
  $(".main_visual_play").removeClass("on");
  $(".main_visual_pause").addClass("on");
});
$(".main_visual_pause").click(function () {
  $(".main_visual").slick("slickPause");
  $(".main_visual_pause").removeClass("on");
  $(".main_visual_play").addClass("on");
});

$(".quickmenu").slick({
  slidesToShow: 10,
  infinite: false,
  arrows: true,
  prevArrow: ".quickmenu_controller .arrow_board_prev",
  nextArrow: ".quickmenu_controller .arrow_board_next",
  responsive: [
    {
      breakpoint: 1750,
      settings: {
        slidesToShow: 7,
        arrows: true,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 6,
        arrows: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        arrows: true,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 4,
        arrows: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        arrows: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        arrows: true,
      },
    },
  ],
});

$(".imgbanner").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: ".imgbanner_controller .arrow_board_prev",
  nextArrow: ".imgbanner_controller .arrow_board_next",
  dots: true,
  appendDots: ".imgbanner_paging",
  customPaging: function (slider, i) {
    return "<span>" + (i + 1) + "</span>" + "/" + slider.slideCount;
  },
});

$(".item_circle1").slick({
  slidesToShow: 6,
  infinite: false,
  arrows: false,
  prevArrow: ".item_circle_controller .arrow_zone_circle_prev",
  nextArrow: ".item_circle_controller .arrow_zone_circle_next",
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 5,
        arrows: true,
      },
    }
  ],
});
$(".item_circle2").slick({
  slidesToShow: 6,
  infinite: false,
  arrows: true,
  prevArrow: ".item_circle_controller .arrow_zone_circle_prev",
  nextArrow: ".item_circle_controller .arrow_zone_circle_next",
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 5,
        arrows: true,
      },
    }
  ],
});
$(".item_circle3").slick({
  slidesToShow: 6,
  infinite: false,
  arrows: false,
  prevArrow: ".item_circle_controller .arrow_zone_circle_prev",
  nextArrow: ".item_circle_controller .arrow_zone_circle_next",
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 5,
        arrows: true,
      },
    }
  ],
});

$(".event_month").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: ".event_month_controller .arrow_board_prev",
  nextArrow: ".event_month_controller .arrow_board_next",
  dots: true,
  appendDots: ".event_month_paging",
  customPaging: function (slider, i) {
    return "<span>" + (i + 1) + "</span>" + "/" + slider.slideCount;
  },
});
$(".event_week").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: false,
  arrows: true,
  prevArrow: ".event_week_controller .arrow_board_prev",
  nextArrow: ".event_week_controller .arrow_board_next",
  dots: true,
  appendDots: ".event_week_paging",
  customPaging: function (slider, i) {
    return i + 1 + "/" + slider.slideCount;
  },
});
$(".imgslide").slick({
  fade: true,
  slidesToShow: 1,
  draggable: false,
  lazyLoad: 'progressive',
  // slidesToScroll: 1,
  infinite: true,
  // autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: ".imgslide_controller .arrow_board_prev",
  nextArrow: ".imgslide_controller .arrow_board_next",
  dots: true,
  appendDots: ".imgslide_paging",
  customPaging: function (slider, i) {
    return "<span>" + (i + 1) + "</span>" + "/" + slider.slideCount;
  },
});
$(".link_banner").slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  infinite: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: ".link_banner_controller .arrow_board_prev",
  nextArrow: ".link_banner_controller .arrow_board_next",
});

$(".arrow_board_play").click(function () {
  $(".link_banner").slick("slickPlay");
  $(".arrow_board_play").removeClass("on");
  $(".arrow_board_pause").addClass("on");
});
$(".arrow_board_pause").click(function () {
  $(".link_banner").slick("slickPause");
  $(".arrow_board_pause").removeClass("on");
  $(".arrow_board_play").addClass("on");
});

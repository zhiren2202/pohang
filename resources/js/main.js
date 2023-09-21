// 헤더 스크롤
window.addEventListener("wheel", (e) => {
  const header = document.querySelector(".header");
  const yOffset = window.scrollY || document.documentElement.scrollTop;
  yOffset > 0 ? header.classList.add("scroll") : header.classList.remove("scroll");
});

// 모바일메뉴
document.querySelector(".header_btn_mobile_menu").addEventListener("click", function(e){
  if ( document.querySelector('.mobile_menu').classList.contains('open') ){
      document.querySelector('.mobile_menu').classList.remove('open');
  } else {
      document.querySelector('.mobile_menu').classList.add('open');
  }
});
document.querySelector(".btn_mobile_menu_close").addEventListener("click", function(e){
  if ( document.querySelector('.mobile_menu').classList.contains('open') ){
      document.querySelector('.mobile_menu').classList.remove('open');
  } else {
      document.querySelector('.mobile_menu').classList.add('open');
  }
});

// 모바일 탭메뉴
const tabListMobile = document.querySelectorAll('.mobile_menu_list .mobile_tabmenu');
const contentsMobile = document.querySelectorAll('.mobile_menu_contents')
let activeContMobile = '';
for(var i = 0; i < tabListMobile.length; i++){
  tabListMobile[i].querySelector('.mobile_tabmenu > a').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabListMobile.length; j++){
      tabListMobile[j].classList.remove('active');
      contentsMobile[j].style.display = 'none';
    }
    this.parentNode.classList.add('active');
    activeContMobile = this.getAttribute('href');
    document.querySelector(activeContMobile).style.display = 'block';
  });
}

// 메인 비주얼
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

// 메인 퀵메뉴
$(".quickmenu").slick({
  slidesToShow: 10,
  infinite: false,
  arrows: true,
  prevArrow: ".quickmenu_controller .arrow_board_prev",
  nextArrow: ".quickmenu_controller .arrow_board_next",
  responsive: [
    {
      breakpoint: 1281,
      settings: {
        slidesToShow: 7,
        arrows: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 5,
        arrows: true,
      },
    },
    {
      breakpoint: 415,
      settings: {
        slidesToShow: 3,
        arrows: true,
      },
    },
  ],
});

// BEST 퐝퐝
const tabList = document.querySelectorAll('.tab_best_section .tab_best_button');
const contents = document.querySelectorAll('.tab_best_section .tab_best_contents')
let activeCont = '';
for(var i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.tab_best_button > a').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
      tabList[j].classList.remove('active');
      contents[j].style.display = 'none';
    }
    this.parentNode.classList.add('active');
    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'block';
  });
}


// 권역별 즐겨퐝
const tabListArea = document.querySelectorAll('.tab_area_section .tab_area_button');
const contentsArea = document.querySelectorAll('.tab_area_section .tab_area_contents');
const tabListCourse = document.querySelectorAll('.tab_area_course .course');
let activeContArea = '';
for(var i = 0; i < tabListArea.length; i++){
  tabListArea[i].querySelector('.tab_area_button > a').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabListArea.length; j++){
      tabListArea[j].classList.remove('active');
      contentsArea[j].style.display = 'none';
    }
    this.parentNode.classList.add('active');
    activeContArea = this.getAttribute('href');
    document.querySelector(activeContArea).style.display = 'block';
  });
}
for(var i = 0; i < tabListCourse.length; i++){
  tabListCourse[i].querySelector('.course_button').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabListCourse.length; j++){
      tabListCourse[j].classList.remove('active');
    }
    this.parentNode.classList.add('active');
  });
}

$(".item_circle1").slick({
  slidesToShow: 6,
  infinite: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1025,
      settings : {
        variableWidth: true,
      }
    },
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 5,
        arrows: true,
        prevArrow: ".item_circle_controller .arrow_zone_circle_prev",
        nextArrow: ".item_circle_controller .arrow_zone_circle_next",
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 4,
        arrows: true,
        prevArrow: ".item_circle_controller .arrow_zone_circle_prev",
        nextArrow: ".item_circle_controller .arrow_zone_circle_next",
      }
    },
    {
      breakpoint: 361,
      settings: {
        slidesToShow: 3,
        arrows: true,
        prevArrow: ".item_circle_controller .arrow_zone_circle_prev",
        nextArrow: ".item_circle_controller .arrow_zone_circle_next",
      }
    }
  ],
});
$(".item_circle2").slick({
  slidesToShow: 6,
  infinite: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 5,
        arrows: true,
        prevArrow: ".item_circle_controller .arrow_zone_circle_prev",
        nextArrow: ".item_circle_controller .arrow_zone_circle_next",
      },
    }
  ],
});
$(".item_circle3").slick({
  slidesToShow: 6,
  infinite: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 5,
        arrows: true,
        prevArrow: ".item_circle_controller .arrow_zone_circle_prev",
        nextArrow: ".item_circle_controller .arrow_zone_circle_next",
      },
    }
  ],
});

// TV에 나온 퐝
$(".imgbanner").slick({
  fade: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: false,
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

// 이달의 축제/문화 행사
$(".event_month").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: ".event_month_controller .arrow_board_prev",
  nextArrow: ".event_month_controller .arrow_board_next",
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        arrows: true,
      },
    },
    {
      breakpoint: 821,
      settings: {
        slidesToShow: 3,
        arrows: true,
      },
    },
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 2,
        arrows: true,
      },
    }
  ],
  dots: true,
  appendDots: ".event_month_paging",
  customPaging: function (slider, i) {
    return "<span>" + (i + 1) + "</span>" + "/" + slider.slideCount;
  },
});
$(".event_week").slick({
  fade: true,
  slidesToShow: 1,
  // slidesToScroll: 1,
  infinite: true,
  // autoplay: true,
  speed: 1000,
  arrows: true,
  prevArrow: ".event_week_controller .arrow_board_prev",
  nextArrow: ".event_week_controller .arrow_board_next",
  dots: true,
  appendDots: ".event_week_paging",
  customPaging: function (slider, i) {
    return i + 1 + "/" + slider.slideCount;
  },
});

// 팝업존
$(".popupzone").slick({
  fade: true,
  slidesToShow: 1,
  draggable: false,
  lazyLoad: 'progressive',
  // slidesToScroll: 1,
  infinite: true,
  // autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: ".popupzone_controller .arrow_board_prev",
  nextArrow: ".popupzone_controller .arrow_board_next",
  dots: true,
  appendDots: ".popupzone_paging",
  customPaging: function (slider, i) {
    return "<span>" + (i + 1) + "</span>" + "/" + slider.slideCount;
  },
});

// 배너모음
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

// 푸터 관련기관,패밀리사이트 셀렉트박스 구현
const selectBtn = document.querySelectorAll('.footer_top_select .select_btn');
selectBtn.forEach(function(lb){
    lb.addEventListener('click', e => {
        let optionList = lb.nextElementSibling;
        let selectItem = optionList.querySelectorAll('.footer_top_select .select_item');
        clickLabel(lb, selectItem);
    })
});
const clickLabel = (lb, selectItem) => {
    if(lb.parentNode.classList.contains('active')) {
        lb.parentNode.classList.remove('active');
    } else {
        lb.parentNode.classList.add('active');
    }
}
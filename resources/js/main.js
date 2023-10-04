// 헤더 스크롤
window.addEventListener("wheel", (e) => {
  const header = document.querySelector(".header");
  const yOffset = window.scrollY || document.documentElement.scrollTop;
  yOffset > 0 ? header.classList.add("scroll") : header.classList.remove("scroll");
});

// 모바일메뉴-펼치기,닫기
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

// 모바일메뉴-탭메뉴
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

// 우측 네비게이션메뉴
const asideMenuItem = document.querySelectorAll('.aside_menu_item');
for(var i = 0; i < asideMenuItem.length; i++){
  asideMenuItem[i].addEventListener('click', function(){
    for(var j = 0; j < asideMenuItem.length; j++){
      asideMenuItem[j].classList.remove('active');
    }
    this.classList.add('active');
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
  arrows: false,
  prevArrow: "<button class='arrow_board_prev' aria-label='Previous' type='button'></button>",
  nextArrow: "<button class='arrow_board_next' aria-label='Next' type='button'></button>",
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
const tabList = document.querySelectorAll('.main_best_section .main_best_button');
const contents = document.querySelectorAll('.main_best_section .main_best_contents')
let activeCont = '';
for(var i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.main_best_button > a').addEventListener('click', function(e){
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
const tabListArea = document.querySelectorAll('.main_area_section .main_area_button');
const contentsArea = document.querySelectorAll('.main_area_section .main_area_contents');
const tabListCourse = document.querySelectorAll('.main_area_course .course');
let activeContArea = '';

for(var i = 0; i < tabListArea.length; i++){
  tabListArea[i].querySelector('.main_area_button > a').addEventListener('click', function(e){
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

for(var i = 0; i < (tabListCourse).length; i++){
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
  infinite: true,
  arrows: false,
  prevArrow: "<button class='arrow_zone_circle_prev' aria-label='Previous' type='button'></button>",
  nextArrow: "<button class='arrow_zone_circle_next' aria-label='Next' type='button'></button>",
  autoplay: true,
  autoplaySpeed: 2000,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1281,
      variableWidth: false,
      settings : {
        variableWidth: false,
      }
    },
    {
      breakpoint: 1025,
      settings : {
        variableWidth: false,
      }
    },
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 5,
        variableWidth: false,
        arrows: true,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 4,
        variableWidth: false,
        arrows: true,
      }
    },
    {
      breakpoint: 361,
      settings: {
        slidesToShow: 3,
        variableWidth: false,
        arrows: true,
      }
    }
  ],
});

$(".item_circle2").slick({
  slidesToShow: 6,
  infinite: true,
  arrows: false,
  prevArrow: "<button class='arrow_zone_circle_prev' aria-label='Previous' type='button'></button>",
  nextArrow: "<button class='arrow_zone_circle_next' aria-label='Next' type='button'></button>",
  autoplay: true,
  autoplaySpeed: 2000,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1281,
      variableWidth: false,
      settings : {
        variableWidth: false,
      }
    },
    {
      breakpoint: 1025,
      settings : {
        variableWidth: false,
      }
    },
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 5,
        variableWidth: false,
        arrows: true,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 4,
        variableWidth: false,
        arrows: true,
      }
    },
    {
      breakpoint: 361,
      settings: {
        slidesToShow: 3,
        variableWidth: false,
        arrows: true,
      }
    }
  ],
});

$(".item_circle3").slick({
  slidesToShow: 6,
  infinite: true,
  arrows: false,
  prevArrow: "<button class='arrow_zone_circle_prev' aria-label='Previous' type='button'></button>",
  nextArrow: "<button class='arrow_zone_circle_next' aria-label='Next' type='button'></button>",
  autoplay: true,
  autoplaySpeed: 2000,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1281,
      variableWidth: false,
      settings : {
        variableWidth: false,
      }
    },
    {
      breakpoint: 1025,
      settings : {
        variableWidth: false,
      }
    },
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 5,
        variableWidth: false,
        arrows: true,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 4,
        variableWidth: false,
        arrows: true,
      }
    },
    {
      breakpoint: 361,
      settings: {
        slidesToShow: 3,
        variableWidth: false,
        arrows: true,
      }
    }
  ],
});

// TV에 나온 퐝
$(".main_place").slick({
  fade: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: ".main_place_group .arrow_board_prev_white",
  nextArrow: ".main_place_group .arrow_board_next_white",
  dots: true,
  appendDots: ".main_place_paging",
  customPaging: function (slider, i) {
    return "<span>" + (i + 1) + "</span>" + "/" + slider.slideCount;
  },
});

// 이달의 축제/문화 행사
$(".main_carnival_month").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: ".main_carnival_month_group .arrow_board_prev",
  nextArrow: ".main_carnival_month_group .arrow_board_next",
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
  appendDots: ".main_carnival_month_paging",
  customPaging: function (slider, i) {
    return "<span>" + (i + 1) + "</span>" + "/" + slider.slideCount;
  },
});
$(".main_carnival_week").slick({
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  speed: 1500,
  arrows: true,
  prevArrow: ".main_carnival_week_group .arrow_board_prev",
  nextArrow: ".main_carnival_week_group .arrow_board_next",
  dots: true,
  appendDots: ".main_carnival_week_paging",
  customPaging: function (slider, i) {
    return i + 1 + "/" + slider.slideCount;
  },
});

// 팝업존
$(".main_popupzone").slick({
  fade: true,
  slidesToShow: 1,
  draggable: false,
  lazyLoad: 'progressive',
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  prevArrow: ".main_popupzone .arrow_board_prev",
  nextArrow: ".main_popupzone .arrow_board_next",
  dots: true,
  appendDots: ".main_popupzone_paging",
  customPaging: function (slider, i) {
    return "<span>" + (i + 1) + "</span>" + "/" + slider.slideCount;
  },
});

// 배너모음
$(".main_link").slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  infinite: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: ".main_link_controller .arrow_board_prev",
  nextArrow: ".main_link_controller .arrow_board_next",
});
$(".arrow_board_play").click(function () {
  $(".main_link").slick("slickPlay");
  $(".arrow_board_play").removeClass("on");
  $(".arrow_board_pause").addClass("on");
});
$(".arrow_board_pause").click(function () {
  $(".main_link").slick("slickPause");
  $(".arrow_board_pause").removeClass("on");
  $(".arrow_board_play").addClass("on");
});

// 푸터 관련기관,패밀리사이트 셀렉트박스 구현
const selectBtn = document.querySelectorAll('.footer_top_select .select_btn');
selectBtn.forEach(function(lb){
    lb.addEventListener('click', e => {
        clickLabel(lb);
    })
});
const clickLabel = (lb) => {
    if(lb.parentNode.classList.contains('active')) {
        lb.parentNode.classList.remove('active'); 
    } else {
        lb.parentNode.classList.add('active');
    }
}

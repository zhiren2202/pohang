$('.main_visual').slick({	 
    slidesToShow : 1,
    slidesToScroll : 1,
    autoplay : true,
    autoplaySpeed : 2000,
    arrows : true,
    prevArrow : '.main_visual_prev',
    nextArrow : '.main_visual_next',
    dots : true,
    appendDots: '.main_visual_paging',
    customPaging: function (slider, i) {
        return '<span>'+(i + 1)+'</span>' + '/' + slider.slideCount;
    }
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
  arrows : false,
  prevArrow : '.arrow_board_prev',
  nextArrow : '.arrow_board_next',
  responsive: [
    {
      breakpoint: 1750,
      settings: {
        slidesToShow: 7,
        arrows : true,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 6,
        arrows : true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        arrows : true,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 4,
        arrows : true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        arrows : true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        arrows : true,
      },
    },
  ],
});

$('.imgbanner').slick({	 
    slidesToShow : 1,
    slidesToScroll : 1,
    infinite: false,
    autoplay : true,
    autoplaySpeed : 2000,
    arrows : true,
    prevArrow : '.arrow_board_prev',
    nextArrow : '.arrow_board_next',
});
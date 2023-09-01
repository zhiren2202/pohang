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

$('.quickmenu_wrapper').slick({
    slidesToShow : 10
});
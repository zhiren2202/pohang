$(".popup_image").slick({
    fade: true,
    speed: 1000,
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
    }
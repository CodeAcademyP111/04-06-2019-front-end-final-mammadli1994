$(document).ready(function () {
    $(window).scroll(function () {
        if (scrollY > 100) {
            $("header").css("background-color", "white");
            $(".navbar-brand").attr("src","img/12.png")
        }else{
            $("header").css("background-color", "")
        }
    })

    $('.carousel').carousel({
        interval: 0
      })

})
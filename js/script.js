/*slider height*/
$(document).ready(function () {
    var screenHeight = screen.height;
    var sliderHeight = screenHeight - 150;
    var mainText = screenHeight/3;
    console.log(sliderHeight)
    $('.carousel__inner').css('max-height', sliderHeight);

    /*main text*/
    $('.slider__promo').css('top', mainText);
});

/*
parallax*/
var rellax = new Rellax('.prlx');

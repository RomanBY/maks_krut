/*slider height*/
$(document).ready(function () {
    var screenHeight = screen.height;
    var sliderHeight = screenHeight - 150;
    var mainText = screenHeight/3;
    console.log('height screen', sliderHeight)
    $('.carousel__inner').css('max-height', sliderHeight);

    /*main text*/
    $('.slider__promo').css('top', mainText);
});

/*
parallax*/
var rellax = new Rellax('.prlx');

/*input phone number*/
$(function(){
    $("#exampleInputNumber").mask("+375(99) 999-99-99");
});
/*slider height*/
$(document).ready(function () {
    var screenHeight = screen.height;
    var sliderHeight = screenHeight - 150;
    var mainText = screenHeight/3;
    console.log('height screen', sliderHeight);
    $('.carousel__inner').css('max-height', sliderHeight);

    /*main text*/
    $('.slider__promo').css('top', mainText);
});



/*parallax*/

var rellax = new Rellax('.prlx');

/*input phone number*/
$(function(){
    $("#exampleInputNumber").mask("+375(99) 999-99-99");
});



/*button up*/
$(document).ready(function(){
    $('body').append('<a href="#" id="go-top" title="Вверх"></a>');
});

$(function() {
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow");
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow");
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, 1000)
        })
    }
});

$(function() {
    $("#go-top").scrollToTop();
});



/*animate on scroll EXPERIENCE*/

$(document).ready(function () {
    expBlock1 = ($('.experience__block1').offset().top) - 800;
    expBlock2 = ($('.experience__block2').offset().top) - 800;
    expBlock3 = ($('.experience__block3').offset().top) - 800;
    expBlock4 = ($('.experience__block4').offset().top) - 800;

    console.log(expBlock1, expBlock2, expBlock3,expBlock4);

});

$(document).scroll(function () {
    if ($(window).scrollTop() >= expBlock1){

        $('.experience__block1').delay(100).animate({
                opacity: 1,
                left: 0
            }, 'slow'
        )}
    if ($(window).scrollTop() >= expBlock2){

        $('.experience__block2').delay(100).animate({
                opacity: 1,
                left: 0
            }, 'slow'
        )}
    if ($(window).scrollTop() >= expBlock3){

        $('.experience__block3').delay(400).animate({
                opacity: 1,
                left: 0
            }, 'slow'
        )}
    if ($(window).scrollTop() >= expBlock4){

        $('.experience__block4').delay(400).animate({
                opacity: 1,
                left: 0
            }, 'slow'
        )}
});


/*animate on scroll info*/

$(document).ready(function () {
    infoBlock1 = ($('.info1').offset().top) - 800;
    infoBlock2 = ($('.info2').offset().top) - 800;
    infoBlock3 = ($('.info3').offset().top) - 800;
    infoBlock4 = ($('.info4').offset().top) - 800;
    infoBlock5 = ($('.info5').offset().top) - 800;
    infoBlock6 = ($('.info6').offset().top) - 800;
});

$(document).scroll(function () {
    if ($(window).scrollTop() >= infoBlock1){
        $('.info1').delay(100).animate({
            opacity: 1,
            left: 0
        }, 'slow'
        )}

    if ($(window).scrollTop() >= infoBlock2){
        $('.info2').delay(300).animate({
                opacity: 1,
                left: 0
            }, 'slow'
        )}
    if ($(window).scrollTop() >= infoBlock3){
        $('.info3').delay(100).animate({
                opacity: 1,
                left: 0
            }, 'slow'
        )}
    if ($(window).scrollTop() >= infoBlock4){
        $('.info4').delay(400).animate({
                opacity: 1,
                left: 0
            }, 'slow'
        )}
    if ($(window).scrollTop() >= infoBlock5){
        $('.info5').delay(600).animate({
                opacity: 1,
                left: 0
            }, 'slow'
        )}
    if ($(window).scrollTop() >= infoBlock6){
        $('.info6').delay(400).animate({
                opacity: 1,
                left: 0
            }, 'slow'
        )}
});

/*animate feedback-block on scroll*/
$(window).scroll(function () {
    var scrlFB = $('#feedbackForm').offset().top;
    var scrlFBAnm = scrlFB - 900;
    /*$('#feedbackForm').html(scrlFB);*/

    if ($(window).scrollTop() >= scrlFBAnm) {

        $('.formEmail').delay(50).animate({
                opacity: 1,
                left: 0
            }, 'slow'
        );
        $('.formNumber').delay(500).animate({
                opacity: 1,
                left: 0
            }, 'slow'
        );
        $('.formName').delay(900).animate({
                opacity: 1,
                left: 0
            }, 'slow'
        );
        $('.formControl').delay(1300).animate({
                opacity: 1,
                left: 0
            }, 'slow'
        );
        $('.formButton').delay(1600).animate({
                opacity: 1,
                bottom: 0
            }, 'slow'
        );
    }
});
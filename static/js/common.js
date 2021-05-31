// $(window).on('scroll', function() {
//     var $this = $(this),
//         $header = $('.header'),
//         $headerHeight = $('.header').height();
//     if ($this.scrollTop() >= $headerHeight + 150) {
//         $header.addClass('scroll-nav');
//         $('.page-content').addClass('scroll-header');
//     }
//     else{
//         $header.removeClass('scroll-nav');
//         $('.page-content').removeClass('scroll-header');
//     }
// });
// $(document).mouseup(function (e){
//     var div = $('.header-lang');
//     if (!div.is(e.target)
//         && div.has(e.target).length === 0) {
//         $(div).removeClass('open');
//     }
// });
// $('.header-lang__title').on('click', function (e) {
//     var $this = $(this);
//     var $thisParent  = $this.parent();
//     $thisParent.toggleClass('open');
// });
//
$('.btn-nav').on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('open').find('.icon').toggleClass('hidden');
    $('.header-nav').toggleClass('open');
    $('.header-overlay').toggleClass('active');
});

$('.header-overlay').on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('open');
    $('.header-nav').toggleClass('open');
    $('.btn-nav').toggleClass('open').find('.icon').toggleClass('hidden');
});
//
// var swiper = new Swiper(".hero-slider", {
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });

var slideAll = $('.main-slider .swiper-slide').length;
var counter = $('.swiper-current');
var counterAll = $('.swiper-all');
var currentCount = $('<span class="count">01<span/>');
counter.append(currentCount);
counterAll.append('0' + slideAll);
var mainslider = new Swiper('.main-slider', {
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
mainslider.on('transitionStart', function () {
    var index = this.activeIndex + 1,
        $current = $(".main-slider .seipwer-slior").eq(index),
        $c_cur = $("#count_cur"),
        $c_next = $("#count_next"),
        dur = 0.8;
    var prevCount = $('.count');
    currentCount = $('<span class="count next">'+ '0' + index + '<span/>');
    counter.html(currentCount);
});

$('.basic-select').select2();


function topPopups() {

    var headerButton4 = $(".header-top__user .header-btn:nth-child(4)").offset();
    var headerButton3 = $(".header-top__user .header-btn:nth-child(3)").offset();
    var headerButton2 = $(".header-top__user .header-btn:nth-child(2)").offset();
    var headerButton1 = $(".header-top__user .header-btn:nth-child(1)").offset();
    $('.popup-login').css('left', headerButton4.left - 250);
    $('.popup-money').css('left', headerButton3.left - 250);
    $('.popup-lang').css('left', headerButton2.left - 250);
    $('.popup-phone').css('left', headerButton1.left - 250);


    $('.header-top__user .header-btn').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var popupButtonData = $this.data('popup');

        if($this.hasClass('active')){
            console.log('$this.hassClass(\'active\')')
        }else{
            console.log('$this.hassClass(\'hiii\')')
        }

        $('.header-top__user .header-btn').removeClass('active');

        $('.header-popup').removeClass('active');

        $this.toggleClass('active');

        $('div[data-popup = '+popupButtonData+']').toggleClass('active');
    });
    $(document).mouseup(function (e){
        var div = $('.header-popup');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $(div).removeClass('active');
            $('.header-top__user .header-btn').removeClass('active');
        }
    });
}
topPopups();


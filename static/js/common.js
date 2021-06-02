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
            $('.header-top__user .header-btn').removeClass('active');
            $('.header-popup').removeClass('active');
        }else{
            $('.header-top__user .header-btn').removeClass('active');
            $('.header-popup').removeClass('active');
            $this.addClass('active');
            $('div[data-popup = '+popupButtonData+']').addClass('active');
        }




    });
    $(document).mouseup(function (e){
        var div = $('.header-top__user, .header-popup');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            // $(div).removeClass('active');
            $('.header-top__user .header-btn, .header-popup').removeClass('active');
        }
    });
}
topPopups();
function filterPopups() {

    var filterButton1 = $(".filter .filter-item:nth-child(1)").offset();
    var filterButton2 = $(".filter .filter-item:nth-child(2)").offset();
    var filterButton3 = $(".filter .filter-item:nth-child(3)").offset();
    var filterButton4 = $(".filter .filter-item:nth-child(4)").offset();
    $('.popup-date').css('left', filterButton1.left - 135);
    $('.popup-location').css('left', filterButton2.left  - 70);
    $('.popup-price').css('left', filterButton3.left - 70);
    $('.popup-filter').css('left', filterButton4.left - 135);


    $('.filter .filter-item').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var popupButtonData = $this.data('popup');
        if($this.hasClass('active')){
            $('.filter-item').removeClass('active');
            $('.popup').removeClass('active');
        }else{
            $('.filter-item').removeClass('active');
            $('.popup').removeClass('active');
            $this.addClass('active');
            $('div[data-popup = '+popupButtonData+']').addClass('active');
        }


    });
    $(document).mouseup(function (e){
        var div = $('.filter-popup__inner, .filter');
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            // $(div).removeClass('active');
            $('.filter-item, .popup').removeClass('active');
        }
    });


    $('#inputLocation').keyup(function(){

        var that = this;
        var all_list = $('ul > li');

        var matching_list = all_list.filter(function(i, li){
            var list_item_text = $(li).text().toUpperCase();
            var search_text = that.value.toUpperCase();
            return ~list_item_text.indexOf(search_text);
        });

        all_list.hide();
        matching_list.show();

    });

    // var input = document.getElementById('inputLocation');
    // input.onkeyup = function () {
    //     var filter = input.value.toUpperCase();
    //     var lis = document.getElementsByTagName('li');
    //     for (var i = 0; i < lis.length; i++) {
    //         var name = lis[i].getElementsByClassName('name')[0].innerHTML;
    //         if (name.toUpperCase().indexOf(filter) == 0)
    //             lis[i].style.display = 'list-item';
    //         else
    //             lis[i].style.display = 'none';
    //     }
    // }
}
filterPopups();


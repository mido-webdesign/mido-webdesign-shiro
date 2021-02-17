$(function() {

// ハンバーガーボタンをクリックした時にメニューを表示
$('.burger-btn').click(function() {
    $(this).find('.bar').toggleClass('close');
    $('.header-menu').toggleClass('slide-in');
    $('body').toggleClass('noscroll');
});

// ハンバーガーメニューのリンクをクリックしたら移動してメニューが閉じる
$('.header-menu a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
        'scrollTop': position
    }, 500);
    $('.burger-btn .bar').removeClass('close');
    $('.header-menu').removeClass('slide-in');
    $('body').removeClass('noscroll');
});

// スクロールしたらヘッダーに文字色と背景色を付ける
$(window).scroll(function() {
    var fvHeight = $('.main-bg').height();
    var scroll = $(window).scrollTop();
    if(scroll > fvHeight - 50) {
        $('.header-logo').addClass('black');
        $('.burger-btn .bar').addClass('black');
    } else {
        $('.header-logo').removeClass('black');   
        $('.burger-btn .bar').removeClass('black');  
    }
});

// ヘッダーのロゴをクリックした時にページトップへ移動
$('.header-logo').click(function(){
    $('html, body').animate({
        'scrollTop': 0
    }, 500);
});

});

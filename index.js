/**
 * Created by Administrator on 2017/1/22.
 */
$(function () {
    //active样式切换
    $('.before,.Feb,.Mar,.Apr,.May,.June,.July,.Aug,.Sep,.Oct,.Nov,.Dec,.after').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
   
    //公共方法
    function months(month,monthInt){
        $(month).click(function(){
            $('.tips').fadeIn();
            $(monthInt).fadeIn(2000);
            $(monthInt).siblings().not('nav').hide();
        });
    }
    months('.before','.beforeBegin');
    months('.Feb','.FebIntroduction');
    months('.Mar','.MarIntroduction');
    months('.Apr','.AprIntroduction');
    months('.May','.MayIntroduction');
    months('.June','.JuneIntroduction');
    months('.July','.JulyIntroduction');
    months('.Aug','.AugIntroduction');
    months('.Sep','.SepIntroduction');
    months('.Oct','.OctIntroduction');
    months('.Nov','.NovIntroduction');
    months('.Dec','.DecIntroduction');
    months('.after','.afterText');
    // 2.3.9月份公共函数
    function open12(m,things){
       for (var i = 1; i <= 12; i++)
        (function (i) { $(m+i).click(function () {
            $(things+i).slideDown(800).siblings().slideUp(800); });
        })(i); 
    }
    open12('.Feb','.FebSmall_thing')
    //open6('.Sep','.SepSmall_thing')
    // 4.6月份公共函数
    function open41(m,things){
       for (var i = 1; i <= 41; i++)
        (function (i) { $(m+i).click(function () {
            $(things+i).slideDown(800).siblings().slideUp(800); });
        })(i); 
    }
    open41('.Mar','.MarSmall_thing')
    //open9('.June','.JuneSmall_thing');
    // 7.8月份
    function open8(m,things){
       for (var i = 1; i <= 8; i++)
        (function (i) { $(m+i).click(function () {
            $(things+i).slideDown(800).siblings().slideUp(800); });
        })(i); 
    }
    open8('.Apr','.AprSmall_thing');
    //open2('.July','.JulySmall_thing');
    //open2('.Aug','.AugSmall_thing');
    //五月
    for (var i = 1; i <= 3; i++)
        (function (i) { $('.May'+i).click(function () {
            $('.MaySmall_thing'+i).slideDown(800).siblings().hide(800); });
        })(i);
    // 10.11.12月
    function one(m,things){
        $(m).click(function () {
        $(things).slideDown(800).siblings().hide(800); });
    };
    one('.Oct1','.OctSmall_thing');
    one('.Nov1','.NovSmall_thing');
    one('.Dec1','.DecSmall_thing');

    //二月
    // for (var i = 1; i <= 6; i++)
    //     (function (i) { $('.Feb'+i).click(function () {
    //         $('.FebSmall_thing'+i).slideDown(800).siblings().slideUp(800); });
    //     })(i);
    
    //四月
    // for (var i = 1; i <= 9; i++)
    //     (function (i) { $('.Apr'+i).click(function () {
    //         $('.AprSmall_thing'+i).slideDown(800).siblings().slideUp(800); });
    //     })(i);
    
    // 八月
    // for (var i = 1; i <= 2; i++)
    // (function (i) { $('.Aug'+i).click(function () {
    //     $('.AugSmall_thing'+i).slideDown(800).siblings().hide(800); });
    // })(i);
    
    // 十月
    // $('.Oct1').click(function () {
    //     $('.OctSmall_thing').slideDown(800).siblings().hide(800); });
// 懒加载
$(function(){
    $("img.lazy").lazyload({
        effect:'fadeIn',
        event:'click',
        // skip_invisible : false
    });
});
    
});
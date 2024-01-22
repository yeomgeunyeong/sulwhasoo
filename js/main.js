$(function(){


    $(".select_language").click(function(){
        $(this).toggleClass("show")
    })


    //gnb메뉴
    $(".sub").hide();
    $(".gnb_menu > li").hover(function(){
        $(this).find(".sub").stop().slideDown();
        $(".gnb_menu").stop().animate({height:"80px"}, 500);
    }, function(){
        $(this).find(".sub").stop().slideUp();
        $(".gnb_menu").stop().animate({height:"50px"}, 500);
    })




    //이미지슬라이드 영역 slick
    $(".visual_wrap").slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        arrows:true,
    })

})//jquery
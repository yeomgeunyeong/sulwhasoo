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





    //선물추천 탭메뉴
    $(".btn_tab").click(function(e){
        e.preventDefault();
        $(".btn_tab").removeClass("on");
        $(this).addClass("on");

        n=$(this).index();
        console.log(n);

        $(".recommand_list_wrap>ul").removeClass("act");
        $(".recommand_list_wrap>ul").eq(n).addClass("act")
    })




    //flagship slick
    $(".flag_slide").slick({
        autoplay:true,
        autoplaySpeed:2500,
        dots:true,
        arrows:true,
        fade:true,
    })




    //모바일 영역
    $(".mob_nav_btn").click(function(){
        $(".mob_nav").addClass("left_move");
        $(".m_nav_bg").delay(300).fadeIn();
    })//

    $(".m_nav_bg").click(function(){
        $(".mob_nav").removeClass("left_move");
        $(".m_nav_bg").fadeOut();
    })


    $(".m_nav_list > li").hover(function(){
        $(this).find(".m_sub").stop().slideDown();
        $(this).find("a").addClass("on")
    }, function(){
        $(this).find(".m_sub").stop().slideUp();
        $(this).find("a").removeClass("on")
    })

    // $(".m_nav_list > li").click(function(){
    //     $(this).find("a").addClass("on");
    //     $(this).find(".m_sub").stop().slideDown();
    // })

  
    
    // $(".m_nav_list > li").click(function(){
    //     $(".m_sub").stop().slideUp();
    // });


})//jquery
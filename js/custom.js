/*global $,alert, console */
$(function () {
    'use strict';
    //Trigger niceScroll
    $('html').niceScroll({
        cursorcolor:'#f7600e',
        cursorwidth:10,
        cursorborderradius:0,
        cursorborder:'1px solid #f7600e'
    });
    //Change header height

    $('.header').height($(window).height());

    //show more

    $('.our-work .show-more').click(function(){
        $('.our-work .hidden').fadeIn(2000);
        
    })

    //Scroll To Features
    $('.header .arrow i').click(function(){
        $('html, body').animate({
            scrollTop: $('.features').offset().top   
        },500);
        
    })

    $('.hire').click(function(){
        $('html, body').animate({
            scrollTop: $('.our-team').offset().top   
        },500);
        
    })

    //Check testim
    var leftArrow = $('.fa-chevron-left'),
        rightArrow = $('.fa-chevron-right');

    function checkClient(){
        
        $('.client:first').hasClass('active')?leftArrow.fadeOut():leftArrow.fadeIn();
        $('.client:last').hasClass('active')?rightArrow.fadeOut():rightArrow.fadeIn();
    }

    checkClient();

    $('.testim i').click(function(){
        
        if($(this).hasClass('fa-chevron-right')){
            $('.testim .active').fadeOut(100, function(){
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                 checkClient();
            })
        }else{
            $('.testim .active').fadeOut(100, function(){
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                 checkClient();
            })
        }
      
    })
  




})
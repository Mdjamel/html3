/*global $,alert, console */
$(function () {
    'use strict';
    //Trigger niceScroll
    $('html').niceScroll();
    //Change header height

    $('.header').height($(window).height());

    //Scroll To Features
    $('.header .arrow i').click(function(){
        $('html, body').animate({
            scrollTop: $('.features').offset().top   
        },500);
        
    })

    $('.fa-chevron-right').click(function(){
        alert('dfgdfg');
    })
  




})
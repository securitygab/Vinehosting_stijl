/*
Author: webthemez.com
Author URL: http://webthemez.com
WHMCS Theme From: http://websiteresources.ca
*/

jQuery(function($) {
    'use strict';
     
    $(window).scroll(function(event) {
        Scroll();
    });

    $('.navxbar-collapse ul li a').on('click', function() {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 5
        }, 1000);
        return false;
    });
 
    function Scroll() {
        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;
        $('.navxbar-collapse').find('.scroll a').each(function() {
            contentTop.push($($(this).attr('href')).offset().top);
            contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
        })
        $.each(contentTop, function(i) {
            if (winTop > contentTop[i] - rangeTop) {
                $('.navxbar-collapse li.scroll')
                    .removeClass('active')
                    .eq(i).addClass('active');
            }
        })
    };

    $('#tohash').on('click', function() {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 5
        }, 1000);
        return false;
    });

  
    new WOW().init();
     
    smoothScroll.init();

 

});
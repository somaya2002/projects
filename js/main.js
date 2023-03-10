"use strict"

/* For preview only */
var theme2 = '<link rel="stylesheet" type="text/css" href="css/DarkSlateBlue-theme.css">';
var theme3 = '<link rel="stylesheet" type="text/css" href="css/gainsboro-theme.css">';

var themeBtn1 = '<div class="bctheme t1"></div>';
var themeBtn2 = '<div class="bctheme t2"></div>';
var themeBtn3 = '<div class="bctheme t3"></div>';
var themeBtnHolder = '<div class="bctheme-holder">'+themeBtn1+themeBtn2+themeBtn3+'</div>';
var themeBtnStyle = '<style>.bctheme-holder{display:inline-block;position:fixed;width:1.5rem;top:50%;right:1rem;z-index:999999} .bctheme{display:inline-block;width:1.5rem;height:1.5rem;border:0.2rem solid #fff;border-radius:2rem;cursor:pointer;box-shadow: 0 0.2rem 0.5rem rgba(0,0,0,0.2);} .bctheme.t1{background-color:#ee5365} .bctheme.t2{background-color:#483D8B} .bctheme.t3{background-color:#e5e5e5}</style>';
$('body').prepend(themeBtnStyle+themeBtnHolder);

var getTheme = localStorage.getItem("bctheme");
if(getTheme=='t1'){
    removeOtherStyles();
}else if(getTheme=='t2'){
    removeOtherStyles();
    $('head').append(theme2);
}else if(getTheme=='t3'){
    removeOtherStyles();
    $('head').append(theme3);
}

var themeBtn = $('.bctheme', '.bctheme-holder');
themeBtn.on('click',function(e){
    if($(this).hasClass('t1')){
        removeOtherStyles();
        localStorage.setItem("bctheme", "t1");
    }else if($(this).hasClass('t2')){
        removeOtherStyles();
        $('head').append(theme2);
        localStorage.setItem("bctheme", "t2");
    }else if($(this).hasClass('t3')){
        removeOtherStyles();
        $('head').append(theme3);
        localStorage.setItem("bctheme", "t3");
    }
});
function removeOtherStyles(){
    $('link[href="css/DarkSlateBlue-theme.css"]', 'head').remove();
    $('link[href="css/gainsboro-theme.css"]', 'head').remove();
}
/* For preview end */
"use strict"

$(window).on("load", function() {
    // Animation using ScrollReveal
    // Selecting objects to be animated
    var animatedList1 = '.extra-lg-text, .extra-lg-text span, .lg-text, .lg-text span, .boxy .title, .post-box .title, .post-header .title, .boxy .slg-text';

    var animatedList2 = '.boxy .text li, .boxy .bottom-text .link, .boxy .bottom-text .text';

    var animatedList3 = '.normal-text p, .normal-lg-text p, .clients-logos .logo-holder, .text-box .title, .text-box p, .team-photos, .post-box, .post-header, .post-content';

    var animatedList4 = '.clients-logos .logo-holder, .cr-btn, .footer .contact-info-holder, .few-contact .contact-info-holder, .job-box .title, .job-box .subtitle, .people-box .title, .people-box .subtitle, .post-box .text, .post-header .text, .post-content h1, .post-content p, .social-row .social-link-holder, .project-info h2, .project-imgs .img-holder';

    // Every list will have different animation
    ScrollReveal().reveal(animatedList1,{ duration: 800, distance: '50px', interval: 100});
    ScrollReveal().reveal(animatedList2,{ duration: 800, scale: 0.8, distance: '50px', interval: 50 });
    ScrollReveal().reveal(animatedList3,{ duration: 1000, interval: 100 });
    ScrollReveal().reveal(animatedList4,{ duration: 800, interval: 50 });
    
    // Selecting object to apply classes while scrolling
    var socialMedia = $('.social-media', '.cnav');
    var mouseScroll = $('.mouse-scroll', '.header');
    var header = $('.header');
    var cnav = $('.cnav');

    // After the page loaded check if the window scroll is over 180px and add 'hide' class
    if(window.scrollY>180){
        socialMedia.addClass('hide');
    }else{
        socialMedia.removeClass('hide');
    }

    // After the page loaded check if the window scroll is over 50px and add 'hide' class
    if(window.scrollY>50){
        mouseScroll.addClass('hide');
    }

    // After the page loaded check if the window scroll is over the 'header' height and add 'blend' class
    if(window.scrollY>(header.outerHeight()-cnav.outerHeight())){
        cnav.addClass('blend');
    }else{
        cnav.removeClass('blend');
    }

    // Check and add classes while scrolling for the same last three object
    $(window).on("scroll", function(){
        if(window.scrollY>180){
            socialMedia.addClass('hide');
        }else{
            socialMedia.removeClass('hide');
        }
        if(window.scrollY>50){
            mouseScroll.addClass('hide');
        }
        if(window.scrollY>(header.outerHeight()-cnav.outerHeight())){
            cnav.addClass('blend');
        }else{
            cnav.removeClass('blend');
        }
    });

    // Menu Toggle and animate the link using AnimeJS
    $('.menu-toggle').on('click',function(e){
        $('body').toggleClass('menu-open');
        $('.main-menu').toggleClass('opened');
        $(this).toggleClass('open');
        if($(this).hasClass('open')){
            anime({
                targets: '.main-menu .menu-links ul li a',
                translateY: ['470px', '0'],
                rotate: ['20deg', '0deg'],
                easing: 'cubicBezier(1.000, -0.020, 0.250, 0.750)',
                duration: 300,
                delay: anime.stagger(50)
            });
        }
    });

    // Animate the team photos using AnimeJS
    var photosList = $('.team-photos-holder .photo-holder', '.team-photos');
    photosList.clone().appendTo('.team-photos .team-photos-holder');

    var itemNum = $('.team-photos-holder .photo-holder').length;
    var teamPhotosWidth = $('.team-photos-holder .photo-holder').outerWidth(true) * itemNum;

    anime({
        targets: '.team-photos-holder',
        translateX: ['0', '-'+(teamPhotosWidth/2)-18+'px'],
        duration: 50000,
        easing: 'linear',
        loop: true
    });
});
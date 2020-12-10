// loader
window.FakeLoader.init({
  auto_hide: true
});
// sticky js
$(document).ready(function(){
    $(".navbar").sticky({topSpacing:0});
  });
// Scroll
$(window).on("scroll", function() {
    $(window).scrollTop() >= 50 ? $(".sticky").addClass("stickyadd") : $(".sticky").removeClass("stickyadd")
});
// scroll spy
const navbar = document.querySelector('#navbar-collapse');
      const scrollspy = new VanillaScrollspy(navbar);
      scrollspy.init();

// isotop
$('.isotope').isotope({
    itemSelector: '.isoptpe_item',
    layoutMode: 'fitRows'
}); 

$('.work_button_item').click(function(){
    $('.work_button_item').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.isotope').isotope({
        filter: selector
    })
});
// owel carosel
$('#owl-demo').owlCarousel({
    items:1,
    loop:true,
    autoplay: true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    smoth: 1000
});
// magnify popup
$('.img_popup').magnificPopup({
    type: 'image',
    disableOn: 400,
    key: 'some-key',
    gallery: {
      enabled: true
    },
    image: {
      titleSrc: 'title'
    }
  });

// switcher
$(".settings").click(function(){
  $(".colro_wrap").toggleClass("iconslider_show");
});

// scroll top
// ===== Scroll to Top ==== 
$(function(){		
  $('.bck').backToTop();		
});
$('.bck').click(function() {    
  $('body,html').animate({
      scrollTop : 0                
  }, 500);
});

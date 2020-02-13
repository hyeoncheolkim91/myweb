(function($) {


  // Init Wow
  wow = new WOW({
    animateClass: 'animated',
    offset: 100
  });
  wow.init();

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  // Navigation scrolls
  $('.navbar-nav li a').bind('click', function(event) {
    $('.navbar-nav li').removeClass('active');
    $(this).closest('li').addClass('active');
    var $anchor = $(this);
    var nav = $($anchor.attr('href'));
    if (nav.length) {
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');

      event.preventDefault();
    }
  });

  // About section scroll
  $(".overlay-detail a").on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function() {
      window.location.hash = hash;
    });
  });

  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar-default").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

  // Testimonials Slider
  // $('.bxslider').bxSlider({
  //   adaptiveHeight: true,
  //   mode: 'fade'
  // });
  imgHover();
  lightboxPhoto();
barScroll();
  //
  // function winHeight(){
  //  //==================================== height header============================
  // var wHeight = $(window).height();
  // $('.header').height(wHeight);
  // }
  //
  })(jQuery);

  $(window).load(function() {
    $('#flex-head').flexslider({
      animation: "slide",
      slideshow: true
    });
    navScroll();
    $('#filterOptions a').click(function(e) {
      e.preventDefault();

      // set active class
      $('#filterOptions a').removeClass('cur');
      $(this).addClass('cur');

      // get group name from clicked item
      var groupName = $(this).attr('data-group');

      // reshuffle grid
      $grid.shuffle('shuffle', groupName);
    });
    /* initialize shuffle plugin */
    var $grid = $('#grid'),
      $sizer = $grid.find('.shuffle__sizer');

    $grid.shuffle({
      itemSelector: '.box', // the selector for the items in the grid
      sizer: $sizer
    });
  });

  $(window).resize(function() {
    navScroll();
    winHeight();

  });
  $(window).scroll(function() {
    navScroll();
  });
  function navScroll() {

    var top = $(window).scrollTop();

    if (top > 3) {
      $('.main-nav').fadeIn();

    } else {

      $('.main-nav').fadeOut();
    }

  }

  //================================ function ========================================

  function imgHover() {
    $('.thumb-img').hover(function() {
      $(this).find('.link-search, .link-chain').fadeIn();
      $('.link-search').removeClass('fadeOutLeft').addClass('fadeInLeft');
      $('.link-chain').removeClass('fadeOutRight').addClass('fadeInRight');
      $(this).children('.folio-caption').animate({
        bottom: '0px'
      });

    }, function() {
      $(this).find('.link-search, .link-chain').fadeOut();
      $('.link-search').removeClass('fadeInLeft').addClass('fadeOutLeft');
      $('.link-chain').removeClass('fadeInRight').addClass('fadeOutRight');
      $(this).children('.folio-caption').animate({
        bottom: '-58px'
      });

    });
  }

  function lightboxPhoto() {
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
      event.preventDefault();
      $(this).ekkoLightbox();
    });
  }

      function barScroll(){
       setTimeout(function(){

      $('.progress-bar').each(function() {
          var me = $(this);
          var pe =  $(this).children('.percent-value');
          var perc = me.attr("aria-valuenow");

          var current_perc = 0;

          var progress = setInterval(function() {
              if (current_perc>=perc) {
                  clearInterval(progress);
              } else {
                  current_perc +=1;
                  me.css('width', current_perc+'%');
              }

              pe.text((current_perc)+'%');

          },90);
      });
  }, 300);
}

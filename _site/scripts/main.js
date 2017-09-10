jQuery(document).ready(function ($) {

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function scrollSpy() {

    $('body').scrollspy({
      offset: 335.6 + 16,
      target: '#navbarNav'
    })
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function smoothReveal() {

    $('body').removeClass('hide').addClass('fadeIn');
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function smoothScroll() {

    $('a.nav-link[href*="#"]').not('a.nav-link[href="#"]').not('a.nav-link[href="#0"]').click(function(event) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - $('.navbar').outerHeight()
          }, 1000, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr('tabindex','-1');
              $target.focus();
            };
          });
        }
      }
    });
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function switchLanguage() {

    $('.switch-language-ca').click(function(e) {
      e.preventDefault();
      $('.switch-language-en, .switch-language-es').removeClass('active');
      $(this).addClass('active');
      $('html').attr('xml:lang', 'ca').attr('lang', 'ca');
      $('*[lang="ca"]').not('html').removeClass('hide').addClass('show');
      $('*[lang="en"], *[lang="es"]').not('html').removeClass('show').addClass('hide');
    });

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    $('.switch-language-en').click(function(e) {
      e.preventDefault();
      $('.switch-language-ca, .switch-language-es').removeClass('active');
      $(this).addClass('active');
      $('html').attr('xml:lang', 'en').attr('lang', 'en');
      $('*[lang="en"]').not('html').removeClass('hide').addClass('show');
      $('*[lang="ca"], *[lang="es"]').not('html').removeClass('show').addClass('hide');
    });

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    $('.switch-language-es').click(function(e) {
      e.preventDefault();
      $('.switch-language-ca, .switch-language-en').removeClass('active');
      $(this).addClass('active');
      $('html').attr('xml:lang', 'es').attr('lang', 'es');
      $('*[lang="es"]').not('html').removeClass('hide').addClass('show');
      $('*[lang="ca"], *[lang="en"]').not('html').removeClass('show').addClass('hide');
    });
  };

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  scrollSpy();
  smoothReveal();
  smoothScroll();
  switchLanguage();

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

});

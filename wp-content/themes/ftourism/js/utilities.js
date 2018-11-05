jQuery( document ).ready(function() {

	// add submenu icons class in main menu (only for large resolution)
	if (ftourism_IsLargeResolution()) {
	
		jQuery('#navmain > div > ul > li:has("ul")').addClass('level-one-sub-menu');
		jQuery('#navmain > div > ul li ul li:has("ul")').addClass('level-two-sub-menu');										
	}

	if (ftourism_options && ftourism_options.loading_effect) {
	   ftourism_init_loading_effects();
  	}

	jQuery('#navmain > div').on('click', function(e) {

		e.stopPropagation();

		// toggle main menu
		if (ftourism_IsSmallResolution() || ftourism_IsMediumResolution()) {

			var parentOffset = jQuery(this).parent().offset(); 
			
			var relY = e.pageY - parentOffset.top;
		
			if (relY < 36) {
			
				jQuery('ul:first-child', this).toggle(400);
			}
		}
	});
	
	jQuery('#camera_wrap').camera({
		height: ftourism_IsLargeResolution() ? '450px' : '300px',
		loader: 'bar',
		pagination: true,
		thumbnails: false,
		time: 4500
	});
});

function ftourism_IsSmallResolution() {

	return (jQuery(window).width() <= 360);
}

function ftourism_IsMediumResolution() {
	
	var browserWidth = jQuery(window).width();

	return (browserWidth > 360 && browserWidth < 800);
}

function ftourism_IsLargeResolution() {

	return (jQuery(window).width() >= 800);
}

function ftourism_init_loading_effects() {

    jQuery('#header-logo').addClass("hidden").viewportChecker({
            classToAdd: 'animated bounce',
            offset: 1
          });

    jQuery('#navmain a').addClass("hidden").viewportChecker({
            classToAdd: 'animated rubberBand',
            offset: 1
          });

    jQuery('#page-header').addClass("hidden").viewportChecker({
            classToAdd: 'animated bounceInUp',
            offset: 1
          });

    jQuery('#main-content-wrapper h2, #main-content-wrapper h3')
            .addClass("hidden").viewportChecker({
            classToAdd: 'animated bounceInUp',
            offset: 1
          });

    jQuery('img').addClass("hidden").viewportChecker({
            classToAdd: 'animated zoomIn',
            offset: 1
          });

    jQuery('#sidebar').addClass("hidden").viewportChecker({
            classToAdd: 'animated zoomIn',
            offset: 1
          });

    jQuery('.before-content, .after-content').addClass("hidden").viewportChecker({
            classToAdd: 'animated bounce',
            offset: 1
          });

    jQuery('.header-social-widget')
        .addClass("hidden").viewportChecker({
            classToAdd: 'animated bounceInLeft',
            offset: 1
          });

    jQuery('article, article p, article li')
        .addClass("hidden").viewportChecker({
            classToAdd: 'animated zoomIn',
            offset: 1
          });

    jQuery('#footer-main h1, #footer-main h2, #footer-main h3')
        .addClass("hidden").viewportChecker({
            classToAdd: 'animated bounceInUp',
            offset: 1
          });

    jQuery('#footer-main p, #footer-main ul, #footer-main li, .footer-title, .col3a, .col3b, .col3c')
        .addClass("hidden").viewportChecker({
            classToAdd: 'animated zoomIn',
            offset: 1
          });

    jQuery('.footer-social-widget')
        .addClass("hidden").viewportChecker({
            classToAdd: 'animated rubberBand',
            offset: 1
          });

    jQuery('#footer-menu')
        .addClass("hidden").viewportChecker({
            classToAdd: 'animated bounceInDown',
            offset: 1
          });
}

jQuery(document).ready(function () {

  jQuery(window).scroll(function () {
	  if (jQuery(this).scrollTop() > 100) {
		  jQuery('.scrollup').fadeIn();
	  } else {
		  jQuery('.scrollup').fadeOut();
	  }
  });

  jQuery('.scrollup').click(function () {
	  jQuery("html, body").animate({
		  scrollTop: 0
	  }, 600);
	  return false;
  });

});
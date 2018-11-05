( function( $ ) {

	'use strict';

	if ( typeof ivory_search === 'undefined' || ivory_search === null ) {
		return;
	}

	$( function() {

		var active_tab = ivory_search.activeTab;

		if ( $( '#ivory_search_options' ).length ) {

			if ( location.href.indexOf( 'active-tab=' ) > -1 ) {
				active_tab = ivory_search.getParameterByName( 'active-tab', ivory_search.getCookie( 'active-url' ) );
			} else {
				var active_tab_cookie = ivory_search.getCookie( 'active-tab' );
				active_tab = ( "" !== active_tab_cookie ) ? active_tab_cookie : ivory_search.activeTab;
			}

		}

		$( '#search-form-editor' ).tabs( {
			active: active_tab,
			activate: function( event, ui ) {
				$( '#active-tab' ).val( ui.newTab.index() );

				// If key exists updates the value
				var newUrl = location.href;
				if ( location.href.indexOf( 'active-tab=' ) > -1 ) {
				    newUrl = location.href.replace( /active-tab=\w*\d*/, "active-tab=" + ui.newTab.index() );
				// If not, append
				} else {
				     newUrl = location.href + "&active-tab=" + ui.newTab.index();
				}

				history.pushState( null, null, newUrl );

				if ( $( '#ivory_search_options' ).length ) {
					document.cookie = 'active-url=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
					document.cookie = 'active-tab=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
					document.cookie = 'active-url=' + newUrl + ';path=/';
					document.cookie = 'active-tab=' + ui.newTab.index() + ';path=/';
				}
			}
		} );

		$('.form-table .actions a.expand').click( function() {
			$('.form-table .actions a.expand').hide();
			$('.form-table .ui-accordion-content, .form-table .actions a.collapse').show();
			$('.form-table .ui-accordion-content').addClass('ui-accordion-content-active');
			$('.form-table h3').addClass('ui-state-active');
			return false;
		} );
		
		$('.form-table .actions a.collapse').click( function() {
			$('.form-table .actions a.expand').show();
			$('.form-table .ui-accordion-content, .form-table .actions a.collapse').hide();
			$('.form-table .ui-accordion-content').removeClass('ui-accordion-content-active');
			$('.form-table h3').removeClass('ui-state-active');
			return false;
		} );

		$( ".form-table" ).accordion( {
			collapsible: true,
			heightStyle: "content",
			icons: false,
		} );

		$('#search-body option').mousedown(function(e) {
			if ($(this).attr('selected')) {
				$(this).removeAttr('selected');
			} else {
				$(this).attr('selected', 'selected' );
			}
			var ind_class = $(this).parent().attr("class");
			if ( ind_class !== null ) {
				$('.form-table h3 .indicator.'+ind_class).fadeOut().fadeIn();
			}
			return false;
		} );

		$( ".col-title .list-search" ).keyup(function() {
			var search_val = $(this).val().toLowerCase();
			var search_sel = $(this).parent().parent().find('select option');
			$( search_sel ).each(function() {
				if ( $(this).text().toLowerCase().indexOf( search_val ) === -1 ) {
					$(this).fadeOut( 'fast' );
				} else {
					$(this).fadeIn( 'fast' );
				}
			} );
		} );

		$( ".list-search.wide" ).keyup(function() {
			var search_val = $(this).val().toLowerCase();
			var search_sel = $(this).parent().find('select option');
			$( search_sel ).each(function() {
				if ( $(this).text().toLowerCase().indexOf( search_val ) === -1 ) {
					$(this).fadeOut( 'fast' );
				} else {
					$(this).fadeIn( 'fast' );
				}
			} );
		} );

		if ( '' === $( '#title' ).val() ) {
			$( '#title' ).focus();
		}

		ivory_search.titleHint();

		$('#search-form-editor .ind-status').each(function(){
			var ind_class = $(this).attr('class').split(' ')[1];
			if ( ind_class !== null ) {
				$('.form-table h3 .indicator.'+ind_class).fadeIn();
			}
		} );

		$('#search-form-editor').on('keyup change paste', 'input, select, textarea', function( e ){
			var ind_class = $(e.target).attr("class");
			if ( ind_class !== null ) {
				$('.form-table h3 .indicator.'+ind_class).fadeOut().fadeIn();
			}
		} );

		var changed = false;

		$(document).on("submit", "form", function(event){
			changed = false;
			$(window).off('beforeunload');
		} );

		$( window ).on( 'beforeunload', function( event ) {

			$( '#search-body :input[type!="hidden"]' ).each( function() {
				if ( $( this ).is( ':checkbox, :radio' ) ) {
					if ( this.defaultChecked != $( this ).is( ':checked' ) ) {
						changed = true;
					}
				} else if ( $( this ).is( 'select' ) ) {
					$( this ).find( 'option' ).each( function() {
						if ( this.defaultSelected != $( this ).is( ':selected' ) ) {
							changed = true;
						}
					} );
				} else {
					if ( this.defaultValue != $( this ).val() ) {
						changed = true;
					}
				}
			} );

			if ( changed ) {
				event.returnValue = ivory_search.saveAlert;
				return ivory_search.saveAlert;
			}
		} );

		$( '#is-admin-form-element' ).submit( function() {
			if ( 'copy' != this.action.value ) {
				$( window ).off( 'beforeunload' );
			}

			if ( 'save' == this.action.value ) {
				$( '#publishing-action .spinner' ).addClass( 'is-active' );
			}
		} );
	} );

	ivory_search.getCookie = function(cname) {
	    var name = cname + "=";
	    var decodedCookie = decodeURIComponent(document.cookie);
	    var ca = decodedCookie.split(';');
	    for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
		    c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
		    return c.substring(name.length, c.length);
		}
	    }
	    return "";
	}

	ivory_search.getParameterByName = function( name, url ) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	ivory_search.titleHint = function() {
		var $title = $( '#title' );
		var $titleprompt = $( '#title-prompt-text' );

		if ( '' === $title.val() ) {
			$titleprompt.removeClass( 'screen-reader-text' );
		}

		$titleprompt.click( function() {
			$( this ).addClass( 'screen-reader-text' );
			$title.focus();
		} );

		$title.blur( function() {
			if ( '' === $(this).val() ) {
				$titleprompt.removeClass( 'screen-reader-text' );
			}
		} ).focus( function() {
			$titleprompt.addClass( 'screen-reader-text' );
		} ).keydown( function( e ) {
			$titleprompt.addClass( 'screen-reader-text' );
			$( this ).unbind( e );
		} );
	};

} )( jQuery );

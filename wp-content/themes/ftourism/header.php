<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo('charset'); ?>" />
		<?php
            if ( is_singular() && pings_open() ) :
                printf( '<link rel="pingback" href="%s">' . "\n", get_bloginfo( 'pingback_url' ) );
            endif;
        ?>
		<meta name="viewport" content="width=device-width" />
		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>
		<div id="body-content-wrapper">
			
			<header id="header-main">
				<div id="header-top">
					<div id="header-top-content-wrapper">
						<?php ftourism_display_social_sites(); ?>
					</div>
				</div>
				<div id="header-content-wrapper">
					<div id="header-logo">
						<?php ftourism_show_website_logo_image_and_title(); ?>
					</div>
					<nav id="navmain">
						<?php wp_nav_menu( array( 'theme_location' => 'primary',
												  'fallback_cb'    => 'wp_page_menu',
												  
												  ) ); ?>
					</nav>
					
					<div class="clear">
					</div>
				</div>
			</header>

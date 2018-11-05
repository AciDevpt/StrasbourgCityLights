<?php
/**
 * Site Front Page
 *
 * This is a traditional static HTML site model with a fixed front page and
 * content placed in Pages, rarely if ever using posts, categories, or tags. 
 *
 * @subpackage fTourism
 * @author tishonator
 * @since fTourism 1.0.0
 * @link https://codex.wordpress.org/Creating_a_Static_Front_Page
 *
 */

/**
 * If front page is set to display the blog posts index, include home.php;
 * otherwise, display static front page content
 */
if ( 'posts' == get_option( 'show_on_front' ) ) :

    get_template_part( 'home' );

else :

	get_header();
?>

<?php if (get_theme_mod('ftourism_slider_display', 0) == 1 ) : ?>
			
			<div id="slider-content-wrapper">
						
				<?php ftourism_display_slider(); ?>
						
			</div>
			
<?php endif; ?>

	<div class="clear">
	</div><!-- .clear -->

	<div id="main-content-wrapper">
		<div id="main-content-home">
			<?php get_sidebar( 'home' ); ?>
		</div><!-- #main-content -->
	</div><!-- #main-content-wrapper -->

<?php

	get_footer();

endif; ?>

<?php
/**
 * The sidebar containing the main home columns widget areas
 *
 * @subpackage fTourism
 * @author tishonator
 * @since fTourism 1.0.0
 *
 */
?>

<div id="home-cols">

	<div id="home-cols-inner">

		<?php 
			/**
			 * Display widgets dragged in 'Homepage Columns 1' widget areas
			 */
		?>
		<div class="col2a">
			<?php dynamic_sidebar( 'homepage-column-1-widget-area' ); ?>
		</div><!-- .col2a -->
		
		<?php 
			/**
			 * Display widgets dragged in 'Homepage Columns 2' widget areas
			 */
		?>
		<div class="col2b">
			<?php dynamic_sidebar( 'homepage-column-2-widget-area' ); ?>
		</div><!-- .col2b -->
		
		<div class="clear">
		</div><!-- .clear -->

	</div><!-- #home-cols-inner -->

</div><!-- #home-cols -->
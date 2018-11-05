			<a href="#" class="scrollup"></a>
			<footer id="footer-main">
				<div id="footer-content-wrapper">
					<?php get_sidebar( 'footer' ); ?>
					<nav id="footer-menu">
						<?php wp_nav_menu( array( 'theme_location' => 'footer', ) ); ?>
					</nav>
					<div class="clear">
					</div><!-- .clear -->
					<div id="copyright">
						<p>
						 <?php ftourism_show_copyright_text(); ?> <a href="<?php echo esc_url( 'https://tishonator.com/product/ftourism' ); ?>" title="<?php esc_attr_e( 'ftourism Theme', 'ftourism' ); ?>">
							<?php esc_html_e('fTourism Theme', 'ftourism'); ?></a> <?php esc_attr_e( 'powered by', 'ftourism' ); ?> <a href="<?php echo esc_url( 'http://wordpress.org/' ); ?>" title="<?php esc_attr_e( 'WordPress', 'ftourism' ); ?>">
							<?php esc_html_e('WordPress', 'ftourism'); ?></a>
						</p>
					</div>
				</div>
			</footer>
		</div>
		<?php wp_footer(); ?>
	</body>
</html>
<?php
/**
 * Fires during plugin deactivation.
 *
 * This class defines all code necessary to run during the plugin's deactivation.
 *
 * @since      1.0.0
 * @package    IS
 * @subpackage IS/includes
 * @author     Ivory Search <admin@ivorysearch.com>
 */

class IS_Deactivator {

	/**
	 * The code that runs during plugin deactivation.
	 *
	 * @since    1.0.0
	 */
	public static function deactivate() {

		$old_opt = (array)get_option( 'add_search_to_menu' );
		$new_opt = (array)get_option( 'ivory_search' );
		$opt = array_merge( $old_opt, $new_opt );

		if ( isset( $opt['dismiss_admin_notices'] ) ) {
			unset( $opt['dismiss_admin_notices'] );
			update_option( 'ivory_search', $opt );
		}
	}
}

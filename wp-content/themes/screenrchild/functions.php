<?php
/**
** activation theme
**/

add_action( 'wp_enqueue_scripts', 'screenrchild_enqueue_styles' );
function screenrchild_enqueue_styles() {
 	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
 	wp_enqueue_style( 'child-style', get_stylesheet_uri(), array( 'parent-style' ) );
}

add_filter( 'get_the_archive_title', function ( $title ) {
    if (is_post_type_archive()) {
        $title = post_type_archive_title( '', false );
    }
    return $title;
});




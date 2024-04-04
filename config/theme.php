<?php

return [
    'path' => wp_normalize_path(get_stylesheet_directory()),
    'uri' => get_stylesheet_directory_uri(),
    'namespace' => 'Origins',
       /**
     * Theme Menus
     * Menus that are registered by the theme
     */
    'register_nav_menus' => [
        'header' => 'Primary Menu',
        'footer' => 'Footer Menu',
    ],
    /**
     * Theme Supports
     * Theme supports that are enabled
     */
    'add_theme_support' => [
        'menus',
        'post-thumbnails',
        'title-tag',
        'editor-styles',
        'wp-block-styles',
        'responsive-embeds',
        'customize-selective-refresh-widgets',
        'automatic-feed-links',
        'html5' => [
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
            'script',
            'style',
        ],
        'post-formats' => [
            'aside',
            'gallery',
            'link',
            'image',
            'quote',
            'status',
            'video',
            'audio',
            'chat',
        ],
    ],
    /**
     * Removed Supports
     * Theme supports that are removed
     */
    'remove_theme_support' => [
        'block-templates',
        // Remove Full Site Editing
    ],
];
<?php

use Og\Config;

return [
    'categories' => [
        [
            'slug' => 'og-containers',
            'title' => 'Containers',
            'icon' => 'dashicons-editor-table'
        ],
        [
            'slug' => 'og-sections',
            'title' => 'Sections',
            'icon' => 'dashicons-layout'
        ],
        [
            'slug' => 'og-components',
            'title' => 'Components',
            'icon' => 'dashicons-welcome-widgets-menus'
        ],
        [
            'slug'  => 'my-block-category',
            'title' => esc_html__( 'My Block Category', 'text-domain' ),
            'icon'  => 'trash'
        ],
    ],
];
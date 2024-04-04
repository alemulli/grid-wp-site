<?php

namespace Origins\Providers\Services;

class Search {
     public static function get_context($posts_per_page = 5)
    {
        $search_query = trim(sanitize_text_field($_GET['s']));

        $page = $_GET['page'] ?? 1;
        $page = intval(sanitize_text_field($page));

        $search_results = [];

        if ($search_query) {
            $search_results = \Timber\Timber::get_posts([
                's' => $search_query,
                'posts_per_page' => 5,
                'paged' => $page,
            ]);
        }

        return [
            'search_results' => $search_results,
            'search_query' => $search_query,
            'current_page' => $page,
        ];
    }
}
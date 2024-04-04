<?php

namespace Origins\Hooks;

use Og\Config;
use Og\Hooks\Traits\Actions;
use Og\Hooks\Interfaces\ActionInterface;

class GenerateGlobalStyles implements ActionInterface {
    use Actions;

    public function should_load() : bool {
        return true;
    }

    public function load() {
        $this->add_action('after_setup_theme', [$this, 'write_css_file']);
    }

    public function write_css_file() {
        $css_file = wp_normalize_path(Config::get('theme.path') . '/resources/assets/styles/wordpress/global-styles.css');
        
        if(!file_exists($css_file)) {
            file_put_contents($css_file, '');
        }

        $stored_styles = get_transient('og_global_styles');
        $theme_data = \WP_Theme_JSON_Resolver::get_theme_data();
        $global_styles = $theme_data->get_stylesheet();
        $cur_styles = md5($global_styles);

        if ($stored_styles === $cur_styles) {
            return;
        }

        file_put_contents($css_file, $global_styles);
        set_transient('og_global_styles', $cur_styles);
    }
}
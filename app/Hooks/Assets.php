<?php
namespace Origins\Hooks;

use Og\Vite;
use Og\Config;
use Og\Hooks\Traits\Actions;
use Og\Hooks\Interfaces\ActionInterface;
use Og\Hooks\Interfaces\FilterInterface;

class Assets implements ActionInterface
{
    use Actions;

    public function should_load(): bool
    {
        return Config::get('env.PROD');
    }

    public function load(): void
    {
        if (is_admin()) {
            $this->add_action('enqueue_block_assets', [$this, 'editor_assets']);
        } else {
            $this->add_action('enqueue_block_assets', [$this, 'frontend_assets']);
        }
        $this->add_action('enqueue_block_assets', [$this, 'front_and_editor_assets']);
    }

    public function front_and_editor_assets()
    {
            return;
    }    
    public function frontend_assets()
    {
        Vite::enqueue_asset('resources/assets/styles/app.css');
        Vite::enqueue_asset('resources/assets/scripts/app.js');
    }

    public function editor_assets()
    {
        wp_enqueue_script('htmx-head', 'https://unpkg.com/htmx.org@1.9.11');
        Vite::enqueue_asset('resources/assets/styles/editor.css');
        Vite::enqueue_asset('resources/assets/scripts/editor.js');
    }
}
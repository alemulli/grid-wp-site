<?php

namespace Origins\Hooks;

use Og\Hooks\Interfaces\ActionInterface;
use Og\Hooks\Traits\Actions;

class ExampleAction implements ActionInterface {
    use Actions;
    public function should_load() : bool {
        return true;
    }
    public function load() {
        // $this->add_action('init', [$this, 'init']);
    }

    public function init() {
        // echo 'Hello, World!';
    }
}
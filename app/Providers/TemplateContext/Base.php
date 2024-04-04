<?php
namespace Origins\Providers\TemplateContext;

use Og\ContextProvider;

/**
 * Base Context Provider
 * Adds global context variables
 */
class Base extends ContextProvider
{
    public function load()
    {
        global $post;
        return [
            'options' => function_exists('get_fields') ? get_fields('option') : [],
        ];
    }
}

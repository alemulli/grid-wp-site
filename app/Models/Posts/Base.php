<?php

namespace Origins\Models\Posts;

use Timber\Post;

/**
 * Base class for all post types created with Origins.
 * Extends Timber\Post and adds functionality.
 * These do not apply to post types that are created by 3rd party plugins.
 *
 * @package Origins\Post
 *
 * Reference: https://timber.github.io/docs/v2/guides/posts/#extending-timber
 *
 */
abstract class Base extends Post
{
    // Example:
    // private $test = 'test';
    // public function test() {
    //     return $this->test;
    // }
}

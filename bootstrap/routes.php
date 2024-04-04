<?php

use Og\Routes;

$prefix = 'wp-htmx';

Routes::map("{$prefix}/search", fn($params) => Routes::load('search.php', $params));


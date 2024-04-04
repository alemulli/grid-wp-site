<?php

use Timber\Timber;
use Origins\Providers\Services\Search;

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $context = Search::get_context();
    Timber::render('search-results.twig', $context);
}


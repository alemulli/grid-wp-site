<?php

use Og\Config;

if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
}

if (file_exists(__DIR__ . '/bootstrap/app.php')) {
    require_once __DIR__ . '/bootstrap/app.php';
} else {
    echo 'Origins not found';
}
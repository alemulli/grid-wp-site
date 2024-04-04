<?php

use Whoops\Run;
use Og\Config;
use DI\ContainerBuilder;
use Og\Hooks\HookManager;



/* ------------------------- Load Configuration Files ------------------------ */
Config::load(wp_normalize_path(get_stylesheet_directory()) . '/config');



/* ------------------------- Initialize DI Container ------------------------ */
$container_builder = new ContainerBuilder();
$container_builder->addDefinitions(Config::get('theme.path') . '/bootstrap/providers.php');

if (defined('WP_ENVIRONMENT_TYPE') && WP_ENVIRONMENT_TYPE === 'production') {
    $container_builder->enableCompilation(Config::get('theme.path') . '/storage/cache');
}

$container = $container_builder->build();



/* ------------------- Add Whoops Error/Exception Handler ------------------- */
$container->call(function (Run $whoops) {
    $whoops->register();
});



/* --------------------------- Load Custom Routes --------------------------- */

if( file_exists(Config::get('theme.path') . '/bootstrap/routes.php') ) {
    require_once Config::get('theme.path') . '/bootstrap/routes.php';
}



/* ----------------------------- Register Hooks ----------------------------- */
$container->call(function (HookManager $hookManager) {
    $hookManager->registerHooks();
});


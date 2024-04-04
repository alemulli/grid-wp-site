<?php


use Whoops\Run;
use Og\Hooks\HookManager;
use Symfony\Component\Finder\Finder;
use Whoops\Handler\PrettyPageHandler;

return [
    Run::class => function () {
        $whoops = new Run();
        $whoops->pushHandler(new PrettyPageHandler);
        return $whoops;
    },
    HookManager::class => function ($container, Finder $finder) {
        return new HookManager($container, $finder);
    },
];
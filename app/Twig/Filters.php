<?php

namespace Origins\Twig;

use Og\Twig\TwigExtension;

class Filters extends TwigExtension
{
    public function load()
    {
        // $this->add('filter_name', [$this, 'filter']);
        $this->add('ceil', [$this, 'ceil']);
        $this->add('floor', [$this, 'floor']);
    }

    public function ceil(int|float $number)
    {
        return ceil($number);
    }
    public function floor(int|float $number)
    {
        return floor($number);
    }
}

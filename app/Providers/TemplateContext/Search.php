<?php
namespace Origins\Providers\TemplateContext;

use Og\ContextProvider;
use Origins\Providers\Services\Search as SearchService;

class Search extends ContextProvider
{
    public function load()
    {
        return SearchService::get_context();
    }
}

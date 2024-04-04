<?php
namespace Origins\Providers\TemplateContext;

use Timber\Timber;

class PageNotFound extends Base
{
    public function load()
    {
        if (!function_exists('get_field')) {
            return [];
        }
        $page_404_id = get_field('404_page', 'option');
        return [
            'post' => $this->get_404($page_404_id),
            // 'header_settings' => $this->getHeaderSettings($page_404_id),
        ];
    }
    private function get_404($page_id)
    {
        if (!is_404()) {
            return false;
        }

        return Timber::get_post($page_id);
    }
}

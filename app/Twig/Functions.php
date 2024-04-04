<?php

namespace Origins\Twig;

use Og\Twig\TwigExtension;

class Functions extends TwigExtension
{
    public function load()
    {
        // $this->add('func_name', [$this, 'func']);
        $this->add('ajax', [$this, 'ajax']);
        $this->add('boost_links_if_not_admin', [$this, 'boost_links_if_not_admin']);
    }

    public function ajax($action, $data = [])
    {
        $prefixed_action = 'og_ajax_' . $action;
        $nonce_name = $prefixed_action . '_nonce';
        $nonce = wp_create_nonce($nonce_name);
        $url = admin_url(
            'admin-ajax.php?action=' . $prefixed_action . '&nonce=' . $nonce,
        );
        if (count($data) > 0) {
            $url = $url . '&' . http_build_query($data);
        }

        return $url;
    }

    public function boost_links_if_not_admin()
    {
        // check to see if user is logged in
        if (!is_user_logged_in()) {
            echo 'hx-boost="true" hx-indicator="body" hx-swap="outerHTML transition:true"';
        }
    }
}

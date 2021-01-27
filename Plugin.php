<?php namespace Mmes\Banners;

use Backend;
use Mmes\Banners\Components\ShowBanner;
use System\Classes\PluginBase;

/**
 * Banners Plugin Information File
 */
class Plugin extends PluginBase
{
    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'name'        => 'Banners',
            'description' => 'Popup banners for most use cases',
            'author'      => 'Mmes',
            'icon'        => 'icon-object-group'
        ];
    }

    /**
     * Register method, called when the plugin is first registered.
     *
     * @return void
     */
    public function register()
    {

    }

    /**
     * Boot method, called right before the request route.
     *
     * @return array
     */
    public function boot()
    {

    }

    /**
     * Registers any front-end components implemented in this plugin.
     *
     * @return array
     */
    public function registerComponents()
    {
        return [
            ShowBanner::class => 'showBanner'
        ];
    }

    /**
     * Registers any back-end permissions used by this plugin.
     *
     * @return array
     */
    public function registerPermissions()
    {
        return [
            'mmes.banners.view_banners' => [
                'tab' => 'Banners',
                'label' => 'Consente di vedere il menu Banner'
            ],
        ];
    }

    /**
     * Registers back-end navigation items for this plugin.
     *
     * @return array
     */
    public function registerNavigation()
    {

        return [
            'banners' => [
                'label'       => 'mmes.banners::lang.menu.name',
                'url'         => Backend::url('mmes/banners/banners'),
                'icon'        => 'icon-object-group',
                'permissions' => ['mmes.banners.*'],
                'order'       => 500,
            ],
        ];
    }
}

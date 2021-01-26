<?php namespace Mmes\Banners;

use Backend;
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
            'description' => 'No description provided yet...',
            'author'      => 'Mmes',
            'icon'        => 'icon-leaf'
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
        return []; // Remove this line to activate

        return [
            'Mmes\Banners\Components\MyComponent' => 'myComponent',
        ];
    }

    /**
     * Registers any back-end permissions used by this plugin.
     *
     * @return array
     */
    public function registerPermissions()
    {
        return []; // Remove this line to activate

        return [
            'mmes.banners.some_permission' => [
                'tab' => 'Banners',
                'label' => 'Some permission'
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
        return []; // Remove this line to activate

        return [
            'banners' => [
                'label'       => 'Banners',
                'url'         => Backend::url('mmes/banners/mycontroller'),
                'icon'        => 'icon-leaf',
                'permissions' => ['mmes.banners.*'],
                'order'       => 500,
            ],
        ];
    }
}

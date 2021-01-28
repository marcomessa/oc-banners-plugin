<?php namespace Mmes\Banners\Components;

use Cms\Classes\ComponentBase;
use Mmes\Banners\Models\Banner;
use October\Rain\Support\Facades\Flash;

class ShowBanner extends ComponentBase
{
    /** @var string[] Trigger options */
    const triggers = [
        'mmes.banners::lang.triggers.on_load',
        'mmes.banners::lang.triggers.on_mouse_exit',
    ];

    public function componentDetails()
    {
        return [
            'name' => 'mmes.banners::lang.show_banner.name',
            'description' => 'mmes.banners::lang.show_banner.description'
        ];
    }

    public function defineProperties()
    {
        return [
            'banner' => [
                'title' => 'mmes.banners::lang.show_banner.title',
                'description' => 'mmes.banners::lang.show_banner.description',
                'type' => 'dropdown',
                'required' => true
            ],
            'trigger' => [
                'title' => 'mmes.banners::lang.show_banner.trigger',
                'description' => 'mmes.banners::lang.show_banner.trigger_description',
                'type' => 'dropdown',
                'required' => true
            ],
            'useCookie' => [
                'title' => 'mmes.banners::lang.form.use_cookie',
                'type' => 'checkbox',
                'group' => 'mmes.banners::lang.tabs.settings'
            ],
            'cookieName' => [
                'title' => 'mmes.banners::lang.form.cookie_name',
                'default' => 'mmes_c',
                'group' => 'mmes.banners::lang.tabs.settings'
            ],
            'cookieDuration' => [
                'title' => 'mmes.banners::lang.form.cookie_duration',
                'default' => '360',
                'group' => 'mmes.banners::lang.tabs.settings'
            ],
        ];
    }

    public function onRun()
    {
        $this->addJs('components/showbanner/assets/build/showmodal.js');
        $this->addCss('components/showbanner/assets/build/showmodal.css');

    }

    public function getBannerOptions()
    {
        return Banner::all()->pluck('name', 'id')->toArray();
    }

    public function getTriggerOptions()
    {
        return self::triggers;
    }

    public function banner()
    {
        try {
            return Banner::findOrFail($this->property('banner'));
        } catch (\Exception $e) {
            return Flash::error('No Banner');
        }
    }
}

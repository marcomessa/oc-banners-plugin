<?php namespace Mmes\Banners\Components;

use Cms\Classes\ComponentBase;
use Mmes\Banners\Models\Banner;

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
        return Banner::findOrFail($this->property('banner'));
    }
}

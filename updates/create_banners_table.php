<?php namespace Mmes\Banners\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateBannersTable extends Migration
{
    public function up()
    {
        Schema::create('mmes_banners_banners', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name')->unique();
            $table->text('content');
            $table->text('style')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('mmes_banners_banners');
    }
}

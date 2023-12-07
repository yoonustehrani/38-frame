<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('menu_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('menu_id');
            $table->foreignId('parent_id')->nullable();
            $table->integer('order')->unsigned();
            $table->string('title');
            $table->string('label')->nullable();
            $table->enum('url_type', [
                'route',
                'full-url'
            ])->nullable();
            $table->string('url_value')->nullable();
            $table->string('icon_url')->nullable();
            $table->boolean('active')->default(1);
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menu_items');
    }
};

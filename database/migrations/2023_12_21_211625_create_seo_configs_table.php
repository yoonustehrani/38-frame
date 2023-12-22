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
        Schema::create('seo_configs', function (Blueprint $table) {
            $table->id();
            $table->morphs('optimizable');
            $table->string('html_title')->nullable();
            $table->string('meta_description')->nullable();
            $table->string('meta_robots')->nullable();
            $table->json('meta')->default(json_encode(null));
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('seo_configs');
    }
};

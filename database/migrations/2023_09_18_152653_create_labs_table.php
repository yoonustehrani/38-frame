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
        Schema::create('labs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('owner_id')->references('id')->on('users')->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('brand');
            $table->string('slug')->unique();
            $table->string('category');
            $table->boolean('active');
            // $table->enum('category');
            $table->text('bio');
            $table->integer('founded_in_year')->unsigned();
            $table->text('address')->nullable();
            $table->string('address_line')->nullable();
            $table->string('owner_fullname');
            $table->string('owner_national_id');
            $table->string('website')->nullable();
            $table->string('phone_number');
            $table->foreignId('city_id')->references('id')->on('cities')->cascadeOnDelete()->cascadeOnUpdate();
            $table->json('meta');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('labs');
    }
};

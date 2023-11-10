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
        Schema::create('lab_services', function (Blueprint $table) {
            $table->id();
            $table->foreignId('lab_id');
            $table->foreignId('service_id');
            $table->text('description');
            $table->bigInteger('price')->nullable();
            $table->string('price_note')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lab_services');
    }
};

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
        Schema::create('lab_service', function (Blueprint $table) {
            $table->foreignId('lab_id')->references('id')->on('labs')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('service_id')->references('id')->on('lab_services')->cascadeOnDelete()->cascadeOnUpdate();
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
        Schema::dropIfExists('lab_service');
    }
};

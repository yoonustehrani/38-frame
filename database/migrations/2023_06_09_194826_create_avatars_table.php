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
        Schema::create('avatars', function (Blueprint $table) {
            $table->morphs('relatable');
            $table->string('alt')->nullable();
            $table->string('title')->nullable();
            $table->foreignId('file_id')->nullable()->references('id')->on('uploaded_files')->nullOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('avatars');
    }
};

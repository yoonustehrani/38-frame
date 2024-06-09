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
        Schema::create('uploaded_files', function (Blueprint $table) {
            $table->id()->index();
            $table->string('type');
            $table->string('name');
            $table->string('extension');
            $table->string('path');
            $table->string('thumbnail_path')->nullable();
            $table->string('driver')->default('local');
            $table->enum('mode', [
                'user-uplaoded',
                'admin-uploaded'
            ])->index();
            $table->bigInteger('uploaded_by')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('uploaded_files');
    }
};

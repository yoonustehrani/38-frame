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
        Schema::create('attachables', function (Blueprint $table) {
            $table->foreignId('uploaded_file_id');
            $table->nullableMorphs('attachable');
            $table->string('title')->nullable();
            $table->string('alt')->nullable();
            $table->json('meta')->default(json_encode(null));
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('attachables');
    }
};

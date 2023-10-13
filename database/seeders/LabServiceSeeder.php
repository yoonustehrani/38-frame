<?php

namespace Database\Seeders;

use App\Models\LabService;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LabServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        LabService::factory()->count(14)->create();
    }
}

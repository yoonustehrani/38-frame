<?php

namespace Database\Seeders;

use App\Models\Avatar;
use App\Models\BlogPost;
use App\Models\UploadedFile;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BlogPostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        BlogPost::factory(10)
        ->has(
            Avatar::factory()->for(
                UploadedFile::factory(),
                'file'
            ),
            'avatar'
        )->for(
            User::factory(),
            'author'
        )->create();
    }
}

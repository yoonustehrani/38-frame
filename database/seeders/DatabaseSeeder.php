<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(ProvinceSeeder::class);
        $this->call(CitySeeder::class);
        $this->call(SiteCategorySeeder::class);
        $this->call(MenuSeeder::class);
        $this->call(RoleSeeder::class);

        $user = User::factory()->make();
        $user->email = '38frame@gmail.com';
        $user->password = bcrypt('hello1234');
        $user->role_id = Role::whereName('admin')->firstOrFail()?->id;
        $user->save();
    }
}

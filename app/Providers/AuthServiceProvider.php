<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        'App\Models\Shop' => 'App\Policies\ShopPolicy',
        'App\Models\Lab' => 'App\Policies\LabPolicy',
        'App\Models\BlogPost' => 'App\Policies\BlogPostPolicy',
        'App\Models\UploadedFile' => 'App\Policies\UploadedFilePolicy',
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        //
    }
}

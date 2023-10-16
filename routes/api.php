<?php

use App\Http\Controllers\LabController;
use App\Http\Controllers\ShopController;
use App\Http\Resources\CityResource;
use App\Models\City;
use App\Models\SiteCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function() {
    Route::apiResource('ads', 'App\Http\Controllers\AdController');
    Route::get('site-categories', function(Request $request) {
        return SiteCategory::whereType(
            $request->query('type') ?: null
        )->get();
    })->name('site-categories.index');
    
    Route::prefix('user')->name('user.')->group(function() {
        Route::get('/', function (Request $request) {
            return $request->user();
        });
        Route::get('/shop', function(Request $request) {
            return $request->user()->shop()->firstOrFail();
        });
        Route::patch('settings/social', function(Request $request) {
            return \App\Models\User::latest()->first();
        });
    });
    Route::apiResource('shops/{shop}/merchandise', ShopController::class);
    Route::apiResource('shops', ShopController::class)->only(['destroy', 'store', 'update']);
    Route::post('auth/logout', 'App\Http\Controllers\AuthController@logout');
    // Route::post('labs/register', [ShopController::class, 'store'])->name('labs.store');
});
Route::get('labs', [LabController::class, 'index']);
Route::get('cities', function(Request $request) {
    $request->validate([
        'query' => 'required|string|min:2'
    ]);
    return CityResource::collection(
        \App\Models\City::with('province')->where('name', 'like', "{$request->query('query')}%")->orderBy('name')->limit(4)->get()
    );
});
Route::get('cities/{city}', function($city) {
    return (new CityResource(City::with('province')->findOrFail($city)));
});
Route::apiResource('lab-services', 'App\Http\Controllers\LabServiceController');
Route::post('auth/google', 'App\Http\Controllers\AuthController@handleGoogleSignIn');
Route::post('auth/login', 'App\Http\Controllers\AuthController@login');
Route::get('posts', 'App\Http\Controllers\BlogPostController@index')->name('posts.index');
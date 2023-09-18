<?php

use App\Http\Controllers\ShopController;
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
    Route::get('site-categories', function() {
        return SiteCategory::whereType(null)->get();
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
    Route::apiResource('shops', ShopController::class)->only(['destroy', 'store', 'update']);
    // Route::post('labs/register', [ShopController::class, 'store'])->name('labs.store');
});

Route::post('auth/google', 'App\Http\Controllers\AuthController@handleGoogleSignIn');
Route::post('auth/login', 'App\Http\Controllers\AuthController@login');
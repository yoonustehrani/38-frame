<?php

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('auth/google', 'App\Http\Controllers\AuthController@handleGoogleSignIn');
Route::apiResource('ads', 'App\Http\Controllers\AdController');
Route::get('site-categories', function() {
    return SiteCategory::whereType(null)->get();
})->name('site-categories.index');
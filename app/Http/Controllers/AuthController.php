<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
        $user = User::whereEmail($request->input('email'))->first();
        if ($user && (! Hash::check($request->input('password'), $user->password))) {
            return response()->json([
                'errors' => [
                    'message' => 'Login failed',
                    'email' => ['کاربری با این ایمیل و رمزعبور یافت نشد.']
                ]
            ], 419);
        } else {
            $user = new User([
                // 'username' => \Str::random(12),
                'email' => $request->input('email'),
                'password' => bcrypt(\Str::random(12)),
                'email_verfied_at' => now()
            ]);
            $user->meta = serialize([]);
            $user->save();
        }
        $request->session()->regenerate();
        Auth::loginUsingId($user->getKey());
        return response()->json($user);
    }
    public function adminLogin(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
        $user = User::whereEmail($request->input('email'))->first();
        if ($user && Hash::check($request->input('password'), $user->password) && $user->isAdmin()) {
            Auth::loginUsingId($user->getKey());
            return response()->json($request->user());
        }
        return response()->json([
            'errors' => [
                'message' => 'Login failed',
                'email' => ['کاربری با این ایمیل و رمزعبور یافت نشد.']
            ]
        ], 419);
    }
    public function logout(Request $request)
    {
        auth('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return ['okay' => true];
    }
    public function handleGoogleSignIn(Request $request)
    {
        $googleUser = extract_google_user_from_token($request->input('token'));
        $user = User::whereEmail($googleUser['email'])->first();
        if (! $user) {
            $user = new User([
                // 'username' => \Str::random(12),
                'email' => $googleUser['email'],
                'avatar' => $googleUser['picture'],
                'password' => bcrypt(\Str::random(12)),
                'email_verfied_at' => now()
            ]);
            $user->meta = serialize([]);
            $user->save();
        }
        Auth::loginUsingId($user->getKey());
        return response()->json($user);
    }
    public function handleGoogleAdminSignIn(Request $request)
    {
        $googleUser = extract_google_user_from_token($request->input('token'));
        $user = User::whereEmail($googleUser['email'])->first();
        if (! $user) abort(419, 'هیچ کاربری با این ایمیل وجود ندارد.');
        Auth::loginUsingId($user->getKey());
        if ($user->isAdmin()) {
            return response()->json($user);
        }
        return abort(403, 'دسترسی شما مجاز نیست.');
    }
}

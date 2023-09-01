<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::guard('web')->attempt($credentials)) {
            // $request->session()->regenerate();
            return response()->json($request->user());
        }
        return response()->json([
            'error' => [
                'message' => 'Login failed',
                'email' => 'The provided credentials do not match our records.'
            ]
        ], 419);
    }
    public function logout(Request $request)
    {

    }
    public function handleGoogleSignIn(Request $request)
    {
        list($headersB64, $payloadB64, $sig) = explode('.', $request->input('token'));
        $payload = json_decode(base64_decode($payloadB64), true);
        if (
            now()->lt(new \Carbon\Carbon($payload['exp'])
            && $payload['aud'] != config('services.google.client_id'))
            && ! in_array($payload['iss'], ['accounts.google.com', 'https://accounts.google.com'])
        ) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
        $googleUser = [
            'email' => $payload['email'],
            'name' => $payload['name'],
            'picture' => $payload['picture'],
            // 'email_verfied' => $payload['email_verfied']
        ];
        $user = User::whereEmail($googleUser['email'])->first();
        if (! $user) {
            $user = new User([
                // 'username' => \Str::random(12),
                'email' => $googleUser['email'],
                'avatar' => $payload['picture'],
                'password' => bcrypt(\Str::random(12)),
                'email_verfied_at' => now()
            ]);
            $user->meta = serialize([]);
            $user->save();
        }
        Auth::loginUsingId($user->getKey());
        return response()->json($user);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
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
        $user = [
            'email' => $payload['email'],
            'name' => $payload['name'],
            'picture' => $payload['picture'],
            'email_verfied' => $payload['email_verfied']
        ];
        return response()->json($user);
    }
}

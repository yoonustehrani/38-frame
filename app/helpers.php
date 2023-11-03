<?php

if (! function_exists('icon')) {
    function icon($name) {
        include(
            resource_path("icons/$name.svg")
        );
    }
}

if (! function_exists('price_format')) {
    function price_format($number) {
        $step = 0;
        do {
            $number /= 1000;
            $step++;
        } while ($number > 1000);
        $steps = ['', 'هزار', 'میلیون'];
        $output = '';
        if ($number > 1) {
            $output .= floor($number) . ' ' . $steps[$step];
            $price = (string) $number * 1000;
            $number = (integer) substr($price, -3, strlen($price));
        }
        if ($number >= 100) {
            if (strlen($output) > 0) {
                $output .= ' و ';
            }
            $output .= $number . ' ' . $steps[$step - 1];
        }
        return $output . ' تومان';
    }
}

if (! function_exists('numberToWords')) {
    function numberToWords($number)
    {
        $ones = array(
            0 => 'zero',
            1 => 'one',
            2 => 'two',
            3 => 'three',
            4 => 'four',
            5 => 'five',
            6 => 'six',
            7 => 'seven',
            8 => 'eight',
            9 => 'nine'
        );

        $tens = array(
            10 => 'ten',
            11 => 'eleven',
            12 => 'twelve',
            13 => 'thirteen',
            14 => 'fourteen',
            15 => 'fifteen',
            16 => 'sixteen',
            17 => 'seventeen',
            18 => 'eighteen',
            19 => 'nineteen',
            20 => 'twenty',
            30 => 'thirty',
            40 => 'forty',
            50 => 'fifty',
            60 => 'sixty',
            70 => 'seventy',
            80 => 'eighty',
            90 => 'ninety'
        );

        $magnitude = array(
            '',
            'thousand',
            'million',
            'billion',
            'trillion',
            'quadrillion',
            'quintillion',
            'sextillion',
            'septillion',
            'octillion',
            'nonillion',
            'decillion',
            'undecillion',
            'duodecillion',
            'tredecillion',
            'quattuordecillion',
            'quindecillion',
            'sexdecillion',
            'septendecillion',
            'octodecillion',
            'novemdecillion',
            'vigintillion'
        );

        if ($number < 0) {
            return 'minus ' . numberToWords(abs($number));
        }

        if ($number < 10) {
            return $ones[$number];
        }

        if ($number < 100) {
            if ($number % 10 === 0) {
                return $tens[$number];
            } else {
                return $tens[floor($number / 10) * 10] . ' ' . $ones[$number % 10];
            }
        }

        foreach ($magnitude as $magIndex => $magName) {
            $base = pow(1000, $magIndex);
            if ($number < 1000 * $base) {
                $left = floor($number / $base);
                $right = $number - ($left * $base);
                $result = numberToWords($left) . ' ' . $magName;
                if ($right > 0) {
                    $result .= ' and ' . numberToWords($right);
                }
                return $result;
            }
        }

        return '';
    }
}

if (! function_exists('random_phone_number')) {
    function random_phone_number() {
        $phone = '09';
        for ($i=0; $i < 9; $i++) { 
            $phone .= fake()->randomDigit();
        }
        return $phone;
    }
}

if (! function_exists('get_enum_values')) {
    function get_enum_values($enumClass) {
        return array_map(fn($type) => $type->value, $enumClass::cases());
    }
}

if (! function_exists('persian_numbers')) {
    function persian_numbers(int|float|string $number) {
        $number = (string) $number;
        $numbers = collect([
            '1' => '۱',
            '2' => '۲',
            '3' => '۳',
            '4' => '۴',
            '5' => '۵',
            '6' => '۶',
            '7' => '۷',
            '8' => '۸',
            '9' => '۹',
            '0' => '۰',
        ]);
        return str_replace($numbers->keys()->toArray(), $numbers->values()->toArray(), $number);
    }
}

if (! function_exists('extract_google_user_from_token')) {
    function extract_google_user_from_token(string $token) {
        list($headersB64, $payloadB64, $sig) = explode('.', $token);
        $payload = json_decode(base64_decode($payloadB64), true);
        if (
            now()->lt(new \Carbon\Carbon($payload['exp']))
            && $payload['aud'] != config('services.google.client_id')
            && ! in_array($payload['iss'], ['accounts.google.com', 'https://accounts.google.com'])
        ) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
        return [
            'email' => $payload['email'],
            'name' => $payload['name'],
            'picture' => $payload['picture'],
            // 'email_verfied' => $payload['email_verfied']
        ];
    }
}
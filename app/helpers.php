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
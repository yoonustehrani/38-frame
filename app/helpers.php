<?php

if (! function_exists('icon')) {
    function icon($name) {
        include(
            resource_path("icons/$name.svg")
        );
    }
}
<?php

namespace App\Traits;

use App\Models\SEOConfig;

trait HasSeoConfig
{
    public function seo()
    {
        return $this->morphOne(SEOConfig::class, 'optimizable');
    }
}
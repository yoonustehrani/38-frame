<?php

namespace App\Models;

use App\Traits\HasMetaAttribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SEOConfig extends Model
{
    use HasFactory, HasMetaAttribute;

    public $table = 'seo_configs';
    protected $fillable = ['html_title', 'meta_description', 'meta_robots'];

    public function optimizable() {
        return $this->morphTo();
    }
}

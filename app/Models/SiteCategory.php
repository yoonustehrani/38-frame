<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiteCategory extends Model
{
    use HasFactory;

    protected $fillabled = ['name', 'label', 'type', 'description'];
    public $timestamps = false;


    public function services()
    {
        return $this->hasMany(LabService::class, 'category_id');
    }
}

<?php

namespace App\Models;

use App\Traits\HasMetaAttribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UploadedFile extends Model
{
    use HasFactory, HasMetaAttribute;

    protected $fillable = ['name', 'type', 'extension', 'path', 'thumbnail_path', 'driver'];

    // public function attachable() {
    //     return $this->morphTo();
    // }
}

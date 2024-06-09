<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Avatar extends Model
{
    use HasFactory;
    protected $fillable = ['alt', 'title'];
    public $timestamps = false;
    public function relatable()
    {
        return $this->morphTo();
    }
    public function file()
    {
        return $this->belongsTo(UploadedFile::class, 'file_id');
    }
}

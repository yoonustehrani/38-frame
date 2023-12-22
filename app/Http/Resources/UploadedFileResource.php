<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UploadedFileResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'filename' => "{$this->name}.{$this->extension}",
            'type' => $this->type,
            'uri' => $this->driver === 'local' ? asset($this->path) : $this->path,
            'thumbnailUri' => asset($this->thumbnail_path)
        ];
    }
}

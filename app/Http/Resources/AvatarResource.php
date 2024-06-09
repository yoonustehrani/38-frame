<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AvatarResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $file = new JsonResource($this->whenLoaded('file'));
        return [
            'alt' => $this->alt,
            'title' => $this->title,
            'url' => $file ? asset($file->path) : null,
            'thumbnail_url' => $file ? asset($file->thumbnail_path) : null
        ];
    }
}

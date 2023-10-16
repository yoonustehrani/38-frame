<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BlogPostResource extends JsonResource
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
            'title' => $this->title,
            'description' => $this->description,
            'avatar' => $this->avatar,
            'views' => 1,
            'url' => route('pages.blog.show', ['slug' => $this->slug]),
            'author' => $this->author
        ];
    }
}

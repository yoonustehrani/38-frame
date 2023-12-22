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
        if (str_contains($request->url(), 'blog-posts')) {
            return [
                'id' => $this->id,
                'title' => $this->title,
                'description' => $this->description,
                'avatar' => (new UploadedFileResource($this->avatar[0]))->toArray($request) ?? null,
                'views' => 1,
                'url' => route('pages.blog.show', ['slug' => $this->slug]),
                'author' => $this->author
            ];
        }
        $array = parent::toArray($request);
        $array['avatar'] = (new UploadedFileResource($this->avatar[0]))->toArray($request) ?? null;
        return $array;
    }
}

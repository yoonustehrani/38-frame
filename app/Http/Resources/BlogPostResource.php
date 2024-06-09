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
            'avatar' => new AvatarResource($this->whenLoaded('avatar')),
            // 'avatar' => (new UploadedFileResource($this->avatar[0]))->toArray($request) ?? null,
            'views' => 1,
            'url' => route('pages.blog.show', ['slug' => $this->slug]),
            'author' => new JsonResource($this->whenLoaded('author')),
            'categories' => JsonResource::collection($this->whenLoaded('categories')),
            'tags' => JsonResource::collection($this->whenLoaded('tags'))
        ];
        // if (str_contains($request->url(), 'blog-posts')) {
            
        // }
        // $array = parent::toArray($request);
        // $array['avatar'] = (new UploadedFileResource($this->avatar[0]))->toArray($request) ?? null;
        // return $array;
    }
}

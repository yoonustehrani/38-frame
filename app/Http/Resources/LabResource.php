<?php

namespace App\Http\Resources;

use App\Models\Lab;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LabResource extends JsonResource
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
            'brand' => $this->brand,
            'rating' => 5,
            'active' => !! $this->active,
            'location' => "{$this->city->province->name}، {$this->city->name}",
            'logo' => url()->asset('/images/sample-logo.png'),
            'uri' => route('pages.labs.show', ['lab' => $this->slug]),
            'category' => $this->category
        ];
    }
}

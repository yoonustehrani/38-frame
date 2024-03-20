<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\File;

class UpdateShopRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'brand' => 'string|min:3|max:60',
            'category' => ['integer', Rule::in([1, 2, 3, 4])],
            'bio' => 'string|min:4|max:500',
            'founded_in_year' => 'integer|digits:4|min:1290|max:1403',
            'avatar' => [
                File::types(['jpg', 'png', 'webp'])
                ->min('10kb')
                ->max('1mb')
            ],
            'website' => 'nullable|string|regex:/^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+)(?:\/.*)?$/',
            'meta.social.instagram' => 'nullable|string|min:4|max:60',
            'meta.social.telegram_channel' => 'nullable|string|min:4|max:60',
        ];
    }
}

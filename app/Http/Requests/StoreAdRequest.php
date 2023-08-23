<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\File;

class StoreAdRequest extends FormRequest
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
            // 'title' => 'required|string|min:3|max:80',
            // 'description' => 'required|string|min:3',
            // 'city_id' => 'required|integer|min:1',
            // 'phone_number' => 'required|string|numeric|digits:11|string|regex:/09[0-9]{9}/',
            'photos.*' => [
                'required',
                File::types(['jpg', 'png', 'webp'])
                ->min('10kb')
                ->max('1mb')
                // TODO
                // ->dimensions(
                //     Rule::dimensions()->ratio()->minHeight()->minWidth()
                // )
            ],
            // 'address_line' => 'nullable|string|numeric'
        ];
    }
}

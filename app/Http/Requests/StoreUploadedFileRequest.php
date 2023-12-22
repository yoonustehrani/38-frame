<?php

namespace App\Http\Requests;

use App\Models\UploadedFile;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\File;

class StoreUploadedFileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->can('create', UploadedFile::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'files' => ['required', 'array'],
            'files.*' => [
                'required',
                File::types(['jpg', 'png', 'webp'])
                ->min('10kb')
                ->max('1mb')
            ]
        ];
    }
}

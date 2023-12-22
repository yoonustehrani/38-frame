<?php

namespace App\Http\Requests;

use App\Models\BlogPost;
use Illuminate\Foundation\Http\FormRequest;

class StoreBlogPostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->can('create', BlogPost::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'blogPost' => 'required|array',
            'blogPost.title' => 'required|string|min:3|max:80',
            'blogPost.subtitle' => 'required|string|min:5|max:190',
            'blogPost.description' => 'required|string|min:3|max:600',
            'blogPost.body' => 'required|string|min:1',
            'avatar' => 'required|integer',
            'seo' => 'required',
            'seo.html_title' => 'nullable|string|min:3',
            'seo.meta_description' => 'nullable|string|min:20'
        ];
    }
}

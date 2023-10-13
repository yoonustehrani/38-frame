<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use Illuminate\Http\Request;

class BlogPostController extends Controller
{
    public function index()
    {
        $posts = BlogPost::with('author')->get();
        return view('pages.blog.index', compact('posts'));
    }

    public function show(string $slug)
    {
        $post = BlogPost::whereSlug($slug)->firstOrFail();
        return $post;
        return view('pages.blog.show', compact('post'));
    }
}

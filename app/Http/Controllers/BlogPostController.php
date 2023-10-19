<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogPostCollection;
use App\Http\Resources\BlogPostResource;
use App\Models\BlogPost;
use Illuminate\Http\Request;

class BlogPostController extends Controller
{
    public function index(Request $request)
    {
        $posts = BlogPost::with('author')->where('published_at', '<=', now());
        if ($request->wantsJson()) {
            if ($request->has('limit')) {
                $posts->limit($request->query('limit', 4));
            }
            return BlogPostResource::collection($posts->get());
        }
        return view('pages.blog.index')->with('posts', $posts->get());
    }

    public function show(string $slug)
    {
        $post = BlogPost::whereSlug($slug)->with('author')->firstOrFail();
        if (request()->has('debug')) {
            return $post;
        }
        return view('pages.blog.show', compact('post'));
    }
}

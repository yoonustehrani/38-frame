<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogPostCollection;
use App\Http\Resources\BlogPostResource;
use App\Models\BlogPost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class BlogPostController extends Controller
{
    public function index(Request $request)
    {
        $posts = BlogPost::query();
        if ($request->has('limit')) {
            $posts->limit($request->query('limit', 4));
        }
        if (Gate::denies('viewAny', BlogPost::class)) {
            $posts->with('author')->where('published_at', '<=', now());
            return BlogPostResource::collection($posts->get());
        }
        return $posts->get();
    }
    public function show(BlogPost $post, Request $request)
    {
        $this->authorize('update', $post);
        return $post;
    }
    public function showPublic(string $slug, Request $request)
    {
        $post = BlogPost::whereSlug($slug)->firstOrFail();
        $post->load('author');
        return view('pages.blog.show', compact('post'));
    }
}

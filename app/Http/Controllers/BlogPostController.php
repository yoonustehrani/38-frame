<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBlogPostRequest;
use App\Http\Resources\BlogPostCollection;
use App\Http\Resources\BlogPostResource;
use App\Models\BlogPost;
use App\Models\SEOConfig;
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
        $posts = $posts->with('avatar')->get();
        return BlogPostResource::collection($posts);
    }
    public function show(BlogPost $post, Request $request)
    {
        $this->authorize('update', $post);
        return $post;
    }
    public function showPublic(string $slug, Request $request)
    {
        $post = BlogPost::whereSlug($slug)->firstOrFail();
        $post->load(['author', 'avatar', 'seo']);
        if ($request->has('debug')) {
            return $post;
        }
        return view('pages.blog.show', compact('post'));
    }

    public function store(StoreBlogPostRequest $request)
    {
        try {
            \DB::beginTransaction();
            $post = new BlogPost($request->input('blogPost'));
            $post->author_id = $request->user()->id;
            $post->slug = str_replace(' ', '-', $post->title);
            $post->save();
            $post->seo()->save(new SEOConfig($request->input('seo')));
            $post->avatar()->sync($request->input('avatar'));
            \DB::commit();
        } catch (\Throwable $th) {
            \DB::rollback();
            throw $th;
        }
    }
}

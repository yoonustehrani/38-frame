<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBlogPostRequest;
use App\Http\Resources\BlogPostResource;
use App\Models\BlogPost;
use App\Models\SEOConfig;
use Illuminate\Http\Request;

class BlogPostController extends Controller
{
    public function apiIndex(Request $request)
    {
        $posts = BlogPost::query();
        if ($request->has('limit')) {
            $posts->limit($request->query('limit', 4));
        }
        $posts->with(['author', 'avatar'])->where('published_at', '<=', now());
        return BlogPostResource::collection($posts->get());
    }
    public function index(Request $request)
    {
        $posts = BlogPost::query();
        if ($request->has('limit')) {
            $posts->limit($request->query('limit', 4));
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

<?php

namespace App\Livewire;

use App\Http\Resources\BlogPostCollection;
use App\Models\BlogPost;
use Livewire\Component;
use Livewire\Attributes\Url;


class Posts extends Component
{
    #[Url(except: '', history: true)]
    public $search = '';
    #[Url(except: 1)]
    public $page = 1;

    public function updatingSearch()
    {
        $this->page = 1;
    }
    public function render()
    {
        $posts = BlogPost::with(['author', 'avatar', 'categories', 'tags']);
        if ($this->search && strlen($this->search) > 2) {
            $posts->where('title', 'like', "%{$this->search}%");
        }
        return view('livewire.posts', [
            'posts' => new BlogPostCollection($posts->paginate(8))
        ]);
    }
}

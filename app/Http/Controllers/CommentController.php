<?php

namespace App\Http\Controllers;

use App\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index(Request $request)
    {
        $comments = Comment::all();

        return $comments;
    }

    public function store(Request $request)
    {
        $comment = new Comment();

        $comment->comment = $request->get('comment');
        $comment->save();

        return $comment;
    }
}

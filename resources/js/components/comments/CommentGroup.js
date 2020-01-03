import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CommentAdd from "./CommentAdd";
import CommentList from "./CommentList";
import axios from "axios";

class CommentGroup extends Component {

    handlerCommentSubmit( data ) {
        console.log( 'handlerCommentSubmit', data );
        const postData = {
            comment : data
        };
        console.log( process.env );

        const url = '/laravel/laravel58/public/api/comment/save';
        axios.post( url, postData)
            .then( response => {
                console.log('Respomse', response);
            });
    }

    render() {
        return (
            <div className="col-md-8">
                <CommentList/>
                <CommentAdd handlerCommentSubmit={this.handlerCommentSubmit} />
            </div>
        )
    }
}

export default CommentGroup;

if (document.getElementById('comments-wrapper')) {
    ReactDOM.render(<CommentGroup />, document.getElementById('comments-wrapper'));
}

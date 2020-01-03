import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CommentAdd from "./CommentAdd";
import Comment from "./Comment";
import axios from "axios";

class CommentGroup extends Component {

    constructor (props) {
        super( props );
        this.state = {
            comments : [
                // { id : 1, body : 'lorem dasda asdasd'},
                // { id : 2, body : 'qqq qlorem dasda asdasd'}
            ]
        };
        // Obtener comentarioss
        const url = '/laravel/laravel58/public/api/comment';
        axios.get( url )
            .then( (response) => {
                let comments = response.data.map( comment => {
                    return {
                        id   : comment.id,
                        body : comment.comment
                    }
                });
                this.setState( {comments : comments} );
            });

        this.handlerCommentSubmit = this.handlerCommentSubmit.bind( this );
    }

    handlerCommentSubmit( data ) {
        const postData = {
            comment : data
        };
        // Almacenar comentario
        const url = '/laravel/laravel58/public/api/comment/save';
        axios.post( url, postData)
            .then( (response) => {
                let comments = this.state.comments;
                console.log('Response', response);
                comments.unshift({
                    id   : comments.length + 1,
                    body : response.data.comment
                });
                this.setState( {comments : comments} );
            });
    }

    renderComments () {
        const { comments } = this.state;

       return comments.map( comment => {
            const { id , body } = comment;
            return (
                // <div className="comment card" key={ id }> { body } </div>
                <Comment className="comment card" key={ id } body={ body } />
            );
        });
    }

    render() {
        return (
            <div className="col-md-8">
                { this.renderComments() }
                <CommentAdd handlerCommentSubmit={this.handlerCommentSubmit} />
            </div>
        )
    }
}

export default CommentGroup;

if (document.getElementById('comments-wrapper')) {
    ReactDOM.render(<CommentGroup />, document.getElementById('comments-wrapper'));
}

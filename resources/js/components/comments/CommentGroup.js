import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CommentGroup extends Component {
    render() {
        return (
            <div className="container">
                Comentarios
            </div>
        )
    }
}

export default CommentGroup;

if (document.getElementById('comment-wrapper')) {
    ReactDOM.render(<CommentGroup />, document.getElementById('comment-wrapper'));
}

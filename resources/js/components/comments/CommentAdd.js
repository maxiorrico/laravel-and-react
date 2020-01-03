import React, { Component, useState } from 'react';


function CommentAdd (props) {
    const { handlerCommentSubmit } = props;
    // let comment = '';
    const [ comment, setComment ] = useState('');

    return (
        <div>
            <div className="card mt-4 mb-3">
                <div className="card-header"><strong> Comments </strong></div>

                <div className="card-body">
                    <textarea value={ comment } name="comment" rows="4" className="form-control" placeholder="Agregar comentario" onChange={ event => setComment( event.target.value ) }></textarea>
                </div>
            </div>
            <div>
                <button className="btn btn-primary mr-3" onClick={ event => {
                    handlerCommentSubmit( comment );
                    setComment('');
                    }}> Comment </button>
                <button className="btn btn-warning mr-3"> Close issue </button>
            </div>
        </div>
    );
}

export default CommentAdd;
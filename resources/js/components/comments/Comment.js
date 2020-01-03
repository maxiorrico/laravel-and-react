import React, { Component, useState } from 'react';


function Comment (props) {

    return (
        <div className="comment card">
            * { props.body }
        </div>
    );
}

export default Comment;
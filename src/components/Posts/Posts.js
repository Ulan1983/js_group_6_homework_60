import React from 'react';

const Posts = props => {
    return (
        <div>
            <span>{props.author}</span>
            <span>{props.date}</span>
            <span>{props.message}</span>

        </div>
    );
};

export default Posts;
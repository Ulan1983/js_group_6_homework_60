import React from 'react';
import './Posts.css';

const Posts = props => {
    return (
        <div className="post">
            <div className="post_inner">
                <p className="post_author">{props.author}</p>
                <p className="post_date">{props.date}</p>
            </div>
            <p className="post_message">{props.message}</p>
        </div>
    );
};

export default Posts;
import React from 'react';
import './Comment.css'; // Import the CSS file for responsive styles

const Comment = ({ title, author, date, content, onReply }) => {
    console.log({ title, author, date, content, onReply });
    
    return (
        <div className="comment">
            <div className="title">{title}</div>
            <div className="author">{author}</div>
            <div className="date">{date}</div>
            <div className="content">{content}</div>
            <button onClick={onReply}>Reply</button>
        </div>
    );
};

export default Comment;

import React, { useState } from 'react';
import './CommentForm.css'; // Import the CSS file for responsive styles

const CommentForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = { title, author, content };
        onSubmit(newComment);
        setTitle('');
        setAuthor('');
        setContent('');
    };

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CommentForm;

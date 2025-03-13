import React, { useState, useEffect } from 'react';
import Comment from './components/Comment';
import CommentForm from './components/CommentForm';
import './App.css'; // Import the CSS file for responsive styles

const App = () => {
  const [displayAddCommentForm, setDisplayAddCommentForm] = useState(false);
  const [replyFormId, setReplyFormId] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:5001/comments/get-all-comments');
      const data = await res.json();
      setComments(data.data);
      console.log(data.data);
      
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleAddComment = async (newComment) => {
    try {
      const res = await fetch('http://localhost:5001/comments/new-comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newComment }),
      });
      const data = await res.json();
      if (data.success) {
        setComments([...comments, data.data]);
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleReply = (commentId) => {
    setReplyFormId(commentId);
  };

  const handleAddReply = async (commentId, newReply) => {
    try {
      const res = await fetch('http://localhost:5001/comments/add-to-existing-comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newComment: newReply, commentId }),
      });
      const data = await res.json();
      if (data.success) {
        setComments(comments.map(comment => 
          comment._id === commentId ? data.data : comment
        ));
        setReplyFormId(null);
      }
    } catch (error) {
      console.error('Error adding reply:', error);
    }
  };

  return (
    <div className="app-container">
      <div id="comments-container">
        {comments.map((comment) => (
          <React.Fragment key={comment._id}>
            <Comment
              title={comment.title}
              author={comment.author}
              date={comment.date}
              content={comment.content}
              onReply={() => handleReply(comment._id)}
            />
            {replyFormId === comment._id && (
              <CommentForm onSubmit={(newReply) => handleAddReply(comment._id, newReply)} />
            )}
          </React.Fragment>
        ))}
      </div>
      <button onClick={() => setDisplayAddCommentForm(!displayAddCommentForm)}>Add Comment</button>
      {displayAddCommentForm && <CommentForm onSubmit={handleAddComment} />}
    </div>
  );
};

export default App;

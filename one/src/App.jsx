import React, { useState } from 'react';
import CommentForm from './components/comments/CommentForm';
import CommentList from './components/comments/CommentList';

const App = () => {
  const [comments, setComments] = useState([]);

  const addComment = (text, parentId = null) => {
    const newComment = {
      id: Date.now(),
      text,
      userName: 'User Name', // Replace with actual user data
    //   userIcon: 'https://via.placeholder.com/30', // Replace with actual user icon
      userIcon : 'https://i.pinimg.com/564x/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.jpg',
      parentId,
      replies: []
    };

    if (parentId === null) {
      setComments([...comments, newComment]);
    } else {
      setComments(addReplyToComment(comments, parentId, newComment));
    }
  };

  const addReplyToComment = (comments, parentId, newReply) => {
    return comments.map(comment => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...comment.replies, newReply]
        };
      } else if (comment.replies.length > 0) {
        return {
          ...comment,
          replies: addReplyToComment(comment.replies, parentId, newReply)
        };
      } else {
        return comment;
      }
    });
  };

  return (
    <div>
      <h1>Comment UI</h1>
      <h3>Comments</h3>
      <CommentForm onSubmit={addComment} />
      <CommentList comments={comments} addReply={addComment} />
    </div>
  );
};

export default App;

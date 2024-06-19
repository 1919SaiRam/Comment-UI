import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments, addReply }) => {
  if (!comments || comments.length === 0) {
    return null; // or render a message indicating no comments
  }

  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} addReply={addReply} />
      ))}
    </div>
  );
};

export default CommentList;

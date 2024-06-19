import React, { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Comment = ({ comment, addReply }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  return (
    <div style={{ marginLeft: comment.parentId ? '20px' : '0', marginTop: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={comment.userIcon} alt={comment.userName} style={{ width: '30px', borderRadius: '50%', marginRight: '10px' }} />
        <strong>{comment.userName}</strong>
      </div>
      <p>{comment.text}</p>
      <button onClick={() => setShowReplyForm(!showReplyForm)}>
        {showReplyForm ? 'Cancel' : 'Reply'}
      </button>
      {showReplyForm && <CommentForm onSubmit={addReply} parentId={comment.id} />}
      {comment.replies && <CommentList comments={comment.replies} addReply={addReply} />}
    </div>
  );
};

export default Comment;

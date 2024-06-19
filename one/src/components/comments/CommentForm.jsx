import React, { useState } from 'react';

const CommentForm = ({ onSubmit, parentId = null }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text, parentId);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a comment..."
        style={{ width: '80%', marginRight: '10px' }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;

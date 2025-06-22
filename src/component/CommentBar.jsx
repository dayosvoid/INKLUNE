import React, { useState } from 'react';

const CommentBar = () => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    alert(`Comment submitted: ${comment}`);
    setComment('');
  };

  return (
    <div className=" mx-auto mt-5 bg-white rounded-lg p-4 shadow-sm">
      <h2 className="text-sm font-semibold text-gray-700 mb-2">Comment</h2>
      <form onSubmit={handleSubmit} className="flex items-center bg-gray-50 rounded-md p-2">
        <input
          type="text"
          placeholder="Enter a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="flex-grow bg-gray-50 outline-none px-3 py-2 text-sm"
        />
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white text-sm px-4 py-2 rounded-md ml-2"
        >
          Enter a comment
        </button>
      </form>
    </div>
  );
};

export default CommentBar;
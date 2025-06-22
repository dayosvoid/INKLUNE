import React, { useState } from 'react';
import { ThumbsUp } from 'lucide-react';

const LikeButton = () => {
  const [likes, setLikes] = useState(10);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <button
      onClick={toggleLike}
      className="flex items-center space-x-2 text-pink-600 hover:text-pink-800 text-sm"
    >
      <ThumbsUp size={16} fill={liked ? 'currentColor' : 'none'} />
      <span>{likes}</span>
    </button>
  );
};

export default LikeButton;
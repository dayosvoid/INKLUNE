import React, { useState } from 'react';
import { ThumbsUp, Trash2 } from 'lucide-react';
import CommentBar from './CommentBar';
import LikeButton from './LikeButton';

const initialComments = [
  {
    id: 1,
    name: 'Carla Lubin',
    text: 'This is truly delightful.',
    avatar: 'https://i.pravatar.cc/40?img=10',
    
  },
  {
    id: 2,
    name: 'Angel Philips',
    text: 'This is a beautiful piece, it thrust the soul and help unmask the demon called trauma. Thank you for the heartfelt emotions poured out.',
    avatar: 'https://i.pravatar.cc/40?img=20',
    
  },
  {
    id: 3,
    name: 'Carter Botosh',
    text: 'This is really a truth well told. I honestly saw myself whilst reading. It’s like an eye opener for me. I really loved it. Thank you',
    avatar: 'https://i.pravatar.cc/40?img=30',
    
  },
   {
    id: 4,
    name: 'Angel Philips',
    text: 'This is a beautiful piece, it thrust the soul and help unmask the demon called trauma. Thank you for the heartfelt emotions poured out.',
    avatar: 'https://i.pravatar.cc/40?img=20',
    
  },
];

const CommentBox = () => {
  const [comments, setComments] = useState(initialComments);
  const [input, setInput] = useState('');

  const handleLike = (id) => {
    setComments(comments.map(c => c.id === id ? { ...c, likes: c.likes + 1 } : c));
  };

  const handleDelete = (id) => {
    setComments(comments.filter(c => c.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newComment = {
      id: Date.now(),
      name: 'You',
      text: input,
      avatar: 'https://i.pravatar.cc/40?img=5',
      likes: 0,
    };
    setComments([newComment, ...comments]);
    setInput('');
  };

  return (
    <>
    <CommentBar/>

    <div className="mx-auto mt-5 p-4 bg-white rounded-2xl border-gray-100 shadow-md">
      {comments.map((c) => (
        <div key={c.id} className="bg-gray-50 p-4 rounded-2xl mb-4">
          <div className="flex items-center gap-3 mb-2">
            <img src={c.avatar} alt={c.name} className="w-8 h-8 rounded-full" />
            <span className="font-semibold text-sm">{c.name}</span>

            <div className="flex justify-end items-center gap-2 text-pink-600 text-sm ms-auto">
            <span>{c.likes}</span>
            <LikeButton/>
            {/* <ThumbsUp size={16} className="cursor-pointer" onClick={() => handleLike(c.id)} /> */}
            <Trash2 size={16} className="cursor-pointer text-black" onClick={() => handleDelete(c.id)} />
          </div>
          </div>

           

          <div className='bg-white px-4 py-2 rounded-2xl'>
            <p className="text-sm text-gray-700 mb-2">{c.text}</p>
          </div>
          
        </div>
      ))}
    </div>
    </>
  );
};

export default CommentBox;
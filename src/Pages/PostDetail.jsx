import React, { useState } from "react";
import { Link } from "react-router-dom";
import CommentBox from "../component/CommentBox";
import PopUp from "../component/PopUp";
import img1 from "../assets/desmond imgs/assets/blue boy.jpg"
import img2 from "../assets/desmond imgs/assets/code.jpg"
import img3 from "../assets/desmond imgs/assets/fire heart.jpg"
import Nav from "../component/Nav dayo";



const BlogPosts = [
  {
    id: 1,
    title: "The Silent Battles We Bring Into Love",
    image: img1,
    date: "April 21, 2025",
    post: "They don't tell you that sometimes, when you fall in love... We weaponize guilt. We gaslight. We ghost. We cling... It demands vulnerability, honesty, accountability... it’s breathtaking.They don’t tell you that sometimes, when you fall in love, you’re not just falling for the person.You’re falling into their hidden wars. Their silent battles. Their invisible wounds stitched beneath perfect smilesA lot of us grew up in homes where love was conditional. Where a father’s silence could crush you more than his words, where a mother’s criticism stung sharper than a slap. Where affection was a currency you had to earn by being enough, and God help you if you weren’t.We learned early: Stay quiet. Be tough. Don’t feel too much. Don’t need too much.And when we carried these lessons into adulthood, we thought we had healed.",
  },

  {
    id: 2,
    title: "The Forgotten Art of Slow Writing",
    image: img2,
    date: "April 21, 2025",
    post: "In a world obsessed with productivity, there's profound value in slowing down your writing process to reconnect with the essence of your thoughts...They don't tell you that sometimes, when you fall in love... We weaponize guilt. We gaslight. We ghost. We cling... It demands vulnerability, honesty, accountability... it’s breathtaking.They don’t tell you that sometimes, when you fall in love, you’re not just falling for the person.You’re falling into their hidden wars. Their silent battles. Their invisible wounds stitched beneath perfect smilesA lot of us grew up in homes where love was conditional. Where a father’s silence could crush you more than his words, where a mother’s criticism stung sharper than a slap. Where affection was a currency you had to earn by being enough, and God help you if you weren’t.We learned early: Stay quiet. Be tough. Don’t feel too much. Don’t need too much.And when we carried these lessons into adulthood, we thought we had healed.",
  },

  {
    id: 3,
    title: "The Silent Battles We Bring Into Love",
    image: img3,
    date: "April 21, 2025",
    post: "In a world obsessed with productivity, there's profound value in slowing down your writing process to reconnect with the essence of your thoughts...They don't tell you that sometimes, when you fall in love... We weaponize guilt. We gaslight. We ghost. We cling... It demands vulnerability, honesty, accountability... it’s breathtaking.They don’t tell you that sometimes, when you fall in love, you’re not just falling for the person.You’re falling into their hidden wars. Their silent battles. Their invisible wounds stitched beneath perfect smilesA lot of us grew up in homes where love was conditional. Where a father’s silence could crush you more than his words, where a mother’s criticism stung sharper than a slap. Where affection was a currency you had to earn by being enough, and God help you if you weren’t.We learned early: Stay quiet. Be tough. Don’t feel too much. Don’t need too much.And when we carried these lessons into adulthood, we thought we had healed.",
  },
];

const PostDetail = () => {
  const [reading, setReading] = useState(1);

  const post = BlogPosts.find((post) => post.id === reading);

  const recommendedpost = BlogPosts.filter((post) => post.id !== reading)
  


  return (
    <div className="w-full">
      <Nav/>
      <div className="bg-gray-50 px-6 py-10 min-h-screen">
        
        <div className="max-w-7xl mx-auto mt-27 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
          <div className="flex">
           <Link to="/publish"> <button className="text-sm bg-white bg-white px-3 py--1 mt-2 rounded-2xl hover:bg-gray-100 cursor-pointer text-black mb-4">&larr; Back</button></Link>
            <div className="ms-auto bg-white hover:bg-gray-100 cursor-pointer px-3 py-1 rounded-2xl"><PopUp/></div>
          </div>

            <h1 className="text-3xl font-bold mb-1">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-4">Science • {post.date}</p>
            <img src={post.image} alt="Post" className="rounded-lg mb-6" />
            <div className="space-y-4 text-align-last text-gray-700 text-[15px]">
              {post.post.split("... ").map((sentence, index) => (
                <p className="mb-2 text-justify">
                  {post.post}
                </p>
              ))} 
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {["#WritingLife", "#WritingCommunity", "#CreativeProcess", "#Poetry", "#Love"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-sm bg-gray-200 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
            <CommentBox />
          </div>

          {/* recommended post */}
          <aside className="space-y-6">
            <div className="bg-white p-4 rounded-2xl shadow">
              <h3 className="font-semibold mb-4">More from Bibiana Okoro</h3>
              {recommendedpost.map((item ) => (
                    <div key={item} className="mb-4 p-4 shadow rounded-2xl">
                      <img
                        src={item.img2}
                        alt="related"
                        className="w-full rounded mb-2"
                      />
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-500 text-align">
                        In a world obsessed with productivity, there's profound value in slowing down your writing process to reconnect with the essence of your thoughts...
                      </p>

                      
                      <div className="flex w-full justify-between">

                        {["creativity"].map(
                        (tag) => (
                      <span
                      key={tag}
                      className="bg-gray-100 hover:bg-gray-150 cursor-pointer rounded-3xl p-2 text-sm mt-2"
                    >
                      {tag}
                    </span> ))}

                        <button
                        onClick={() => setReading(item.id)}
                        className="bg-gray-50 hover:bg-gray-100 cursor-pointer rounded-3xl p-2 text-sm mt-2"
                      >
                        Read more
                      </button>
                      
                      </div>
                    </div>
                    
                  )
              )}
                      <div className="text-center">
                        <button><p className="text-xs text-underline text-gray-500">See  of Bibian’s Post</p></button>
                      </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;

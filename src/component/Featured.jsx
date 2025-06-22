import React, { useState } from "react";
import FeaturedCard from "./FeaturedCard";
import bigimg1 from "../assets/felix imgs/assets/featured-img1.jpg"
import bigimg2 from "../assets/felix imgs/assets/featured-img2.jpg"
import bigimg3 from "../assets/felix imgs/assets/featured-img3.jpg"
import authorImg1  from "../assets/felix imgs/assets/author-img1.jpg"
import authorImg2  from "../assets/felix imgs/assets/author-img2.jpg"
import authorImg3  from "../assets/felix imgs/assets/author-img3.jpg"









const Featured = () => {
  const [activeFilter, setActiveFilter] = useState("latest");

  // Sample data with 6 stories (3 popular, 3 latest)
  const featuredStories = [
    {
      id: 1,
      Title: "The forgotten art of slow writing",
      imageUrl: bigimg1,
      Name: "Maryann",
      PhotoImage: authorImg1,
      Date: "25th April, 2025",
      Time: "5 mins read",
      Story: "In a world obsessed with productivity, there's profound value in slowing down your writing process to reconnect with the essence of your thoughts...",
      holder: "Creativity",
      like: 252,
      comment: 50,
      isPopular: true,
      isLatest: true
    },
    {
      id: 2,
      Title: "Finding your writing community",
      imageUrl: bigimg2,
      Name: "Bibian",
      PhotoImage: authorImg2,
      Date: "25th April, 2025",
      Time: "5 mins read",
      Story: "The transformative power of belonging to a circle of fellow writers who understand your struggles and celebrate your victories...",
      holder: "Writing",
      like: 242,
      comment: 50,
      isPopular: true,
      isLatest: false
    },
    {
      id: 3,
      Title: "A beautiful Hot Mess",
      imageUrl: bigimg3,
      Name: "Albert",
      PhotoImage: authorImg3,
      Date: "25th April, 2025",
      Time: "5 mins read",
      Story: "A raw story of personal growth, mental health, and becoming the best version of myself, one imperfect layer at a time.",
      holder: "Self Love",
      like: 242,
      comment: 50,
      isPopular: false,
      isLatest: true
    },
    {
      id: 4,
      Title: "The Power of Morning Pages",
      imageUrl: bigimg2, 
      Name: "Claire",
      PhotoImage: authorImg3, 
      Date: "20th April, 2025",
      Time: "4 mins read",
      Story: "How writing three pages every morning can transform your creativity and mental clarity throughout the day.",
      holder: "Productivity",
      like: 198,
      comment: 32,
      isPopular: true,
      isLatest: false
    },
    {
      id: 5,
      Title: "Digital Minimalism for Writers",
      imageUrl: bigimg3, 
      Name: "David",
      PhotoImage: authorImg2, 
      Date: "26th April, 2025",
      Time: "6 mins read",
      Story: "Reducing digital distractions to create space for deeper, more meaningful writing sessions.",
      holder: "Focus",
      like: 175,
      comment: 28,
      isPopular: false,
      isLatest: true
    },
    
  ];

  // Filter stories based on active filter
  const filteredStories = featuredStories.filter(story => 
    activeFilter === "latest" ? story.isLatest : story.isPopular
  );

  return (
    <section id="Categories" className="container mx-auto px-4 md:px-6 py-8 md:py-12 w-11/12">
      {/* Top bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 font-Manrope">
          Featured Stories
        </h1>
        
        {/* Filter tabs */}
        <div className="flex bg-gray-100 rounded-full p-1 font-Manrope">
          <button 
            className={`px-4 py-2 rounded-full transition-colors font-medium ${
              activeFilter === "latest" 
                ? "bg-white text-gray-800" 
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveFilter("latest")}
          >
            Latest
          </button>
          <button 
            className={`px-4 py-2 rounded-full transition-colors font-medium ${
              activeFilter === "popular" 
                ? "bg-white text-gray-800" 
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveFilter("popular")}
          >
            Popular
          </button>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredStories.map((story) => (
          <FeaturedCard
            key={story.id}
            Title={story.Title}
            imageUrl={story.imageUrl}
            Name={story.Name}
            PhotoImage={story.PhotoImage}
            Date={story.Date}
            Time={story.Time}
            Story={story.Story}
            holder={story.holder}
            like={story.like}
            comment={story.comment}
          />
        ))}
      </div>

      {/* View more button (optional) */}
      <div className="mt-10 text-center">
        <button className="px-20 py-2 border border-purple-500 text-black rounded-md hover:bg-purple-50 transition-colors font-medium">
          View More Stories
        </button>
      </div>
    </section>
  );
};

export default Featured;
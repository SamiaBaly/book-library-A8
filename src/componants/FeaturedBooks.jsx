import React from 'react';
import { getbooks } from './NewBookName';
import BookCard from './BookCard';
import BookSlider from './BookSlider';

const FeaturedBooks = async() => {
  const books= await getbooks();
  const featuredBooks = books.slice(0, 8);
 
  return (
    <div className="container mx-auto bg-[#6c5ce71e] p-4 my-4 rounded-4xl">
      <h2 className="text-3xl my-4 text-center font-bold text-[#1b1260]">
        Featured Books
      </h2>
      <BookSlider books={featuredBooks}></BookSlider>
      
    </div>
  );
};

export default FeaturedBooks;
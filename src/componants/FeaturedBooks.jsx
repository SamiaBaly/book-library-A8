import React from 'react';
import { getbooks } from './NewBookName';
import BookCard from './BookCard';

const FeaturedBooks = async() => {
  const books= await getbooks();
 
  return (
    <div className="container mx-auto bg-[#6c5ce71e] p-4 my-4 rounded-4xl">
      <h2 className="text-3xl my-4 text-center font-bold text-[#1b1260]">
        Featured Books
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {books.slice(0, 4).map(book => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
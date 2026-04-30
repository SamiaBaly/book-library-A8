import React from 'react';
import { getbooks } from './NewBookName';
import BookCard from './BookCard';

const FeaturedBooks = async() => {
  const books= await getbooks();
  console.log(books);
  return (
    <div className="container mx-auto bg-[#6c5ce71e] p-4 my-4 rounded-4xl">
      <h2 className="text-3xl my-4 text-center font-bold text-[#1b1260]">
        Featured Books
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {books.slice(0, 4).map(book => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
import BookCard from '@/componants/BookCard';
import CategoryBooks from '@/componants/CategoryBooks';

import { getbooks } from '@/componants/NewBookName';
import React from 'react';

const AllBooks =async ({searchParams}) => {
  const { category } = await searchParams;
  
  const books=await getbooks();
  const filterbooks= category? books.filter(book=>book.category.toLowerCase()===category.toLowerCase()): books;
 
  
  return (
    <div className="container mx-auto">
      <CategoryBooks></CategoryBooks>
      <h2 className="text-3xl my-4 text-center font-bold text-[#1b1260]">
        All-Books
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {filterbooks.map(book => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
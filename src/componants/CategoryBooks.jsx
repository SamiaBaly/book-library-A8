import React from 'react';
import { getbooks } from './NewBookName';
import { Button, Card } from '@heroui/react';
import CategoryCard from './CategoryCard';
import Link from 'next/link';

const CategoryBooks =async () => {
  const books = await getbooks();
  
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl my-4 text-center font-bold text-[#1b1260]">
        Category Books
      </h2>
      <div className="grid grid-cols-12">
        {books.map(book => (
          <Link href={`?category=${book.title.toLowerCase()}`} key={book.id} book={book} activeId={null}>
            <CategoryCard></CategoryCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryBooks;
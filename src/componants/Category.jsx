import { Button } from '@heroui/react';
import React from 'react';
import NavLinks from './NavLinks';

const Category =async () => {
  const res = await fetch('https://book-library-a8.vercel.app/category.json');
  const categories= await res.json();
  // console.log(categories);
  return (
    <div className="mb-5 space-x-3">
      {categories.map(category => (
        <NavLinks href={`?category=${category.name.toLowerCase()}`} key={category.id}>
          <Button size="sm" variant="outline">
            {category.name}
          </Button>
        </NavLinks>
      ))}
    </div>
  );
};

export default Category;
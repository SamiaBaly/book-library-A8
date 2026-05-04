import { Button } from '@heroui/react';
import React from 'react';

import Link from 'next/link';

const Category =async ({activeId}) => {
  const res = await fetch('https://book-library-a8.vercel.app/category.json');
  const categories= await res.json();
  return (
    <div className="mb-5 space-x-3">
      <h2 className='text-2xl font-bold text-purple-950 bg-purple-100 mb-4 p-2 rounded-md'>Category</h2>
      <ul className=" space-y-4 flex flex-col mr-4">
        {categories.map(category => (
          <li
            key={category.id}
            className={`${activeId === category.name.toLowerCase() ? 'bg-purple-500 text-white' : "bg-slate-100"} p-2 rounded-md font-bold text-left`}
          >
            <Link href={`?category=${category.name.toLowerCase()}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
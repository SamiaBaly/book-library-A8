import { Button } from '@heroui/react';
import React from 'react';

import Link from 'next/link';

const Category =async ({activeId}) => {
  const res = await fetch('https://book-library-a8.vercel.app/category.json');
  const categories= await res.json();
  return (
    <div className="mb-5 space-x-3">
      <ul className="flex gap-3">
        {categories.map(category => (
          <li
            key={category.id}
            className={`${activeId === category.name.toLowerCase() ? 'bg-purple-500 text-white' : "bg-slate-100"} p-2 rounded-md font-bold text-center`}
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
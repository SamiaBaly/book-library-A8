import { Button } from '@heroui/react';
import React from 'react';
import Marquee from 'react-fast-marquee';
import data from "../../public/data.json"

export const getbooks=async()=>{
  return data;
}

const NewBookName =async () => {
  const books=await getbooks();
  return (
    <div className="container mx-auto flex bg-[#6c5ce71e] rounded-xl p-2">
      <Button className="bg-[#6c5ce7] rounded-xl">New Arrivals</Button>
      <Marquee pauseOnHover>
        {books.map(book => (
          <div key={book.id} className="mx-4 font-semibold text-[#1b1260]">
            {book.title} || Special Discount on Memberships...
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default NewBookName;
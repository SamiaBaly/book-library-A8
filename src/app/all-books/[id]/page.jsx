import { getbooks } from '@/componants/NewBookName';
import { Star } from '@gravity-ui/icons';
import { Button, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const BookDetailsPage = async({params}) => {
  const {id}=await params;
  const books = await getbooks();
  const book = books.find(b=>b.id=id);
  console.log(book);
  
  
  return (
    <div className="container mx-auto mt-10 ">
      <div className="flex justify-between items-center border rounded-2xl p-4">
        <div>
          <Image
            height={400}
            width={400}
            src={book?.image_url}
            alt={book?.title}
          ></Image>
        </div>
        <Separator orientation="vertical" className="mr-6"></Separator>
        <div>
          <h2 className="text-2xl font-bold">{book.title}</h2>
          <p className="text-gray-500 ">{book.author}</p>
          <Separator className="my-2"></Separator>
          <p>
            <span className="font-bold">Description:</span> {book?.description}
          </p>
          <Separator className="my-2"></Separator>
          <div className="flex justify-between items-center">
            <p>Category: {book?.category}</p>
            <p className="flex items-center gap-2 font-bold">
              <Star className="text-red-400"></Star>
              <Star className="text-red-400"></Star>
              <Star className="text-red-400"></Star>
              <Star className="text-red-400"></Star>
              {book?.rating}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p>
              <span className='font-bold'>Quantity:</span> {book?.available_quantity}
            </p>
            <p>
              <span className='font-bold'>Download:</span> {book?.download_count}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
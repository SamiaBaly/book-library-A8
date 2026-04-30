import { Button, Card, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { ArrowDownFromLine, HeartFill } from '@gravity-ui/icons';

const BookCard = ({book}) => {
  return (
    <div>
      <Card>
        <div className="relative fill aspect-square">
          <Image
            fill
            src={book.image_url}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={book.title}
            className="object-cover rounded-2xl"
          ></Image>
          <p className='bg-green-800 font-bold text-white rounded-xl px-4 py-1 top-3 right-4 absolute animate-caret-blink '>{book.category}</p>
        </div>
        <div>
          <h2 className="font-semibold text-xl text-[#1b1260]">{book.title}</h2>
          <p className="text-[#6c5ce7] font-semibold">{book.author}</p>
          
          <p className="text-[#636e72]">{book.description}</p>
          <Separator className="my-4"></Separator>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="flex justify-between items-center gap-2">
              <HeartFill></HeartFill>
              {book.rating}
            </p>
          </div>
          <Separator orientation="vertical" />
          <div>
            <p className="flex justify-between items-center gap-2">
              <ArrowDownFromLine></ArrowDownFromLine>
              {book.download_count}
            </p>
          </div>
        </div>
        <div>
          <Button variant='outline' className="w-full">View details</Button>
        </div>
      </Card>
    </div>
  );
};

export default BookCard;
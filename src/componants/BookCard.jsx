import { Card, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

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
        </div>
        <div>
          <h2 className="font-semibold text-xl text-[#1b1260]">{book.title}</h2>
          <p className="text-[#6c5ce7]">{book.author}</p>
          <Separator className="my-4"></Separator>
          <p className="text-[#636e72]">{book.description}</p>
          <Separator className="my-4"></Separator>
        </div>
      </Card>
    </div>
  );
};

export default BookCard;
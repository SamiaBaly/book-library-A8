import React from 'react';
import book2 from '../assets/book2.jpg'
import book3 from '../assets/book3.jpg'
import book4 from '../assets/book4.jpg'
import book5 from '../assets/book5.jpg'
import Image from 'next/image';


const BookPrice = () => {
  return (
    <div className="container mx-auto bg-[#ddd9f861] p-10 rounded-4xl my-10">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <div className="grid grid-cols-5  gap-4">
          <div className="bg-red-100 col-span-2 rounded-md flex items-center justify-center">
            <Image
              height={300}
              width={300}
              className="w-full  h-full object-cover rounded-xl"
              src={book4}
              alt="book"
            ></Image>
          </div>
          <div className="bg-yellow-100 col-span-3 rounded-md flex items-center justify-center">
            <Image
              height={300}
              width={300}
              className="w-full"
              src={book2}
              alt="book"
            ></Image>
          </div>
          <div className="bg-purple-100 col-span-3 rounded-md flex items-center justify-center">
            <Image
              height={300}
              width={300}
              className="w-full"
              src={book3}
              alt="book"
            ></Image>
          </div>
          <div className="bg-green-100 col-span-2 rounded-md flex items-center justify-center">
            <Image
              height={300}
              width={300}
              className="w-full object-cover rounded-xl h-full"
              src={book5}
              alt="book"
            ></Image>
          </div>
        </div>
        <div className="space-y-6 mt-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Great book, Happily <br /> Presented
          </h2>
          <p className="text-gray-400">
            The meaning of gong cha is chanese is to provide the best tea to{' '}
            <br />
            emperor from all possessions . <br /> It represents the highest
            quality and <br />
            self expectation. Establishing in 2006, Gong cha had been deeply{' '}
            <br />
            appreciated by its custoers because of good words of mouth and{' '}
            <br />
            unique customized service orginated from Taiwan.
          </p>
          <h2 className="text-2xl font-bold">Unique style</h2>
          <p className="text-gray-400">
            A Unique and different style from other teapots gives a luxurious{' '}
            <br />
            and minimalist impression
          </p>
          <h2 className="text-2xl font-bold">Premium Quality</h2>
          <p className="text-gray-400">
            Premium Quality that makes tea more elegant and more durable when{' '}
            <br />
            you use it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookPrice;
import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import book2 from '../assets/book2.jpg'
import book3 from '../assets/book3.jpg'
import book4 from '../assets/book4.jpg'

const NewsAndEvents = () => {
  return (
    <div className="container mx-auto my-10">
      <div>
        <h2 className="text-3xl my-4 text-center font-bold text-[#1b1260]">
          News and Events
        </h2>
        <p className="text-center">
          May is just a few days away, which means my favorite bookish event
          will kick off soon — Wyrd & Wonder. I look forward to it every year,{' '}
          <br />
          am always unprepared, but I end up having fun with it anyway. This
          year is no different. Again, Im unprepared, though Ive managed to get{' '}
          <br />
          this post done early at least.
        </p>
      </div>
      <div className='flex gap-4'>
        <Card>
          <div >

          <Image className='h-[300px]' src={book2} alt='book'></Image>
          </div>
          <div>
            <h2 className='text-2xl font-bold my-3'>Popular books</h2>
            <p>
              It’s a nonfiction book that gives a brief overview of various
              types of religions around the world. It was an eye-opening read
              for me back when I tried it. I recommend it if you want a simple
              introduction to the religions it covers.
            </p>
          </div>
        </Card>
        <Card>
          <Image className='h-[300px]' src={book3} alt='book'></Image>
          <div>
            <h2 className='text-2xl font-bold my-3'>Popular books</h2>
            <p>
              It’s a nonfiction book that gives a brief overview of various
              types of religions around the world. It was an eye-opening read
              for me back when I tried it. I recommend it if you want a simple
              introduction to the religions it covers.
            </p>
          </div>
        </Card>
        <Card>
          <Image className='h-[300px]' src={book4} alt='book'></Image>
          <div>
            <h2  className='text-2xl font-bold my-3'>Popular books</h2>
            <p>
              It’s a nonfiction book that gives a brief overview of various
              types of religions around the world. It was an eye-opening read
              for me back when I tried it. I recommend it if you want a simple
              introduction to the religions it covers.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NewsAndEvents;
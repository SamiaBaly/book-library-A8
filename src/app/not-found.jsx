import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center bg-[#dfe6e9]">
      <h2 className="font-bold text-5xl text-[#6c5ce7]">
        This page is not found
      </h2>
      <Button variant='secondary' className='my-5'><Link href={"/"}>Go to home page</Link></Button>
    </div>
  );
};

export default NotFoundPage;
'use client';

import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-hot-toast';

const BorrowButton = ({ book }) => {
  const router = useRouter();
  const session = authClient.useSession();
  const user = session.data?.user;

  const handleBorrow = () => {
    if (!user) {
      toast.error('Please login first!');
      router.push('/login');
      return;
    }

    
    if (book?.available_quantity <= 0) {
      toast.error('Book is out of stock!');
      return;
    }

    toast.success(`You borrowed "${book.title}"`);
  };

  return (
    <Button
      onClick={handleBorrow}
      variant="outline"
      className="w-full hover:bg-purple-300"
    >
      Borrow This Book
    </Button>
  );
};

export default BorrowButton;

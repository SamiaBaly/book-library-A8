
'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({href,children}) => {
  const pathName=usePathname();

  const isActive=href==pathName;
  return (
    <Link
      href={href}
      className={`${isActive ? 'bg-[#6c5ce7] text-white px-3 py-2 rounded-xl' : ''}`}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
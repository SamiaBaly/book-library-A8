'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo.png'
import { Avatar, Button } from '@heroui/react';
import NavLinks from './NavLinks';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
  const userData =authClient.useSession();
  const user = userData.data?.user;
  const handleSignOut=async()=>{
    await authClient.signOut();
  }
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-sm text-[#6c5ce7] font-bold"
            >
              <li>
                <NavLinks href={'/'}>Home</NavLinks>
              </li>
              <li>
                <NavLinks href={'/all-books'}>All Books</NavLinks>
              </li>
              <li>
                <NavLinks href={'/profile'}>My Profile</NavLinks>
              </li>
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <Link href={"/"}>
              {' '}
              <Image
                src={logo}
                alt="logo"
                loading="eager"
                width={30}
                height={30}
                className="object-cover h-auto w-auto"
              />
            </Link>
            <h3 className="font-black text-lg text-[#6c5ce7]">
              Digital Library
            </h3>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-sm text-[#6c5ce7] font-bold">
            <li>
              <NavLinks href={'/'}>Home</NavLinks>
            </li>
            <li>
              <NavLinks href={'/all-books'}>All Books</NavLinks>
            </li>
            <li>
              <NavLinks href={'/profile'}>My Profile</NavLinks>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 navbar-end">
          {!user && (
            <div>
              <Button size="sm" variant="outline" className={'mr-2'}>
                <Link href={'/signup'} className="">
                  Sign Up
                </Link>
              </Button>
              <Button size="sm" variant="outline">
                <Link href={'/signin'}>Sign In</Link>
              </Button>
            </div>
          )}

          {user && (
            <div className="flex items-center gap-2">
              <Avatar sizes="sm">
                <Avatar.Image
                  alt="User"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSignOut} size="sm" variant="outline">
                SignOut
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

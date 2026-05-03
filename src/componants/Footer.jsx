import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import logo from "../assets/logo.png"
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 mt-10">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <Link href={"/"}>
            <Image height={50} width={50} alt="logo" src={logo}></Image>
          </Link>
          <h2 className="text-xl font-bold mb-2">MyLibrary</h2>
          <p className="text-sm text-gray-400">
            Explore, read, and manage your favorite books digitally.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Categories</li>
            <li>About</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400 text-sm">Email: support@example.com</p>
          <p className="text-gray-400 text-sm">Phone: +880-1234-567890</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">
            <FaFacebook className="cursor-pointer hover:text-blue-500" />
            <FaTwitter className="cursor-pointer hover:text-sky-400" />
            <FaLinkedin className="cursor-pointer hover:text-blue-400" />
            <FaGithub className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        © 2026 MyLibrary. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

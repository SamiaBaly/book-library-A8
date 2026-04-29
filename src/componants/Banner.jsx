
import Link from "next/link";
import bannerImg from "../assets/banner_img.png"
import { Button, InputGroup } from "@heroui/react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="container mx-auto my-4">
      <div className="bg-[#a29bfe42] flex justify-between items-center px-5 rounded-2xl">
        <div className="flex-1 px-5">
          <p className="badge bg-[#a29bfe42] px-4 mb-5">Welcome to Digital Library</p>
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold mb-4 max-w-2xl">
            Find Your <span className="text-[#6c5ce7]"> Next Read</span>
          </h1>
          <p className="text-xl text-gray-500 mb-6">
            Discover amazing books today
          </p>

          <div className="flex gap-4">
            <Link href="#">
              <button className="bg-[#6c5ce7] text-white px-6 py-2 rounded cursor-pointer">
                Browse Now
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <Image
            height={400}
            width={400}
            className="w-full"
            src={bannerImg}
            alt="banner-img"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
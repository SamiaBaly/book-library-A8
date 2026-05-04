'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';

const BookSlider = ({ books }) => {
  return (
    <div className="my-12 px-2">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={25}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {books?.map(book => (
          <SwiperSlide key={book.id}>
            <div className="group bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl p-4 shadow-md hover:shadow-2xl transition-all duration-300">
              
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={book.image_url}
                  width={400}
                  height={400}
                  alt={book.title}
                  className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              
              <div className="mt-4 text-center space-y-1">
                <h3 className="font-bold text-lg text-[#1b1260] line-clamp-1">
                  {book.title}
                </h3>

                <p className="text-sm text-gray-500">{book.author}</p>

                <div className="flex justify-center items-center gap-2 mt-2">
                  <span className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">
                    {book.category}
                  </span>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BookSlider;

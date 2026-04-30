
import React from 'react';


const CategoryCard = ({book}) => {
  return (
    <div
      className={`border px-2 py-4 rounded-xl mx-1 text-center cursor-pointer`}
    >
      <div>
        <h2 className="font-bold text-xl text-[#6c5ce7]">{book.category}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
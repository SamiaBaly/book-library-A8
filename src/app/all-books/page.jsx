import BookCard from '@/componants/BookCard';
import Category from '@/componants/Category';
import { getbooks } from '@/componants/NewBookName';

const AllBooks =async ({searchParams}) => {

  const {category} = await searchParams;
  console.log(category);
  const books=await getbooks();
  const filteredBooks=category? books.filter(book=>book.category.toLowerCase()===category.toLowerCase()): books;
  
 
  
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl my-4 text-center font-bold text-[#1b1260]">
        All-Books
      </h2>
      <Category></Category>
      <div className="grid grid-cols-4 gap-5">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
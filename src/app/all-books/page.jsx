import BookCard from '@/componants/BookCard';
import Category from '@/componants/Category';
import { getbooks } from '@/componants/NewBookName';
import NotFoundPage from '../not-found';

const AllBooks =async ({searchParams}) => {

  const {category, search} = await searchParams;
  

  const books = await getbooks();
  let filteredBooks=category? books.filter(book=>book.category.toLowerCase()===category.toLowerCase()): books;
  
 if (search) {
   filteredBooks = filteredBooks.filter(book =>
     (book.title || '').toLowerCase().includes(search.toLowerCase()),
   );
 }
  
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl my-4 text-center font-bold text-[#1b1260]">
        All-Books
      </h2>
      <form method="GET" className="mb-5 flex justify-center">
        {category && <input type="hidden" name="category" value={category} />}

        <input
          type="text"
          name="search"
          defaultValue={search || ''}
          placeholder="Search books by title..."
          className="w-full max-w-xl p-3 border rounded-l-xl outline-none"
        />

        <button
          type="submit"
          className="bg-[#6c5ce7] text-white px-6 rounded-r-xl"
        >
          Search
        </button>
      </form>
      <div className='md:grid md:grid-cols-8'>
        <Category className={"col-span-2"} activeId={category}></Category>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 col-span-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map(book => (
              <BookCard key={book.id} book={book}></BookCard>
            ))
          ) : (
            <NotFoundPage></NotFoundPage>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
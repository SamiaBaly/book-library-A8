import Banner from "@/componants/Banner";
import BookPrice from "@/componants/BookPrice";
import CategoryBooks from "@/componants/CategoryBooks";
import FeaturedBooks from "@/componants/FeaturedBooks";
import NewBookName from "@/componants/NewBookName";
import NewsAndEvents from "@/componants/NewsAndEvents";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <NewBookName></NewBookName>
      <FeaturedBooks></FeaturedBooks>
      <BookPrice></BookPrice>
      <NewsAndEvents></NewsAndEvents>
    
    </div>
  );
}

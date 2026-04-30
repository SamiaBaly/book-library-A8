import Banner from "@/componants/Banner";
import CategoryBooks from "@/componants/CategoryBooks";
import FeaturedBooks from "@/componants/FeaturedBooks";
import NewBookName from "@/componants/NewBookName";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <NewBookName></NewBookName>
      <CategoryBooks></CategoryBooks>
      <FeaturedBooks></FeaturedBooks>
    
    </div>
  );
}

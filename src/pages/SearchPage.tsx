import BodyLayout from "@components/ui/BodyLayout";
import CategoryCard from "@components/search/CategoryCard";
import SearchBar from "@components/search/SearchBar";
import ScrollBox from "@components/ui/ScrollBody";
import TitleBox from "@components/ui/TitleBox";

function SearchPage() {
  return (
    <BodyLayout>
      <div>
        <SearchBar />
      </div>

      <ScrollBox>
        <TitleBox title="모두 둘러보기" />
        <CategoryCard />
      </ScrollBox>
    </BodyLayout>
  );
}

export default SearchPage;

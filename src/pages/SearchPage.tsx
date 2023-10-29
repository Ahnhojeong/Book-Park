import BodyLayout from "@components/ui/BodyLayout";
import CategoryCard from "@components/search/CategoryCard";
import SearchBar from "@components/search/SearchBar";
import ScrollBox from "@components/ui/ScrollBody";
import TitleBox from "@components/ui/TitleBox";
import TrendBookList from "@components/search/TrendBookList";

function SearchPage() {
  return (
    <BodyLayout>
      <div>
        <SearchBar />
      </div>

      <ScrollBox>
        <TitleBox title="실시간 인기 급상승 도서" />

        <TrendBookList />
      </ScrollBox>
    </BodyLayout>
  );
}

export default SearchPage;

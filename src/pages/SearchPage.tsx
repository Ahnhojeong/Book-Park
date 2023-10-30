import BodyLayout from "@components/ui/BodyLayout";
import SearchBar from "@components/search/SearchBar";
import ScrollBox from "@components/ui/ScrollBody";
import SearchBody from "@components/search/SearchBody";

function SearchPage() {
  return (
    <BodyLayout>
      <div>
        <SearchBar />
      </div>

      <ScrollBox>
        <SearchBody />
      </ScrollBox>
    </BodyLayout>
  );
}

export default SearchPage;

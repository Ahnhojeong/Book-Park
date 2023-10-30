import TitleBox from "@components/ui/TitleBox";
import TrendBookList from "@components/search/TrendBookList";
import { useSearchBook } from "@hooks/useSearchBook";
import useSearchKeywordStore from "@store/search";
import SearchResult from "@components/search/SearchResult";

function SearchBody() {
  const { searchKeyword, searchResults } = useSearchKeywordStore();

  const onSuccess = () => {
    console.log("데이터 가져오기 후 사이드 이펙트 수행");
  };
  const onError = () => {
    console.log("오류 발생 후 사이드 이펙트 수행");
  };

  const { isLoading, isError } = useSearchBook(
    onSuccess,
    onError,
    searchKeyword
  );

  if (searchKeyword !== "" && searchResults.length === 0)
    return <>데이터가 없습니다.</>;
  if (isLoading) return <>Loading...</>;
  if (isError) return <>ERROR</>;

  return (
    <>
      {searchKeyword === "" ? (
        <>
          <TitleBox title="실시간 인기 급상승 도서" />
          <TrendBookList />
        </>
      ) : (
        <SearchResult resultData={searchResults} />
      )}
    </>
  );
}

export default SearchBody;

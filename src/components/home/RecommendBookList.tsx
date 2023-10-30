import HorizontalList from "@components/ui/HorizontalList";
import ImageCard from "@components/ui/ImageCard";
import TitleBox from "@components/ui/TitleBox";
import { useRecommendBooks } from "@hooks/useRecommendBooks";

function RecommendBookList() {
  const onSuccess = () => {
    console.log("데이터 가져오기 후 사이드 이펙트 수행");
  };
  const onError = () => {
    console.log("오류 발생 후 사이드 이펙트 수행");
  };

  const {
    isLoading,
    data: recommendBooks,
    isError,
  } = useRecommendBooks(onSuccess, onError);

  if (isLoading) return <>Loading...</>;
  if (isError) return <>ERROR</>;

  console.log("recommendBooks ->", recommendBooks);

  return (
    <>
      <TitleBox
        title="추천 도서"
        onClick={() => {
          console.log("모두보기");
        }}
      />

      <HorizontalList>
        {recommendBooks?.item.map((item: any, index: number) => {
          return (
            <ImageCard
              key={item.url}
              link={`${item.url}`}
              isNewTab={true}
              imgSrc={item.referenceIdentifier}
              title={item.title}
              contents={item.rights}
            />
          );
        })}
      </HorizontalList>
    </>
  );
}

export default RecommendBookList;

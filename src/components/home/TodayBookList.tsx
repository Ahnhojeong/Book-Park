import HorizontalList from "@components/ui/HorizontalList";
import ImageCard from "@components/ui/ImageCard";
import TitleBox from "@components/ui/TitleBox";
import { useTodayBestBooks } from "@hooks/useTodayBestBooks";
import { IBookItem } from "types/book";

function TodayBookList() {
  const onSuccess = () => {
    console.log("데이터 가져오기 후 사이드 이펙트 수행");
  };
  const onError = () => {
    console.log("오류 발생 후 사이드 이펙트 수행");
  };

  const {
    isLoading,
    data: todayBooks,
    isError,
  } = useTodayBestBooks(onSuccess, onError);

  if (isLoading) return <>Loading...</>;
  if (isError) return <>ERROR</>;

  console.log("todayBooks ->", todayBooks);

  return (
    <>
      <TitleBox
        title="오늘의 인기 도서"
        onClick={() => {
          console.log("모두보기");
        }}
      />

      <HorizontalList>
        {todayBooks?.map((item: IBookItem, index: number) => {
          const { doc } = item;
          return (
            <ImageCard
              key={index}
              link={`/book/${doc.isbn13}`}
              imgSrc={doc.bookImageURL}
              title={doc.bookname}
              contents={doc.authors}
            />
          );
        })}
      </HorizontalList>
    </>
  );
}

export default TodayBookList;

import HorizontalList from "@components/ui/HorizontalList";
import ImageCard from "@components/ui/ImageCard";
import TitleBox from "@components/ui/TitleBox";
import { useMonthBooks } from "@hooks/useMonthBooks";

function MonthBookList() {
  const onSuccess = () => {
    console.log("데이터 가져오기 후 사이드 이펙트 수행");
  };
  const onError = () => {
    console.log("오류 발생 후 사이드 이펙트 수행");
  };

  const {
    isLoading,
    data: monthBooks,
    isError,
  } = useMonthBooks(onSuccess, onError);

  if (isLoading) return <>Loading...</>;
  if (isError) return <>ERROR</>;

  console.log("monthBooks ->", monthBooks);

  return (
    <>
      <TitleBox
        title="이 달의 도서"
        onClick={() => {
          console.log("모두보기");
        }}
      />

      <HorizontalList>
        {monthBooks?.map((item: any, index: number) => {
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

export default MonthBookList;

import { useHotTrendBooks } from "@hooks/useHotTrendBooxs";
import { MediaQuery } from "@style/media";
import { styled } from "styled-components";
import { IRankBookItem } from "types/book";

interface IListItem {
  rank: number;
}

const Span = styled.span`
  font-size: 12px;
  color: gray;
`;

const ContainerBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.3rem;

  ${MediaQuery.mobile`
    flex-direction: column;
    justify-content: start;
  `}
`;

const ListContainer = styled.ul`
  flex: 1;
  ${MediaQuery.mobile`
    width: 100%;
  `}
`;

const ListItem = styled.li<IListItem>`
  padding: 15px 0;
  font-size: 15px;
  &::before {
    content: "${(props) => props.rank}";
    margin-right: 10px;
    font-size: 20px;
    font-weight: 800;
  }
`;

function TrendBookList() {
  const onSuccess = () => {
    console.log("데이터 가져오기 후 사이드 이펙트 수행");
  };
  const onError = () => {
    console.log("오류 발생 후 사이드 이펙트 수행");
  };

  const {
    isLoading,
    data: trendBooks,
    isError,
  } = useHotTrendBooks(onSuccess, onError);

  if (isLoading) return <>Loading...</>;
  if (isError) return <>ERROR</>;

  console.log("trendBooks ->", trendBooks);

  return (
    <div>
      <Span>오늘 기준 최근 7일간 대출 순위가 급상승한 도서 목록입니다.</Span>
      <ContainerBox>
        <ListContainer>
          {trendBooks?.map((book: { doc: IRankBookItem }, index: number) => {
            return (
              <ListItem key={book.doc.isbn13} rank={index + 1}>
                {book.doc.bookname}
              </ListItem>
            );
          })}
        </ListContainer>
      </ContainerBox>
    </div>
  );
}

export default TrendBookList;

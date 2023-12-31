import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconActive } from "@heroicons/react/24/solid";
import { useBookDetail } from "@hooks/useBookDetail";
import useLikeBookStore from "@store/likebook";
import { MediaQuery } from "@style/media";
import { styled } from "styled-components";
import { IBookDetail } from "types/book";

const DetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  height: 100%;
  ${MediaQuery.tablet`
    flex-direction: column;
  `}
`;

const BookThumbnailBox = styled.div`
  flex: 5;
  padding: 20px;
  height: 100%;
  display: flex;
  justify-content: center;

  & > div {
    text-align: center;
    width: 300px;
    height: 400px;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    ${MediaQuery.tablet`
      width: auto;
      height: auto;
    `}
  }

  ${MediaQuery.tablet`
    height: 60%;
  `}
`;

const BookDetailBox = styled.div`
  flex: 5;
  padding: 20px;
  overflow: hidden;
  ${MediaQuery.tablet`
    overflow-y: auto;
    flex: 8;
  `}
`;

const BookDetailInfo = styled.div`
  box-sizing: border-box;
  &:nth-of-type(1) {
    height: 150px;
  }
  &:nth-of-type(2) {
    height: calc(100% - 150px);
    overflow-y: auto;
    padding-right: 10px;
    margin-top: 20px;
  }
  & > span {
    font-size: 13px;
    font-weight: 600;
    color: #cdcdcd;
  }

  & > h2 {
    font-size: 25px;
    font-weight: 600;
    margin: 5px 0;
  }

  & > h4 {
    font-size: 14px;
    font-weight: 600;
    color: #9e9e9e;
    letter-spacing: 2px;
  }

  & > div {
    margin-top: 10px;
    p {
      font-size: 14px;
    }
  }

  ${MediaQuery.tablet`
    &:nth-of-type(2) {
      overflow: initial;
    }
  `}
`;

const LikeButton = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    & > svg {
      margin-right: 5px;
    }
  }
`;

type BookDetailType = {
  bookId?: number;
};

function BookDetail({ bookId = 0 }: BookDetailType) {
  const { likeBookList, setLikeBookList, resetLikeBookList } =
    useLikeBookStore();

  const onClickLike = (data: IBookDetail) => {
    console.log("onClickLike data -> ", data);

    if (likeBookList[Number(data.isbn13)]) {
      console.log("좋아요를 이미 눌렀어요");
      const newLikeBookList = { ...likeBookList };
      delete newLikeBookList[Number(data.isbn13)];

      resetLikeBookList(Number(data.isbn13), newLikeBookList);
    } else {
      console.log("좋아요");
      setLikeBookList(Number(data.isbn13), data);
    }
  };

  const onSuccess = () => {
    console.log("데이터 가져오기 후 사이드 이펙트 수행");
  };
  const onError = () => {
    console.log("오류 발생 후 사이드 이펙트 수행");
  };

  const {
    isLoading,
    data: bookDetail,
    isError,
  } = useBookDetail(onSuccess, onError, bookId);

  if (isLoading) return <>Loading...</>;
  if (isError) return <>ERROR</>;

  console.log("bookDetail ->", bookDetail);

  return bookDetail?.map((item: { book: IBookDetail }) => {
    const { book } = item;
    return (
      <DetailContainer key={book.no}>
        <BookThumbnailBox>
          <div>
            <img src={book.bookImageURL} alt={book.bookname} />
          </div>
        </BookThumbnailBox>
        <BookDetailBox>
          <BookDetailInfo>
            <span>{book.class_nm}</span>
            <h2>{book.bookname}</h2>
            <h4>{`${book.authors} | ${book.publisher}`}</h4>

            <LikeButton>
              <button
                type="button"
                onClick={() => {
                  onClickLike(book);
                }}
              >
                {likeBookList[Number(book.isbn13)] ? (
                  <HeartIconActive width={25} />
                ) : (
                  <HeartIcon width={25} />
                )}
                좋아요
              </button>
            </LikeButton>
          </BookDetailInfo>

          <BookDetailInfo>
            <div>
              <p>{book.description}</p>
            </div>
          </BookDetailInfo>
        </BookDetailBox>
      </DetailContainer>
    );
  });
}

export default BookDetail;

import BackButton from "@components/ui/BackButton";
import BodyLayout from "@components/ui/BodyLayout";
import { MediaQuery } from "@style/media";
import { styled } from "styled-components";

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
  & > div {
    height: 100%;
    background: #ddd;
  }
`;

const BookDetailBox = styled.div`
  flex: 5;
  padding: 20px;
  overflow: hidden;
  ${MediaQuery.tablet`
    overflow-y: auto;
  `}
`;

const BookDetailInfo = styled.div`
  box-sizing: border-box;
  &:nth-of-type(1) {
    height: 90px;
  }
  &:nth-of-type(2) {
    height: calc(100% - 90px);
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
    font-size: 2rem;
    font-weight: 600;
  }

  & > h4 {
    font-size: 14px;
    font-weight: 600;
    color: #9e9e9e;
    letter-spacing: 2px;
  }

  & > div {
    padding-top: 20px;
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

function BookDetailPage() {
  return (
    <BodyLayout>
      <BackButton />
      <DetailContainer>
        <BookThumbnailBox>
          <div>Book Thumbnail</div>
        </BookThumbnailBox>
        <BookDetailBox>
          <BookDetailInfo>
            <span>역사</span>
            <h2>작은 땅의 야수들</h2>
            <h4>저자 | 출판사 | 출판연일</h4>
          </BookDetailInfo>
          <BookDetailInfo>
            <div>
              <p>
                이 책은 이런 책입니다.. 이 책은 이런 책입니다.. 이 책은 이런
                책입니다.. 이 책은 이런 책입니다.. 이 책은 이런 책입니다.. 이
                책은 이런 책입니다..이 책은 이런 책입니다.. 이 책은 이런
                책입니다.. 이 책은 이런 책입니다.. 이 책은 이런 책입니다.. 이
                책은 이런 책입니다.. 이 책은 이런 책입니다.. 이 책은 이런
                책입니다.. 이 책은 이런 책입니다.. 이 책은 이런 책입니다..이
                책은 이런 책입니다.. 이 책은 이런 책입니다.. 이 책은 이런
                책입니다.. 이 책은 이런 책입니다.. 이 책은 이런 책입니다.. 이
                책은 이런 책입니다.. 이 책은 이런 책입니다.. 이 책은 이런
                책입니다.. 이 책은 이런 책입니다..이 책은 이런 책입니다.. 이
                책은 이런 책입니다.. 이 책은 이런 책입니다.. 이 책은 이런
                책입니다.. 이 책은 이런 책입니다.. 이 책은 이런 책입니다.. 이
                책은 이런 책입니다.. 이 책은 이런 책입니다.. 이 책은 이런
                책입니다..이 책은 이런 책입니다.. 이 책은 이런 책입니다.. 이
                책은 이런 책입니다.. 이 책은 이런 책입니다.. 이 책은 이런
                책입니다.. 이 책은 이런 책입니다.. 이 책은 이런 책입니다.. 이
                책은 이런 책입니다.. 이 책은 이런 책입니다..이 책은 이런
                책입니다.. 이 책은 이런 책입니다.. 이 책은 이런 책입니다.. 이
                책은 이런 책입니다.. 이 책은 이런 책입니다.. 이 책은 이런
                책입니다.. 이 책은 이런 책입니다.. 이 책은 이런 책입니다.. 이
                책은 이런 책입니다..이 책은 이런 책입니다.. 이 책은 이런
                책입니다.. 이 책은 이런 책입니다.. 이 책은 이런 책입니다.. 이
                책은 이런 책입니다.. 이 책은 이런 책입니다.. 이 책은 이런
                책입니다.. 이 책은 이런 책입니다.. 이 책은 이런 책입니다..이
                책은 이런 책입니다.. 이 책은 이런 책입니다.. 이 책은 이런
                책입니다.. 이 책은 이런 책입니다.. 이 책은 이런 책입니다.. 이
                책은 이런 책입니다.. 이 책은 이런 책입니다.. 이 책은 이런
                책입니다.. 이 책은 이런 책입니다..이 책은 이런 책입니다.. 이
                책은 이런 책입니다.. 이 책은 이런 책입니다.. 이 책은 이런
                책입니다.. 이 책은 이런 책입니다.. 이 책은 이런 책입니다.. 이
                책은 이런 책입니다.. 이 책은 이런 책입니다.. 이 책은 이런
                책입니다..이 책은 이런 책입니다.. 이 책은 이런 책입니다.. 이
                책은 이런 책입니다.. 이 책은 이런 책입니다.. 이 책은 이런
                책입니다.. 이 책은 이런 책입니다.. 이 책은 이런 책입니다.. 이
                책은 이런 책입니다.. 이 책은 이런 책입니다..이 책은 이런
                책입니다.. 이 책은 이런 책입니다.. 이 책은 이런 책입니다..
              </p>
            </div>
          </BookDetailInfo>
        </BookDetailBox>
      </DetailContainer>
    </BodyLayout>
  );
}

export default BookDetailPage;

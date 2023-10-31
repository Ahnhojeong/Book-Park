import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconActive } from "@heroicons/react/24/solid";
import useLikeBookStore from "@store/likebook";
import { MediaQuery } from "@style/media";
import { decodeEntity } from "@utils/Transform";
import { useEffect } from "react";
import { styled } from "styled-components";

const Li = styled.li`
  border-bottom: 1px solid #222222;
  padding-bottom: 20px;
  margin-bottom: 20px;
  &:last-child {
    border-bottom: none;
  }
`;

const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${MediaQuery.tablet`
    flex-direction: column;
  `}
`;

const ThumbImgBox = styled.div`
  padding: 10px;
  & > div {
    width: 130px;
    height: 100%;
    box-shadow: 3px 2px 9px 1px rgba(0, 0, 0, 0.2);
    img {
      width: 100%;
      object-fit: contain;
      height: 100%;
    }
  }

  ${MediaQuery.tablet`
    display: flex;
    justify-content: center;
    align-items:center;
  `}
`;

const BloqueBox = styled.div`
  flex: 3;
  padding: 15px;
  height: 100%;

  & > span {
    font-size: 13px;
    font-weight: 600;
    color: #cdcdcd;
  }

  & > h4 {
    font-size: 14px;
    font-weight: 600;
    color: #9e9e9e;
    letter-spacing: 2px;
  }

  & > p {
    font-size: 14px;
    margin-top: 15px;
  }

  ${MediaQuery.tablet`
    padding-top: 15px;
  `}
`;

const BookTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 5px 0;
  }
`;

const LikeButton = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ${MediaQuery.tablet`
    justify-content: end;
  `}
`;

function LibraryList() {
  const { likeBookList, resetLikeBookList } = useLikeBookStore();

  const onResetLike = (data: any) => {
    if (likeBookList[data]) {
      console.log("좋아요를 이미 눌렀어요");
      const newLikeBookList = { ...likeBookList };
      delete newLikeBookList[data];

      resetLikeBookList(data, newLikeBookList);
    }
  };
  return (
    <div>
      <ul>
        {Object.keys(likeBookList).length > 0 ? (
          <>
            {Object.keys(likeBookList).map((book: any) => {
              return (
                <Li key={book}>
                  <ListItemContainer>
                    <ThumbImgBox>
                      <div>
                        <img
                          src={likeBookList[book].bookImageURL}
                          alt={likeBookList[book].bookname}
                        />
                      </div>
                    </ThumbImgBox>
                    <BloqueBox>
                      <span>{likeBookList[book].class_nm}</span>
                      <BookTitleBox>
                        <h2>{likeBookList[book].bookname}</h2>
                        <LikeButton>
                          <button
                            type="button"
                            onClick={() => {
                              onResetLike(book);
                            }}
                          >
                            {likeBookList[book] ? (
                              <HeartIconActive width={25} />
                            ) : (
                              <HeartIcon width={25} />
                            )}
                          </button>
                        </LikeButton>
                      </BookTitleBox>

                      <h4>{`${likeBookList[book].authors} | ${likeBookList[book].publisher}`}</h4>

                      <p>{decodeEntity(likeBookList[book].description)}</p>
                    </BloqueBox>
                  </ListItemContainer>
                </Li>
              );
            })}
          </>
        ) : (
          <div>보관함이 비어있습니다.</div>
        )}
      </ul>
    </div>
  );
}

export default LibraryList;

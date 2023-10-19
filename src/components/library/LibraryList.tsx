import { MediaQuery } from "@style/media";
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
  & > div {
    background-color: #dddddd;
    width: 130px;
    height: 180px;
  }

  ${MediaQuery.tablet`
    display: flex;
    justify-content: center;
    align-items:center;
  `}
`;

const BloqueBox = styled.div`
  flex: 3;
  padding: 0 15px 15px 15px;
  height: 100%;
  ${MediaQuery.tablet`
    padding-top: 15px;
  `}
`;

const DeleteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #dddddd;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;

  ${MediaQuery.tablet`
    justify-content: end;
  `}
`;

function LibraryList() {
  return (
    <div>
      <ul>
        <Li>
          <ListItemContainer>
            <ThumbImgBox>
              <div>img</div>
            </ThumbImgBox>
            <BloqueBox>
              <h4>title</h4>
              <h5>category name</h5>
              <h6>저자 | 출판사 | 출간일</h6>

              <p>책 소개</p>
            </BloqueBox>
            <DeleteBox>Remove</DeleteBox>
          </ListItemContainer>
        </Li>
        <Li>
          <ListItemContainer>
            <ThumbImgBox>
              <div>img</div>
            </ThumbImgBox>
            <BloqueBox>
              <h4>title</h4>
              <h5>category name</h5>
              <h6>저자 | 출판사 | 출간일</h6>

              <p>책 소개</p>
            </BloqueBox>
            <DeleteBox>Remove</DeleteBox>
          </ListItemContainer>
        </Li>
        <Li>
          <ListItemContainer>
            <ThumbImgBox>
              <div>img</div>
            </ThumbImgBox>
            <BloqueBox>
              <h4>title</h4>
              <h5>category name</h5>
              <h6>저자 | 출판사 | 출간일</h6>

              <p>책 소개</p>
            </BloqueBox>
            <DeleteBox>Remove</DeleteBox>
          </ListItemContainer>
        </Li>
        <Li>
          <ListItemContainer>
            <ThumbImgBox>
              <div>img</div>
            </ThumbImgBox>
            <BloqueBox>
              <h4>title</h4>
              <h5>category name</h5>
              <h6>저자 | 출판사 | 출간일</h6>

              <p>책 소개</p>
            </BloqueBox>
            <DeleteBox>Remove</DeleteBox>
          </ListItemContainer>
        </Li>
        <Li>
          <ListItemContainer>
            <ThumbImgBox>
              <div>img</div>
            </ThumbImgBox>
            <BloqueBox>
              <h4>title</h4>
              <h5>category name</h5>
              <h6>저자 | 출판사 | 출간일</h6>

              <p>책 소개</p>
            </BloqueBox>
            <DeleteBox>Remove</DeleteBox>
          </ListItemContainer>
        </Li>
      </ul>
    </div>
  );
}

export default LibraryList;

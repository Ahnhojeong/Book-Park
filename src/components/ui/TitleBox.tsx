import { styled } from "styled-components";

type TitleBoxType = {
  title: string;
  onClick?: () => void;
};

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  & > h3 {
    font-weight: 600;
    font-size: 24px;
    color: #2a3339;
    display: flex;
    align-items: center;
  }
  & > span {
    font-size: 13px;
    color: #a2a19c;
    font-weight: 600;
  }
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #2a3339;
  display: flex;
  align-items: center;
`;

function TitleBox(props: TitleBoxType) {
  return (
    <Div>
      <Title>{props.title}</Title>
      {props.onClick && <span>모두 보기</span>}
    </Div>
  );
}

export default TitleBox;

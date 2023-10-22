import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  button {
    font-size: 15px;
    cursor: pointer;
  }
`;

const BackButton = () => {
  const navigate = useNavigate(); //변수 할당시켜서 사용
  const onClickBtn = () => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };
  return (
    <BackButtonContainer onClick={onClickBtn}>
      <ChevronLeftIcon width={25} />
      <button type="button">뒤로가기</button>
    </BackButtonContainer>
  );
};

export default BackButton;

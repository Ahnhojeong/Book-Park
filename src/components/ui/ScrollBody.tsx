import { styled } from "styled-components";

type ScrollBoxType = {
  children: React.ReactNode;
};

const Scroll = styled.div`
  overflow-y: auto;
  height: calc(100% - 2rem);
  padding-right: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 3px; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #eeeeee; /* 스크롤바의 색상 */

    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: none; /*스크롤바 뒷 배경 색상*/
  }
`;

function ScrollBox(props: ScrollBoxType) {
  return <Scroll>{props.children}</Scroll>;
}

export default ScrollBox;

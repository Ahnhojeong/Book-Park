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
`;

function ScrollBox(props: ScrollBoxType) {
  return <Scroll>{props.children}</Scroll>;
}

export default ScrollBox;

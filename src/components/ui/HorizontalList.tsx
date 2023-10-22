import { styled } from "styled-components";
import { MediaQuery } from "@style/media";

type HorizontalListType = {
  children: React.ReactNode;
};

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, max-content));
  gap: 20px;
  justify-content: space-between;
  height: 230px;
  overflow: hidden;

  ${MediaQuery.mobile`
    grid-template-columns: repeat(auto-fit, minmax(150px, max-content));
  `}
`;

function HorizontalList(props: HorizontalListType) {
  return <ListContainer>{props.children}</ListContainer>;
}

export default HorizontalList;

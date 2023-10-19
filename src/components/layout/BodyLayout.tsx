import { styled } from "styled-components";

type BodyLayoutType = {
  children: React.ReactNode;
};

const Container = styled.div`
  flex: 9;
  padding: 1rem;
  margin: 1rem;
  overflow: hidden;
`;

function BodyLayout(props: BodyLayoutType) {
  return <Container>{props.children}</Container>;
}

export default BodyLayout;

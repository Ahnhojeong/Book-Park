import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { MediaQuery } from "@style/media";

import Navigation from "./Navigation";

const Container = styled.div`
  display: flex;
  height: 100%;

  ${MediaQuery.tablet`
    flex-direction: column-reverse;
  `}
`;

function Header() {
  return (
    <Container>
      <Navigation />
      <Outlet />
    </Container>
  );
}

export default Header;

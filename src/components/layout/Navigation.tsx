import { styled } from "styled-components";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  QueueListIcon,
} from "@heroicons/react/24/solid";
import { MediaQuery } from "@style/media";

const Head = styled.nav`
  flex: 0.5;
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  height: fit-content;
  box-sizing: border-box;

  ${MediaQuery.tablet`
    display: flex;
    align-items: center;
    height: 80px;
    
  `}
`;

const MenuBox = styled.div`
  height: 50px;
  width: 100%;
  line-height: 50px;
  & > a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  ${MediaQuery.tablet`
    &:not(:last-child) {
      margin-bottom: 0;
    }
  `}
`;

const MenuItem = styled.button`
  text-align: center;
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

function Navigation() {
  return (
    <Head>
      <MenuBox>
        <Link to={"/"}>
          <MenuItem>
            <HomeIcon width={25} />
          </MenuItem>
        </Link>
      </MenuBox>
      <MenuBox>
        <Link to={"/search"}>
          <MenuItem>
            <MagnifyingGlassIcon width={25} />
          </MenuItem>
        </Link>
      </MenuBox>
      <MenuBox>
        <Link to="/library">
          <MenuItem>
            <QueueListIcon width={25} />
          </MenuItem>
        </Link>
      </MenuBox>
    </Head>
  );
}

export default Navigation;

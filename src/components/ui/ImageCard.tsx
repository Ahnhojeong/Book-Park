import { Link } from "react-router-dom";
import { styled } from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  & > div {
    height: 100%;
    box-sizing: border-box;
  }
`;

const Thumbnail = styled.div`
  border-radius: 10px;
  background-color: #333333;
  width: 100%;
  height: 180px;
`;

type ImageCardType = {
  link?: string;
  imgSrc: string;
  title: string;
  contents: string;
};

function ImageCard({ link, imgSrc, title, contents }: ImageCardType) {
  return (
    <CardContainer>
      <Link to="/book/1">
        <div>
          <Thumbnail>thumbnail</Thumbnail>
          <div>
            <h5>title</h5>
            <p>contents......</p>
          </div>
        </div>
      </Link>
    </CardContainer>
  );
}

export default ImageCard;

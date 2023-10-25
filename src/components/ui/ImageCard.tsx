import { MediaQuery } from "@style/media";
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
    width: 100%;
    overflow: hidden;
    height: 180px;
    position: relative;
    & > img {
      object-fit: initial;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      
      ${MediaQuery.mobile`
        object-fit: contain;
      `}
    }
  }
`;

const ContentsBox = styled.div`
  margin: 10px 0;
  h5 {
    font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
    color: #132337;
  }
  p {
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: gray;
  }
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
          <Thumbnail>
            <img src={imgSrc} alt={title} />
          </Thumbnail>
          <ContentsBox>
            <h5>{title}</h5>
            <p>{contents}</p>
          </ContentsBox>
        </div>
      </Link>
    </CardContainer>
  );
}

export default ImageCard;

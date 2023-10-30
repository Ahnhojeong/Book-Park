import { useEffect } from "react";
import { MediaQuery } from "@style/media";
import { styled } from "styled-components";
import ImageCard from "@components/ui/ImageCard";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, max-content));
  gap: 50px;
  justify-content: space-between;
  ${MediaQuery.mobile`
  grid-template-columns: repeat(auto-fit, minmax(150px, max-content));
    gap: 20px;
  `}
`;

const ListItem = styled.div`
  // height: 200px;

  ${MediaQuery.mobile`
    // height: 150px;
  `}
`;

interface ISearchData {
  resultData: any;
}

function SearchResult({ resultData }: ISearchData) {
  useEffect(() => {
    console.log("SearchResult result --> ", resultData);
  }, [resultData]);

  return (
    <ListContainer>
      {resultData?.map((data: any) => {
        console.log("data", data);
        let { doc } = data;
        return (
          <ListItem key={doc.isbn13}>
            <ImageCard
              link={`/book/${doc.isbn13}`}
              imgSrc={doc.bookImageURL}
              title={doc.bookname}
              contents={doc.authors}
            />
          </ListItem>
        );
      })}
    </ListContainer>
  );
}

export default SearchResult;

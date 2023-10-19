import { MediaQuery } from "@style/media";
import { styled } from "styled-components";
import { BOOK_CATEGORY } from "./category";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, max-content));
  gap: 20px;
  justify-content: space-between;
  ${MediaQuery.mobile`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const CategoryItem = styled.div`
  height: 200px;
  background-color: #eeeeee;
  ${MediaQuery.mobile`
    height: 150px;
  `}
`;

function CategoryCard() {
  return (
    <ListContainer>
      {BOOK_CATEGORY.map((category) => {
        return <CategoryItem>{category.category_name}</CategoryItem>;
      })}
    </ListContainer>
  );
}

export default CategoryCard;

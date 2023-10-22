import HorizontalList from "@components/ui/HorizontalList";
import ImageCard from "@components/ui/ImageCard";
import TitleBox from "@components/ui/TitleBox";

function NewBooksList() {
  return (
    <>
      <TitleBox
        title="신간 도서"
        onClick={() => {
          console.log("모두보기");
        }}
      />
      <HorizontalList>
        <ImageCard
          link={"/book/1"}
          imgSrc="test"
          title={"title"}
          contents={"contents"}
        />
      </HorizontalList>
    </>
  );
}

export default NewBooksList;

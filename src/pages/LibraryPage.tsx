import BodyLayout from "@components/ui/BodyLayout";
import LibraryList from "@components/library/LibraryList";
import ScrollBox from "@components/ui/ScrollBody";
import TitleBox from "@components/ui/TitleBox";

function LibraryPage() {
  return (
    <BodyLayout>
      <TitleBox title="내 라이브러리" />

      <ScrollBox>
        <LibraryList />
      </ScrollBox>
    </BodyLayout>
  );
}

export default LibraryPage;

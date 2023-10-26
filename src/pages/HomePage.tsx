import BodyLayout from "@components/ui/BodyLayout";
import RecommendBookList from "@components/home/RecommendBookList";
import MonthBookList from "@components/home/MonthBookList";

function HomePage() {
  return (
    <BodyLayout>
      <div
        style={{
          height: "100%",
          overflowY: "auto",
          paddingRight: "10px",
        }}
      >
        <RecommendBookList />
        <MonthBookList />
      </div>
    </BodyLayout>
  );
}

export default HomePage;

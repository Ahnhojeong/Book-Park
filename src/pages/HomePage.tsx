import BodyLayout from "@components/ui/BodyLayout";
import RecommendBookList from "@components/home/RecommendBookList";
import MonthBookList from "@components/home/MonthBookList";
import TodayBookList from "@components/home/TodayBookList";

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
        <TodayBookList />
        <RecommendBookList />
        <MonthBookList />
      </div>
    </BodyLayout>
  );
}

export default HomePage;

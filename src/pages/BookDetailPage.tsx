import { useParams } from "react-router-dom";

import BookDetail from "@components/detail/BookDetail";
import BackButton from "@components/ui/BackButton";
import BodyLayout from "@components/ui/BodyLayout";

function BookDetailPage() {
  const { id } = useParams();

  return (
    <BodyLayout>
      <BackButton />
      <BookDetail bookId={id} />
    </BodyLayout>
  );
}

export default BookDetailPage;

import { Route, Routes } from "react-router-dom";
import HomePage from "@pages/HomePage";
import LibraryPage from "@pages/LibraryPage";

import HeaderLayout from "./HeaderLayout";
import SearchPage from "@pages/SearchPage";
import BookDetailPage from "@pages/BookDetailPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/book/:id" element={<BookDetailPage />} />
      </Route>
    </Routes>
  );
}

export default Router;

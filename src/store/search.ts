import { create } from "zustand";

interface ISearch {
  searchKeyword: string;
  searchResults: any;
  setSearchKeyword: (text: string) => void;
  setSearchResult: (result: any) => void;
}

const useSearchKeywordStore = create<ISearch>((set) => ({
  searchKeyword: "",
  setSearchKeyword: (text: string) => set({ searchKeyword: text }),
  searchResults: [],
  setSearchResult: (result: any) => set({ searchResults: result }),
}));

export default useSearchKeywordStore;

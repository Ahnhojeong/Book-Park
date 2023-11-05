import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IObj {
  [key: number]: any;
}

interface ILikeBook {
  likeBookList: IObj;
  setLikeBookList: (bookNo: number, bookData: any) => void;
  resetLikeBookList: (bookNo: number, bookData: any) => void;
}

const useLikeBookStore = create(
  persist<ILikeBook>(
    (set) => ({
      likeBookList: {},
      setLikeBookList: (bookNo: number, bookData: any) =>
        set((state) => ({
          likeBookList: {
            ...state.likeBookList,
            [bookNo]: bookData,
          },
        })),
      resetLikeBookList: (bookNo: number, bookData: any) => {
        set((state) => ({
          likeBookList: bookData,
        }));
      },
    }),
    {
      name: "likeBookList",
      // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useLikeBookStore;

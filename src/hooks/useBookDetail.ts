import { libraryPlazaApi2 } from "@api/instance";
import { setDataForm } from "@utils/Transform";
import { useQuery } from "react-query";

export const useBookDetail = (
  onSuccess: () => void,
  onError: () => void,
  bookId: number
) => {
  const fetchBookDetail = () => {
    const paramObj = {
      authKey: process.env.REACT_APP_LIBRARY_BIGDATA_API_KEY,
      isbn13: bookId,
      format: "json",
    };

    const inData = setDataForm(paramObj);
    return libraryPlazaApi2.get("/srchDtlList", { params: inData });
  };

  return useQuery("get-book-detail", fetchBookDetail, {
    onSuccess: onSuccess,
    onError: onError,
    refetchOnWindowFocus: false,
    select: (data) => {
      console.log("useBookDetail data --> ", data);
      return data?.data.response.detail;
    },
  });
};

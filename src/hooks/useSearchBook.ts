import { libraryPlazaApi } from "@api/instance";
import { setDataForm } from "@utils/Transform";
import { useQuery } from "react-query";

const fetchSearchBook = (keyword: string) => {
  console.log("keyword... ", keyword);
  const paramObj = {
    authKey: process.env.REACT_APP_LIBRARY_BIGDATA_API_KEY,
    keyword: keyword,
    format: "json",
    exactMatch: true,
  };

  const inData = setDataForm(paramObj);
  return libraryPlazaApi.get("/srchBooks", { params: inData });
};

export const useSearchBook = (
  onSuccess: () => void,
  onError: () => void,
  keyword: string
) => {
  return useQuery("get-search-book", () => fetchSearchBook(keyword), {
    onSuccess: onSuccess,
    onError: onError,
    refetchOnWindowFocus: false,
    enabled: false,
    select: (data) => {
      return data?.data.response.docs;
    },
  });
};

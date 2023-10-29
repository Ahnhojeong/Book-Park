import { libraryPlazaApi } from "@api/instance";
import { getToday, setDataForm } from "@utils/Transform";
import { useQuery } from "react-query";

const fetchTodayBestBooks = () => {
  const paramObj = {
    authKey: process.env.REACT_APP_LIBRARY_BIGDATA_API_KEY,
    startDt: getToday(),
    endDt: getToday(),
    pageSize: 100,
    format: "json",
  };

  const inData = setDataForm(paramObj);
  return libraryPlazaApi.get("/loanItemSrch", { params: inData });
};

export const useTodayBestBooks = (
  onSuccess: () => void,
  onError: () => void
) => {
  return useQuery("get-today-books", fetchTodayBestBooks, {
    onSuccess: onSuccess,
    onError: onError,
    refetchOnWindowFocus: false,
    select: (data) => {
      console.log("useTodayBestBooks data -> ", data);
      return data.data?.response.docs;
    },
  });
};

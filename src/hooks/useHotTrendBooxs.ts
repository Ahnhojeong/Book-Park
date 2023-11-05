import { libraryPlazaApi } from "@api/instance";
import { getToday, setDataForm } from "@utils/Transform";
import { useQuery } from "react-query";
import { IRankBookList } from "types/book";

const fetchHotTrendBooks = () => {
  const paramObj = {
    authKey: process.env.REACT_APP_LIBRARY_BIGDATA_API_KEY,
    // pageSize: 100,
    searchDt: getToday(),
    format: "json",
  };

  const inData = setDataForm(paramObj);
  return libraryPlazaApi.get("/hotTrend", { params: inData });
};

export const useHotTrendBooks = (
  onSuccess: () => void,
  onError: () => void
) => {
  return useQuery("get-trend-books", fetchHotTrendBooks, {
    onSuccess: onSuccess,
    onError: onError,
    refetchOnWindowFocus: false,
    select: (data) => {
      let getData = data?.data.response.results.filter(
        (item: IRankBookList) => {
          if (item.result.docs.length > 0) {
            return [...item.result.docs];
          }
        }
      );

      let newResult = getData.reduce((prev: any, cur: any) => {
        return prev.concat(cur.result.docs);
      }, []);

      console.log("@@@@ useHotTrendBooks newResult @@@@ ", newResult);

      let filterResult = newResult.filter((item: any, i: number) => {
        return (
          newResult.findIndex((item2: any, j: number) => {
            return item.doc.isbn13 === item2.doc.isbn13;
          }) === i
        );
      });

      console.log("@@@@ useHotTrendBooks filterResult @@@@@ ", filterResult);

      return filterResult;
    },
  });
};

import { useQuery } from "react-query";
import { instance } from "@api/instance";
import { setDataForm } from "@utils/Transform";

const fetchRecommendBooks = () => {
  const paramObj = {
    serviceKey: process.env.REACT_APP_RECOMMEND_BOOK_API_KEY,
    numOfRows: 100,
  };
  const inData = setDataForm(paramObj);
  return instance.get("", { params: inData });
};

export const useRecommendBooks = (
  onSuccess: () => void,
  onError: () => void
) => {
  return useQuery("get-recommend-books", fetchRecommendBooks, {
    onSuccess: onSuccess,
    onError: onError,
    refetchOnWindowFocus: false,
    select: (data) => {
      console.log("useRecommendBooks data -> ", data);
      return data.data?.response.body.items;
    },
  });
};

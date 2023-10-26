import { curtureApi } from "@api/instance";
import { setDataForm } from "@utils/Transform";
import { useQuery } from "react-query";

const fetchMonthBooks = () => {
  const paramObj = {
    serviceKey: process.env.REACT_APP_CURTURE_MONTH_API_KEY,
    numOfRows: 100,
  };

  const inData = setDataForm(paramObj);
  return curtureApi.get("/meta13/getKPEF0101", { params: inData });
};

export const useMonthBooks = (onSuccess: () => void, onError: () => void) => {
  return useQuery("get-month-books", fetchMonthBooks, {
    onSuccess: onSuccess,
    onError: onError,
    refetchOnWindowFocus: false,
    select: (data) => {
      console.log("useMonthBooks data -> ", data);

      return data.data?.response.body.items.item.map((item: any) => {
        return {
          ...item,
          referenceIdentifier: item.referenceIdentifier.replace(
            "http://www",
            "https://e"
          ),
        };
      });
    },
  });
};

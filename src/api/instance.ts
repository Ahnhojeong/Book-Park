import axios from "axios";

// common config
axios.defaults.headers.common["Accept"] = "application/json";

const instance = axios.create({
  baseURL: process.env.REACT_APP_RECOMMEND_BOOK_SERVER,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error("error -> ", error);
    return Promise.reject(error);
  }
);

export { instance };

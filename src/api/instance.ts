import axios from "axios";

// common config
// axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";

const curtureApi = axios.create({
  baseURL: process.env.REACT_APP_CURTURE_SERVER,
});

const libraryPlazaApi = axios.create({
  // baseURL: process.env.REACT_APP_LIBRARY_BIGDATA_SERVER,
  baseURL: "data4library",
});

const libraryPlazaApi2 = axios.create({
  // baseURL: process.env.REACT_APP_LIBRARY_BIGDATA_SERVER,
  baseURL: "/book/data4library",
});

curtureApi.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error("error -> ", error);
    return Promise.reject(error);
  }
);

libraryPlazaApi.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error("error -> ", error);
    return Promise.reject(error);
  }
);

export { curtureApi, libraryPlazaApi, libraryPlazaApi2 };

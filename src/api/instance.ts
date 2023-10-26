import axios from "axios";

// common config
axios.defaults.headers.common["Accept"] = "application/json";

const curtureApi = axios.create({
  baseURL: process.env.REACT_APP_CURTURE_SERVER,
});

const libraryPlazaApi = axios.create({
  baseURL: process.env.REACT_APP_LIBRARY_BIGDATA_SERVER,
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

export { curtureApi, libraryPlazaApi };

import axios from "axios";

export const configAPI = (token) => {
  const apiConfigObj = {
    baseURL: process.env.REACT_APP_BACKEND_API,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Custom-Header",
      Authorization: `Bearer ${token}`,
    },
  };

  const apiConfig = axios.create(apiConfigObj);

  apiConfig.interceptors.response.use(
    (response) => {
      const modifiedResponse = {
        status: response.status,
        data: response.data,
      };
      return modifiedResponse;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return apiConfig;
};

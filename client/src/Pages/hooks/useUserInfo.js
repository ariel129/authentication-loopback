import { useQuery } from "react-query";

import { configAPI } from "Config";

export async function fetchQuery({ queryKey }) {
  const [, { token }] = queryKey;
  const response = await configAPI(token).get("/user_info");

  return response.data;
}

export const useUserInfoQuery = (token) => {
  return useQuery(["user_info", { token }], fetchQuery);
};

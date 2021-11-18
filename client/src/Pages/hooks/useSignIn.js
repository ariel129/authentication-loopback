import { useContext } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

import { configAPI } from "Config";
import { ContextAPI } from "Context";

const query = async (data) => {
  return await (
    await configAPI().post(`/signin`, data)
  ).data;
};

export const useSignInQuery = () => {
  const { dispatch } = useContext(ContextAPI);

  const mutation = useMutation((values) => query(values), {
    onSuccess: (data) => {
      dispatch({
        type: "TOKEN_ACTION",
        payload: {
          token: data.token,
          auth: true,
        },
      });
      toast.success("You've successfully logged In!");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return mutation;
};

import { configAPI } from "Config";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

const query = async (data) =>
  await (
    await configAPI().post(`/signup`, data)
  ).data;

export const useSignUpQuery = () => {
  const mutation = useMutation((values) => query(values), {
    onSuccess: () => {
      toast.success("You've successfully sign Up!");
    },
  });

  return mutation;
};

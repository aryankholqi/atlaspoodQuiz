import { useMutation } from "@tanstack/react-query";
import { postLoginApi } from "../../services/api/authApi";
import Cookies from "js-cookie";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-toastify";
import { loginProps } from "../../interfaces/login.interface";

export const useLoginMutation = () => {
  const navigate = useNavigate({ from: "/login" });

  return useMutation({
    mutationFn: (payload: loginProps) =>
      postLoginApi(payload).then((data) => data.data),
    onSuccess: (res: { token: string }) => {
      Cookies.set("token", res.token);
      navigate({
        to: "/",
      });
      toast.success("Logged In");
    },
  });
};

import { loginProps } from "../../interfaces/login.interface";
import httpService from "../httpService";

export const postLoginApi = (payload: loginProps) => {
  return httpService.post("https://fakestoreapi.com/auth/login", payload);
};

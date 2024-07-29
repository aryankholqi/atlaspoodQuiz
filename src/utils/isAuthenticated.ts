import Cookies from "js-cookie";

export default function isAuthenticated() {
  const token = Cookies.get("token");
  // should call an get me api to validate token
  return Boolean(token);
}

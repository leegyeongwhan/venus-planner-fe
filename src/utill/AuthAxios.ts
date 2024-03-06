import { ROUTER_PATH } from "@constant/RouterPath";
import axios from "axios";

const authAxios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

authAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      alert("세션이 만료되었습니다 다시 로그인해 주세요.");
      window.location.href = ROUTER_PATH.AUTH.SIGN_IN;
    } else if (error.response && error.response.status === 403) {
      alert("접근 권한이 없습니다.");
    }

    return Promise.reject(error);
  }
);

export default authAxios;

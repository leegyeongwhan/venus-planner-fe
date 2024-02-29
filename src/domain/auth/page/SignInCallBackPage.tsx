import axios from "axios";
import queryString from "query-string";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StoredMemberInfo } from "@domain/auth/type/StoredMemberInfo";
import { API_PATH } from "@constant/ApiPath";
import { ROUTER_PATH } from "@constant/RouterPath";

export default function SignInCallbackPage() {
    const navigate = useNavigate();

  useEffect(() => {
    const code = queryString.parse(location.search).code;
    const body = {
      code: code,
    };

    axios
      .post(import.meta.env.VITE_BASE_URL + API_PATH.AUTH.SIGN_IN, 
      body, 
      {
        withCredentials: true
      })
      .then(function (response) {
        if (response.status == 200) {
            const responseData: StoredMemberInfo = response.data;
            localStorage.setItem('MEMBER_INFO', JSON.stringify(responseData));

            navigate(ROUTER_PATH.MAIN);
        } else {
            throw new Error('Authentication failed');
        }
      })
      .catch(function (error) {
        console.log('error: {}', error)
        navigate(ROUTER_PATH.AUTH.SIGN_IN);
      });

  }, [navigate]);

  return <div></div>;
}
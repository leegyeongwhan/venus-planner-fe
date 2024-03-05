import queryString from "query-string";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "@constant/RouterPath";
import { useAuthMemberStore } from "../store/AuthMemberStore";

export default function SignInCallbackPage() {
    const navigate = useNavigate();
    const { signIn } = useAuthMemberStore();

  useEffect(() => {

    const code = queryString.parse(location.search).code;
    if (typeof code !== 'string') {
      return;
    }

    signIn(code).then(isSuccess => {
      if (isSuccess) {
        navigate(ROUTER_PATH.PLANNER.MAIN);
      } else {
        navigate(ROUTER_PATH.AUTH.SIGN_IN);
      }
    });

  }, [navigate]);

  return <div></div>;
}

import { ROUTER_PATH } from "@constant/RouterPath";
import { useAuthMemberStore } from "@domain/auth/store/AuthMemberStore";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";

type Props = {
    title: string;
    children: ReactNode;
  };
  
  export default function Layout({ title, children }: Props) {

    const navigate = useNavigate();
    const { isSignIn } = useAuthMemberStore();
  
    useEffect(() => {
      if (!isSignIn()) {
        navigate(ROUTER_PATH.AUTH.SIGN_IN);
      }
    }, []);

    return (
      <div className="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  
        <div className="drawer-content flex flex-col items-center justify-start">
          {/* Header & Content */}
          <Header title={title} />
          {children}
        </div>
  
        <div className="drawer-side">
          <SideBar />
        </div>
      </div>
    );
  }
  
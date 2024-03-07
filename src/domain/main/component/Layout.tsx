import { ROUTER_PATH } from "@constant/RouterPath";
import { useAuthMemberStore } from "@domain/auth/store/AuthMemberStore";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";
import { useDrawerStore } from "../type/DrawerStore";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const navigate = useNavigate();
  const { isSignIn } = useAuthMemberStore();
  const { isDrawerOpen } = useDrawerStore();

  useEffect(() => {
    if (!isSignIn()) {
      navigate(ROUTER_PATH.AUTH.SIGN_IN);
    }
  }, []);

  return (
    <div className={`drawer ${isDrawerOpen ? 'drawer-open' : ''}`}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        {/* Header & Content */}
        <Header />
        {children}
      </div>

      <div className="drawer-side">
        <SideBar />
      </div>
    </div>
  );
}

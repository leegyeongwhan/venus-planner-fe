import { ROUTER_PATH } from "@constant/RouterPath";
import { StoredMemberInfo } from "@domain/auth/type/StoredMemberInfo";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {

  const navigate = useNavigate();
  const [memberInfo, setMemberInfo] = useState<StoredMemberInfo | null>(null);

  useEffect(() => {
    const storedMemberInfo = localStorage.getItem("MEMBER_INFO");
    if (storedMemberInfo) {
      setMemberInfo(JSON.parse(storedMemberInfo));
    } else {
      navigate(ROUTER_PATH.AUTH.SIGN_IN);
      alert("로그인이 필요한 페이지 입니다.");
      return;
    }
  });

  return (
    <>
      <div>
        <h1>{memberInfo?.nickName}</h1>
        <h1>{memberInfo?.email}</h1>
        <h1>{memberInfo?.profileUrl}</h1>
      </div>
    </>
  );
}

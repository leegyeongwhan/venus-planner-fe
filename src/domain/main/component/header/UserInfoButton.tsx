import { ROUTER_PATH } from "@constant/RouterPath";
import { useAuthMemberStore } from "@domain/auth/store/AuthMemberStore";
import { useNavigate } from "react-router-dom";

export default function UserInfoButton() {
  const navigate = useNavigate();
  const { storedMemberInfo, signOut } = useAuthMemberStore();

  const fn_signOut = () => {
    signOut();
    navigate(ROUTER_PATH.AUTH.SIGN_IN);
  };

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        {storedMemberInfo != null ? (
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={storedMemberInfo && storedMemberInfo.profileUrl}
            />
          </div>
        ) : (
          <div className="w-10 rounded-full bg-info"></div>
        )}
      </div>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52"
      >
        <li>
          {storedMemberInfo != null ? (
            <div>
              Welcome!{" "}
              <span className="font-bold">{storedMemberInfo.nickName}</span>
            </div>
          ) : (
            <div>회원 정보 없음.</div>
          )}
        </li>
        <li>
          <a onClick={() => fn_signOut()}>로그 아웃</a>
        </li>
      </ul>
    </div>
  );
}

import { ROUTER_PATH } from "@constant/RouterPath";
import { useNavigate } from "react-router-dom";
import SideBarStudyTree from "./SideBarStudyTree";

export default function SideBarMenu() {
  const navigate = useNavigate();

  const fn_goToPage = (path: string) => {
    navigate(path);
  };

  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-2">
      <li>
        <a
          className="btn btn-success text-lg"
          onClick={() => fn_goToPage(ROUTER_PATH.MAIN)}
        >
          통합 일정
        </a>
      </li>
      <div className="border-2 border-success bg-green-50 rounded-box gap-2">
        <li>
          <SideBarStudyTree />
        </li>
      </div>
    </ul>
  );
}

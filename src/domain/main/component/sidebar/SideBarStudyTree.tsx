import { ROUTER_PATH } from "@constant/RouterPath";
import { useStudyStore } from "@domain/study/store/StudyStore";
import { Study } from "@domain/study/type/Study";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SideBarStudyTree() {
  const { studies, isStudiesFetched, fetchStudies } = useStudyStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isStudiesFetched) {
      fetchStudies();
    }
  }, [studies]);

  const fn_goToPlannerPage = (studyId: number) => {
    navigate(ROUTER_PATH.STUDY.PLANNER_$(studyId));
  };

  return (
    <>
      <div className="text-lg font-bold">스터디 목록</div>

      <ul className="menu w-70 rounded-box">
        {studies && studies.length > 0 ? (
          studies.map((study: Study) => (
            <li>
              <span>
                {/* <Icon name="folder" /> */}
                <span onClick={() => fn_goToPlannerPage(study.studyId)}>
                  {study.name}
                </span>
              </span>
            </li>
          ))
        ) : (
          <li>
            <p>함께하는 스터디가 없습니다.</p>
          </li>
        )}
      </ul>
    </>
  );
}

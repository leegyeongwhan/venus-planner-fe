import { useEffect } from "react";
import { usePlanCategoryStore } from "../store/PlanCategoryStore";
import { PlanCategory } from "../type/PlanCategory";
import { useParams } from "react-router-dom";

export default function PlanCategoryBox() {
  const { studyId } = useParams();
  const { planCategories, isPlanCategoriesFetched, fetchPlanCategories } = usePlanCategoryStore();

  useEffect(() => {
    if (!isPlanCategoriesFetched) {
      fetchPlanCategories(Number(studyId));
    }
  }, [])

  return (
    <div className="stat">
      <div className="stat-title mb-1">카테고리</div>
      <div className="mx-20"></div>
      {planCategories &&
        planCategories.map((category: PlanCategory) => (
          <button
            className="btn btn-xs cursor-default"
            style={{
              backgroundColor: category.backgroundColor,
              color: category.fontColor,
            }}
          >
            {category.title}
          </button>
        ))}
      <div className="stat-desc"></div>
    </div>
  );
}

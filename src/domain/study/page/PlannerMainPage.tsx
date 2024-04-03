import PlanCategoryBox from "../component/PlanCategoryBox";
import PlannerCalendar from "../component/PlannerCalendar";
import PlanModal from "../component/plan-modal/PlanModal";

export default function PlannerMainPage() {
  return (
    <div className="flex w-full gap-2 overflow-y-auto">
      <div className="">
        <div className="mx-24 mt-4"></div>
        <div className="fixed">
          <PlanCategoryBox />
        </div>
      </div>
      <div>
        <PlannerCalendar />
      </div>
      <PlanModal />
    </div>
  );
}

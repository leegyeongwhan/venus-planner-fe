import { API_PATH } from "@constant/ApiPath";
import authAxios from "@utill/AuthAxios";
import { create } from "zustand";
import { Plan, PlanEvent } from "@domain/study/type/Plan";

type PlanStoreType = {
  plans: Plan[];
  isPlansFetched: boolean;
  planEvents: PlanEvent[];
  fetchPlans: (studyId: number, start: Date, end: Date) => void;
};

export const usePlanStore = create<PlanStoreType>((set) => ({
  plans: [],
  isPlansFetched: false,
  planEvents: [],
  fetchPlans: (studyId: number, start: Date, end: Date) => {
    set({
      plans: [],
      planEvents: [],
      isPlansFetched: false,
    });

    authAxios
      .get(API_PATH.STUDY.PLAN.GET_ALL(studyId, start, end))
      .then(function (response) {
        if (response.status !== 200) {
          alert("응답 실패입니다.");
          return;
        }

        const plans = response.data;
        const planEvents = fn_convertPlansToPlannerFormat(plans);

        set({
          plans: plans,
          planEvents: planEvents,
          isPlansFetched: true,
        });
      });
  },
}));

const fn_convertPlansToPlannerFormat = (plans: Plan[]): PlanEvent[] => {
  return plans.map((plan) => ({
    id: plan.planId.toString(),
    title: plan.title,
    description: plan.description,
    start: plan.startTime.toString(),
    end: plan.endTime.toString(),
    textColor: "white",
    backgroundColor: "blue",
    display: "block",
  }))
};

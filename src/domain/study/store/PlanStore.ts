import { API_PATH } from "@constant/ApiPath";
import authAxios from "@utill/AuthAxios";
import { create } from "zustand";
import { Plan } from "@domain/study/type/Plan";

type PlanStoreType = {
  plans: Plan[];
  isPlansFetched: boolean;
  fetchPlans: (studyId: number) => void;
};

export const usePlanStore = create<PlanStoreType>((set) => ({
  plans: [],
  isPlansFetched: false,
  fetchPlans: (studyId: number) => {
    authAxios
      .get(API_PATH.STUDY.PLAN.GET_ALL(studyId))
      .then(function (response) {
        if (response.status !== 200) {
          alert("응답 실패입니다.");
          return;
        }

        set({ 
          plans: response.data,
          isPlansFetched: true,
        });
      });
  },
}));

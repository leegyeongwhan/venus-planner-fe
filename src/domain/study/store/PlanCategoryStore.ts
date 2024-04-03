import { create } from "zustand";
import { PlanCategory } from "@domain/study/type/PlanCategory";
import authAxios from "@utill/AuthAxios";
import { API_PATH } from "@constant/ApiPath";

type PlanCategoryStoreType = {
  planCategories: PlanCategory[];
  isPlanCategoriesFetched: boolean;
  fetchPlanCategories: (studyId: number) => void;
};

export const usePlanCategoryStore = create<PlanCategoryStoreType>(
  (set) => ({
    planCategories: [
      {
        id: 0,
        title: "None",
        fontColor: "#000000",
        backgroundColor: "#FFFFFF",
      },
    ],
    isPlanCategoriesFetched: false,
    fetchPlanCategories: (studyId: number) => {
      authAxios
        .get(API_PATH.STUDY.CATEGORY.GET_ALL(studyId))
        .then(function (response) {
          if (response.status != 200) {
            alert("응답 실패입니다.");
            return;
          }

          set({
            planCategories: [
              ...response.data,
            ],
            isPlanCategoriesFetched: true,
          });
        });
    },
  })
);

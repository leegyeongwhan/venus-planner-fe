import { API_PATH } from "@constant/ApiPath";
import { Study } from "@domain/study/type/Study";
import authAxios from "@utill/AuthAxios";
import { create } from "zustand";

type StudyStoreType = {
  studies: Study[];
  isStudiesFetched: boolean;
  fetchStudies: () => void;
};

export const useStudyStore = create<StudyStoreType>((set) => ({
  studies: [],
  isStudiesFetched: false,
  fetchStudies: () => {
    authAxios
      .get(API_PATH.STUDY.GET_ALL)
      .then(function (response) {
        if (response.status !== 200) {
          alert("응답 실패입니다.");
          return;
        }

        set({ 
          studies: response.data,
          isStudiesFetched: true,
        });
      });
  },
}));

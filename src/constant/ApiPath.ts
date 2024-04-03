export const API_PATH = {
  AUTH: {
    SIGN_IN: "/auth/sign-in",
    SIGN_OUT: "/auth/sign-out",
  },
  STUDY: {
    GET_ALL: `/studies`,
    PLAN: {
      GET_ALL: (studyId: number, start: Date, end: Date) =>
        `/studies/${studyId}/plans?start=${start.toISOString()}&end=${end.toISOString()}`,
    },
    CATEGORY: {
      GET_ALL: (studyId: number) => `/studies/${studyId}/categories`,
    },
  },
};

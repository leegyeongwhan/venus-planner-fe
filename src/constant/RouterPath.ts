export const ROUTER_PATH = {
    MAIN: `/main`,
    AUTH : {
        SIGN_IN: `/signin`,
        CALLBACK: `/callback`,
    },
    STUDY: {
        PLANNER: `/studies/:studyId/planner`,
        PLANNER_$: (studyId: number) => `/studies/${studyId}/planner`
    }
}

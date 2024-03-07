export type Plan = {
  planId: number;
  categoryId: number;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
};

export type PlanEvent = {
  id: string;
  title: string;
  description: string;
  start: string;
  end: string;
  textColor: string;
  backgroundColor: string;
  display: string;
};

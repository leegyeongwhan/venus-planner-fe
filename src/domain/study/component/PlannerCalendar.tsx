import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { useParams } from "react-router-dom";
import { usePlanStore } from "../store/PlanStore";
import { useEffect, useState } from "react";
import { DateSelectArg, DatesSetArg, EventClickArg, EventDropArg } from "@fullcalendar/core/index.js";
import { fn_planModalOpen } from "./plan-modal/PlanModalHandler";

export default function PlannerCalendar() {
  const { studyId } = useParams();
  const { planEvents, fetchPlans, isPlansFetched } = usePlanStore();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  useEffect(() => {
    if (!isPlansFetched && startDate && endDate) {
      fetchPlans(Number(studyId), startDate, endDate);
    }
  }, [startDate, endDate]);

  const fn_handleDateClick = (info: DateClickArg) => {
    alert("Clicked " + info.dateStr);
  };

  const fn_handleSelect = (info: DateSelectArg) => {
    alert("Selected " + info.startStr + " to " + info.endStr);
    fn_planModalOpen();
  };

  const fn_handleEventClick = (info: EventClickArg) => {
    var eventObj = info.event;
    alert("Event Clicked " + eventObj.title);
  };

  const fn_handleEventDrop = (info: EventDropArg) => {
    var event = info.event;
    var oldEvent = info.oldEvent;

    alert(oldEvent.start + " to " + event.start);
  };

  const fn_handleDatesSet = (dateInfo: DatesSetArg) => {
    const start: Date = dateInfo.start;
    start.setDate(start.getDate() + 1);

    setStartDate(start);
    setEndDate(dateInfo.end);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      weekends={true}
      events={planEvents}
      height={"auto"}
      editable={true}
      selectable={true}
      headerToolbar={{
        left: "prev,next",
        center: "title",
        right: "today",
      }}
      eventTimeFormat={{
        hour: "2-digit",
        minute: "2-digit",
        meridiem: false,
        hour12: false,
      }}
      dateClick={fn_handleDateClick}
      select={fn_handleSelect}
      eventClick={fn_handleEventClick}
      eventDrop={fn_handleEventDrop}
      datesSet={fn_handleDatesSet}
    />
  );
}

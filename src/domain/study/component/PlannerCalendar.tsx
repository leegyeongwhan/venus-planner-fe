import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useParams } from "react-router-dom";
import { usePlanStore } from "../store/PlanStore";
import { useEffect } from "react";

export default function PlannerCalendar() {
  const { studyId } = useParams();
  const { plans, planEvents, fetchPlans, isPlansFetched } = usePlanStore();

  useEffect(() => {
    if (!isPlansFetched) {
      fetchPlans(Number(studyId));
    }
  }, [plans, planEvents]);

  const fn_handleDateClick = (info: any) => {
    alert("Clicked " + info.dateStr);
  };

  const fn_handleSelect = (info: any) => {
    alert("Selected " + info.startStr + " to " + info.endStr);
  };

  const fn_handleEventClick = (info: any) => {
    var eventObj = info.event;
    alert("Clicked " + eventObj.title);
  };

  const fn_handleEventDrop = (info: any) => {
    var event = info.event;
    var oldEvent = info.oldEvent;

    alert(oldEvent.start + " to " + event.start);
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
    />
  );
}

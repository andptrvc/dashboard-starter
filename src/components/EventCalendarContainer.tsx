import Image from "next/image";
import React from "react";
import Calendar from "react-calendar";
import EventList from "./EventList";
import EventCalendar from "./EventCalendar";

const EventCalendarContainer = async ({
  searchParams,
}: {
  searchParams: { [keys: string]: string | undefined };
}) => {
  const { date } = searchParams;

  return (
    <div className="bg-white p-4 rounded-md">
      <EventCalendar />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold my-2">Events</h1>
          <Image
            src="/moreDark.png"
            alt="more"
            width={20}
            height={20}
          />
        </div>
        <div className="flex flex-col gap-4">
          <EventList dateParam={date} />
        </div>
      </div>
    </div>
  );
};

export default EventCalendarContainer;

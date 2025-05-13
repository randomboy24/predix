import Image from "next/image";
import { EventType } from "./EventsList";

export function EventCard({ event }: { event: EventType }) {
  return (
    <div className="p-4  rounded bg-white w-[450] h-52">
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-4">
          <img
            src={event.image}
            className="h-[80px] w-[80px] object-cover rounded-md"
            alt="sjl"
          />
          <div>{event.title}</div>
        </div>
        <div className="text-sm text-gray-500">{event.description}</div>
        <div className="flex gap-x-4 ">
          <button className="w-60 h-9 rounded bg-blue-100  text-blue-600 text-sm font-bold">
            Yes &#8377; 4
          </button>
          <button className="w-60 h-9 rounded bg-red-100 text-red-600 text-sm font-bold">
            No &#8377;6
          </button>
        </div>
      </div>
    </div>
  );
}

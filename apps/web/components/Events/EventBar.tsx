"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { EventsLists } from "./EventsList";

export function EventBar() {
  const [selectedId, setSelectedId] = useState<number>(11);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const events = [
    { id: 11, name: "All events" },
    { id: 1, name: "Cricket" },
    { id: 2, name: "Football" },
    { id: 3, name: "Youtube" },
    { id: 4, name: "Motorsports" },
    { id: 5, name: "New" },
    { id: 6, name: "Gaming" },
    { id: 7, name: "BasketBall" },
    { id: 8, name: "Chess" },
    { id: 9, name: "Tennis" },
    { id: 10, name: "Probo" },
  ];

  useEffect(() => {
    const el = tabRefs.current[selectedId];
    if (el) {
      const { offsetLeft, offsetWidth } = el;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [selectedId]);

  return (
    <div>
      <div className="h-12 flex  justify-center text-gray-500 border-b border-gray-200 text-sm">
        <div className="relative w-[74%] flex flex-col">
          <div className="flex gap-x-12 h-[95%]">
            {events.map((event) => (
              <div
                key={event.id}
                ref={(el: HTMLDivElement | null) => {
                  tabRefs.current[event.id] = el;
                }}
                className={`h-[95%] flex items-center ${
                  selectedId === event.id ? "text-black font-semibold" : ""
                } cursor-pointer`}
                onClick={() => setSelectedId(event.id)}
              >
                <Link href="/events">{event.name}</Link>
              </div>
            ))}
          </div>

          <div
            className="absolute bottom-0 h-[2px] bg-black transition-all duration-300"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
          />
        </div>
      </div>
      <EventsLists />
    </div>
  );
}

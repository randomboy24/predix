import { EventCard } from "./EventCard";

export interface EventType {
  id: number;
  title: string;
  description: string;
  image: string;
}

export function EventsLists() {
  const array: EventType[] = [
    {
      id: 1,
      title: "Sharjah to win the match vs Emirates Blues?",
      description:
        "Bitcoin open price at 07:20 PM was 104053.91 USDT. Read more",
      image:
        "https://plus.unsplash.com/premium_photo-1667673941713-ad4d4751c93b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "title",
      description:
        "Bitcoin open price at 07:20 PM was 104053.91 USDT. Read more",
      image:
        "https://plus.unsplash.com/premium_photo-1667673941713-ad4d4751c93b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Sharjah to win the match vs Emirates Blues?",
      description:
        "Bitcoin open price at 07:20 PM was 104053.91 USDT. Read more",
      image:
        "https://plus.unsplash.com/premium_photo-1667673941713-ad4d4751c93b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Sharjah to win the match vs Emirates Blues?",
      description:
        "Bitcoin open price at 07:20 PM was 104053.91 USDT. Read more",
      image:
        "https://plus.unsplash.com/premium_photo-1667673941713-ad4d4751c93b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Sharjah to win the match vs Emirates Blues?",
      description:
        "Bitcoin open price at 07:20 PM was 104053.91 USDT. Read more",
      image:
        "https://plus.unsplash.com/premium_photo-1667673941713-ad4d4751c93b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Sharjah to win the match vs Emirates Blues?",
      description:
        "Bitcoin open price at 07:20 PM was 104053.91 USDT. Read more",
      image:
        "https://plus.unsplash.com/premium_photo-1667673941713-ad4d4751c93b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="mt-24 flex flex-col items-center  ">
      <div className="w-3/4  border-yellow-800">
        <div className="w-3/4  font-extrabold text-lg border-b h-10 border-gray-200">
          All events
        </div>
        <div className="  border-blue-900 w-[100%]  ">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-6">
            {array.map((event) => {
              return <EventCard key={event.id} event={event} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

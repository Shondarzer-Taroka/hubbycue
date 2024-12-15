


import { FaUsers, FaMapMarkerAlt, FaShoppingBag, FaCalendarAlt } from "react-icons/fa";

const cards = [
  {
    id: 1,
    title: "People",
    description:
      "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
    button: "Connect",
    icon: <FaUsers />,
    color: "text-purple-600",
    hoverBg: "hover:bg-purple-600", 
  },
  {
    id: 2,
    title: "Place",
    description:
      "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
    button: "Meet up",
    icon: <FaMapMarkerAlt />,
    color: "text-green-600",
    hoverBg: "hover:bg-green-600",
  },
  {
    id: 3,
    title: "Product",
    description:
      "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
    button: "Get it",
    icon: <FaShoppingBag />,
    color: "text-red-500",
    hoverBg: "hover:bg-red-500",
  },
  {
    id: 4,
    title: "Program",
    description:
      "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
    button: "Attend",
    icon: <FaCalendarAlt />,
    color: "text-blue-600",
    hoverBg: "hover:bg-blue-600",
  },
];

export default function HobbyCards() {
  return (
    <div className="bg-gray-50 max-w-[1440px] mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className={` text-center md:text-left group border rounded-lg p-6 shadow-sm bg-white transition-shadow duration-300 ${card.hoverBg} hover:shadow-md`}
          >
            <div className="flex items-center md:text-left mb-4 justify-center md:justify-start">
              <div
                className={`text-3xl ${card.color} mr-3 transition-colors group-hover:text-white`}
                aria-hidden="true"
              >
                {card.icon}
              </div>
              <h3
                className={`text-xl font-bold text-gray-700 transition-colors group-hover:text-white`}
              >
                {card.title}
              </h3>
            </div>
            <p
              className={`text-gray-600 text-sm mb-4 transition-colors group-hover:text-white`}
            >
              {card.description}
            </p>
          
            <button
              className={` w-full md:max-w-fit text-sm font-semibold px-4 py-2 border rounded-lg text-purple-600 border-purple-600 transition-opacity duration-300 group-hover:opacity-0`}
            >
              {card.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

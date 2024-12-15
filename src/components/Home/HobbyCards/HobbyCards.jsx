import { FaUsers, FaMapMarkerAlt, FaShoppingBag, FaCalendarAlt } from "react-icons/fa";

const cards = [
    {
        id: 1,
        title: "People",
        description:
            "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
        button: "Connect",
        icon: <FaUsers />, // React Icon for users
        color: "text-purple-600",
    },
    {
        id: 2,
        title: "Place",
        description:
            "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
        button: "Meet up",
        icon: <FaMapMarkerAlt />, // React Icon for location pin
        color: "text-green-600",
    },
    {
        id: 3,
        title: "Product",
        description:
            "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
        button: "Get it",
        icon: <FaShoppingBag />, // React Icon for shopping bag
        color: "text-red-500",
    },
    {
        id: 4,
        title: "Program",
        description:
            "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
        button: "Attend",
        icon: <FaCalendarAlt />, // React Icon for calendar
        color: "text-blue-600",
    },
];

export default function HobbyCards() {
    return (
        <div className=" bg-gray-50 max-w-[1440px] mx-auto p-8"> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {cards.map((card) => (
                <div
                    key={card.id}
                    className="border rounded-lg p-6 shadow-sm bg-white hover:shadow-md transition-shadow duration-300"
                >
                    <div className="flex items-center mb-4">
                        <div className={`text-3xl ${card.color} mr-3`} aria-hidden="true">
                            {card.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-700">{card.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                    <button
                        className="text-sm font-semibold px-4 py-2 border border-purple-600 rounded-lg text-purple-600 hover:bg-purple-100"
                    >
                        {card.button}
                    </button>
                </div>
            ))}
        </div>  
        </div>

    );
}

// import { FaUsers, FaMapMarkerAlt, FaShoppingBag, FaCalendarAlt } from "react-icons/fa";

// const cards = [
//     {
//         id: 1,
//         title: "People",
//         description:
//             "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
//         button: "Connect",
//         icon: <FaUsers />, // React Icon for users
//         color: "text-purple-600",
//     },
//     {
//         id: 2,
//         title: "Place",
//         description:
//             "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
//         button: "Meet up",
//         icon: <FaMapMarkerAlt />, // React Icon for location pin
//         color: "text-green-600",
//     },
//     {
//         id: 3,
//         title: "Product",
//         description:
//             "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
//         button: "Get it",
//         icon: <FaShoppingBag />, // React Icon for shopping bag
//         color: "text-red-500",
//     },
//     {
//         id: 4,
//         title: "Program",
//         description:
//             "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
//         button: "Attend",
//         icon: <FaCalendarAlt />, // React Icon for calendar
//         color: "text-blue-600",
//     },
// ];

// export default function HobbyCards() {
//     return (
//         <div className=" bg-gray-50 max-w-[1440px] mx-auto p-4 md:p-8"> 
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
//             {cards.map((card) => (
//                 <div
//                     key={card.id}
//                     className= {`border rounded-lg p-6 shadow-sm bg-white hover:shadow-md transition-shadow duration-300`}
//                 >
//                     <div className="flex items-center mb-4">
//                         <div className={`text-3xl ${card.color} mr-3`} aria-hidden="true">
//                             {card.icon}
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-700">{card.title}</h3>
//                     </div>
//                     <p className="text-gray-600 text-sm mb-4">{card.description}</p>
//                     <button
//                         className="text-sm font-semibold px-4 py-2 border border-purple-600 rounded-lg text-purple-600 hover:bg-purple-100"
//                     >
//                         {card.button}
//                     </button>
//                 </div>
//             ))}
//         </div>  
//         </div>

//     );
// }







// import { FaUsers, FaMapMarkerAlt, FaShoppingBag, FaCalendarAlt } from "react-icons/fa";

// const cards = [
//   {
//     id: 1,
//     title: "People",
//     description:
//       "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
//     button: "Connect",
//     icon: <FaUsers />,
//     color: "text-purple-600",
//     hoverBg: "hover:bg-purple-600 hover:text-white", // Hover effect for People
//   },
//   {
//     id: 2,
//     title: "Place",
//     description:
//       "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
//     button: "Meet up",
//     icon: <FaMapMarkerAlt />,
//     color: "text-green-600",
//     hoverBg: "hover:bg-green-600 hover:text-white", // Hover effect for Place
//   },
//   {
//     id: 3,
//     title: "Product",
//     description:
//       "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
//     button: "Get it",
//     icon: <FaShoppingBag />,
//     color: "text-red-500",
//     hoverBg: "hover:bg-red-500 hover:text-white", // Hover effect for Product
//   },
//   {
//     id: 4,
//     title: "Program",
//     description:
//       "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
//     button: "Attend",
//     icon: <FaCalendarAlt />,
//     color: "text-blue-600",
//     hoverBg: "hover:bg-blue-600 hover:text-white", // Hover effect for Program
//   },
// ];

// export default function HobbyCards() {
//   return (
//     <div className="bg-gray-50 max-w-[1440px] mx-auto p-4 md:p-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {cards.map((card) => (
//           <div
//             key={card.id}
//             className={`border rounded-lg p-6 shadow-sm bg-white transition-shadow duration-300 ${card.hoverBg} hover:shadow-md`}
//           >
//             <div className="flex items-center mb-4">
//               <div
//                 className={`text-3xl ${card.color} mr-3 group-hover:text-white transition-colors`}
//                 aria-hidden="true"
//               >
//                 {card.icon}
//               </div>
//               <h3
//                 className={`text-xl font-bold text-gray-700 transition-colors group-hover:text-white`}
//               >
//                 {card.title}
//               </h3>
//             </div>
//             <p
//               className={`text-gray-600 text-sm mb-4 transition-colors group-hover:text-white`}
//             >
//               {card.description}
//             </p>
//             <button
//               className="text-sm font-semibold px-4 py-2 border border-white rounded-lg text-white bg-transparent hover:bg-white hover:text-purple-600 transition duration-300"
//             >
//               {card.button}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





// import { FaUsers, FaMapMarkerAlt, FaShoppingBag, FaCalendarAlt } from "react-icons/fa";

// const cards = [
//   {
//     id: 1,
//     title: "People",
//     description:
//       "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
//     button: "Connect",
//     icon: <FaUsers />,
//     color: "text-purple-600",
//     hoverBg: "hover:bg-purple-600", // Hover Background Color
//     hoverText: "hover:text-purple-600", // Button Hover Text Color
//   },
//   {
//     id: 2,
//     title: "Place",
//     description:
//       "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
//     button: "Meet up",
//     icon: <FaMapMarkerAlt />,
//     color: "text-green-600",
//     hoverBg: "hover:bg-green-600",
//     hoverText: "hover:text-green-600",
//   },
//   {
//     id: 3,
//     title: "Product",
//     description:
//       "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
//     button: "Get it",
//     icon: <FaShoppingBag />,
//     color: "text-red-500",
//     hoverBg: "hover:bg-red-500",
//     hoverText: "hover:text-red-500",
//   },
//   {
//     id: 4,
//     title: "Program",
//     description:
//       "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
//     button: "Attend",
//     icon: <FaCalendarAlt />,
//     color: "text-blue-600",
//     hoverBg: "hover:bg-blue-600",
//     hoverText: "hover:text-blue-600",
//   },
// ];

// export default function HobbyCards() {
//   return (
//     <div className="bg-gray-50 max-w-[1440px] mx-auto p-4 md:p-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {cards.map((card) => (
//           <div
//             key={card.id}
//             className={`group border rounded-lg p-6 shadow-sm bg-white transition-shadow duration-300 ${card.hoverBg} hover:shadow-md`}
//           >
//             <div className="flex items-center mb-4">
//               <div
//                 className={`text-3xl ${card.color} mr-3 transition-colors group-hover:text-white`}
//                 aria-hidden="true"
//               >
//                 {card.icon}
//               </div>
//               <h3
//                 className={`text-xl font-bold text-gray-700 transition-colors group-hover:text-white`}
//               >
//                 {card.title}
//               </h3>
//             </div>
//             <p
//               className={`text-gray-600 text-sm mb-4 transition-colors group-hover:text-white`}
//             >
//               {card.description}
//             </p>
//                              <button
//                      className="text-sm font-semibold px-4 py-2 border border-purple-600 rounded-lg text-purple-600 hover:bg-purple-100"
//                   >
//                        {card.button}
//                    </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }






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
    hoverBg: "hover:bg-purple-600", // Hover Background Color
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
            {/* Button becomes invisible when hovered */}
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

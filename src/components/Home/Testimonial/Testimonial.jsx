// import React from "react";
// import { FaQuoteLeft } from "react-icons/fa";

// export default function Testimonial() {
//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
//       {/* Testimonial Header */}
//       <div className="flex items-center mb-4">
//         <FaQuoteLeft className="text-purple-600 text-3xl mr-2" />
//         <h2 className="text-xl font-bold text-gray-800">Testimonials</h2>
//       </div>

//       {/* Testimonial Content */}
//       <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-gray-200 pl-4">
//         In a fast growing and ever changing city like Bangalore, it sometimes becomes very
//         difficult to find or connect with like minded people. Websites like hobbycue.com is a
//         great service which helps me get in touch with, communicate, connect, and exchange
//         ideas with other dancers. It also provides the extra benefit of finding products and
//         services that I can avail, which I can be assured is going to be of great quality as it
//         comes recommended by people of the hobbycue community. To have discussions, to get
//         visibility, and to be able to safely explore various hobbies and activities in my city,
//         all under one roof, is an excellent idea and I highly recommend it.
//       </p>

//       {/* Audio Player */}
//       <div className="mt-6 flex items-center">
//         <div className="w-full bg-purple-100 rounded-lg p-3 flex items-center">
//           <button className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center rounded-full focus:outline-none">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               className="w-5 h-5"
//             >
//               <path d="M6 4l10 6-10 6V4z" />
//             </svg>
//           </button>
//           <div className="w-full mx-4">
//             <input
//               type="range"
//               className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-purple-600"
//             />
//           </div>
//           <span className="text-gray-600 text-xs">0:00</span>
//         </div>
//       </div>

//       {/* User Info */}
//       <div className="mt-6 flex items-center">
//         <img
//           src="https://via.placeholder.com/50"
//           alt="Shubha Nagarajan"
//           className="w-12 h-12 rounded-full object-cover"
//         />
//         <div className="ml-4">
//           <h3 className="text-sm font-bold text-gray-800">Shubha Nagarajan</h3>
//           <p className="text-xs text-purple-600">Classical Dancer</p>
//         </div>
//       </div>
//     </div>
//   );
// }









import React from 'react';
import photo from '../../../../public/assets/2bc87a41926b207ab3c50bc70b9bd0c4.png'
import Image from 'next/image';
const Testimonial = () => {
    return (
        <section className='max-w-[1440px] mx-auto md:p-11'>

            <div className="bg-purple-50 p-4 md:p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Testimonials</h2>
                <div className="py-4 rounded-lg">
                    <p className="text-gray-700">
                        In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like-minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
                    </p>
                </div>




                <div className='flex flex-col-reverse md:flex-row items-center gap-2 w-full'>
                    <div className="testimonial-last-audio px-4 flex items-center bg-purple-100 rounded h-[80px] w-full md:w-[80%]">

                        <div className="bg-purple-400 p-2 rounded-full">
                            <button className="bg-white p-2 rounded-full">
                                <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-grow mx-4">
                            <div className="bg-purple-300 h-2 rounded-full">
                                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '.7%' }}></div>
                              
                            </div>
                        </div>
                        <span className='mr-2'>00</span>
                        <div className="flex items-center">
                            {/* <img src="path_to_image" alt="Shubha Nagarajan" className="w-12 h-12 rounded-full object-cover" /> */}
                            <Image src={photo} alt='photo' width={100} height={100} className="w-9 h-9 rounded-full object-cover" />

                        </div>
                    </div>

                    <div className="flex items-center gap-2 w-full testimonial-last-image md:w-[20%]">
                        <Image src={photo} alt='photo' width={100} height={100} className="w-12 h-12 rounded-full object-cover" />

                        <div>
                            <p className="text-gray-900 font-semibold">Shubha Nagarajan</p>
                            <p className="text-purple-500">Classical Dancer</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>

    );
};

export default Testimonial;















// import React from 'react';
// import Image from 'next/image';
// import photo from '../../../../public/assets/2bc87a41926b207ab3c50bc70b9bd0c4.png';

// const Testimonial = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-12">
//       {/* Container */}
//       <div className="bg-purple-50 p-8 rounded-lg shadow-md">
//         {/* Title */}
//         <div className="flex items-center gap-2 mb-4">
//           <div className="bg-purple-500 p-2 rounded-full">
//             <svg
//               className="w-6 h-6 text-white"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//               aria-hidden="true"
//             >
//               <path d="M8 5v14l11-7z" />
//             </svg>
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800">Testimonials</h2>
//         </div>

//         {/* Testimonial Content */}
//         <p className="text-gray-700 leading-relaxed mb-6">
//           In a fast growing and ever changing city like Bangalore, it sometimes becomes
//           very difficult to find or connect with like-minded people. Websites like
//           hobbycue.com is a great service which helps me get in touch with, communicate,
//           connect, and exchange ideas with other dancers. It also provides the extra
//           benefit of finding products and services that I can avail, which I can be
//           assured is going to be of great quality as it comes recommended by people of
//           the hobbycue community. To have discussions, to get visibility, and to be able
//           to safely explore various hobbies and activities in my city, all under one
//           roof, is an excellent idea and I highly recommend it.
//         </p>

//         {/* Audio Player */}
//         <div className="flex items-center gap-4 bg-purple-100 rounded-lg p-4 mb-6">
//           {/* Play Button */}
//           <button className="w-12 h-12 flex items-center justify-center bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300">
//             <svg
//               className="w-6 h-6"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//               aria-hidden="true"
//             >
//               <path d="M8 5v14l11-7z" />
//             </svg>
//           </button>

//           {/* Progress Bar */}
//           <div className="flex-grow">
//             <div className="w-full bg-purple-300 h-2 rounded-full">
//               <div
//                 className="bg-purple-500 h-2 rounded-full"
//                 style={{ width: '20%' }}
//               ></div>
//             </div>
//           </div>

//           {/* Profile Image */}
//           <div className="flex-shrink-0">
//             <Image
//               src={photo}
//               alt="Shubha Nagarajan"
//               width={48}
//               height={48}
//               className="w-12 h-12 rounded-full object-cover border-2 border-purple-400"
//             />
//           </div>
//         </div>

//         {/* User Info */}
//         <div className="flex items-center gap-4">
//           {/* Profile Image */}
//           <Image
//             src={photo}
//             alt="Shubha Nagarajan"
//             width={64}
//             height={64}
//             className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
//           />
//           {/* Text */}
//           <div>
//             <p className="text-lg font-semibold text-gray-800">Shubha Nagarajan</p>
//             <p className="text-purple-500 text-sm">Classical Dancer</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;

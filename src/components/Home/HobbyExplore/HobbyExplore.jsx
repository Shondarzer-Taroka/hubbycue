// import Image from "next/image";
// import peopleImage from '../../../../public/assets/Group 27.png'
// import facebook from '../../../../public/assets/facebook-3-logo-svgrepo-com.svg'
// import { FaEyeSlash } from "react-icons/fa";

// export default function HobbyExplore() {
//     return (
//       <div className="flex min-h-screen flex-col lg:flex-row bg-[#f7f5f9] max-w-[1440px] mx-auto">
       
//         <div className="lg:w-1/2 flex flex-col justify-center pt-3 lg:pt-0 px-3 md:px-20 lg:px-32">
//           <h1 className="text-3xl font-bold mb-4 italic">
//             Explore your <span className="text-blue-500">hobby</span> or{" "}
//             <span className="text-purple-500">passion</span>
//           </h1>
//           <p className="text-gray-600 text-sm leading-relaxed mb-6">
//             Sign-in to interact with a community of fellow hobbyists and an
//             eco-system of experts, teachers, suppliers, classes, workshops, and
//             places to practice, participate, or perform. Your hobby may be about
//             visual or performing arts, sports, games, gardening, model making,
//             cooking, indoor or outdoor activities.
//           </p>
//           <p className="text-gray-600 text-sm">
//             If you are an expert or a seller, you can Add your Listing and promote
//             yourself, your students, products, services, or events. Hop on your
//             hobbyhorse and enjoy the ride.
//           </p>

//           <div className="mt-5">
//             <Image src={peopleImage} alt="image" width={300} height={200} className="w-full"/>
//           </div>
//         </div>
  
//         <div className="lg:w-1/2 flex items-center justify-center">
//           <div className="w-full max-w-md p-6">
//             <div className="flex items-center justify-between mb-4">
//               <button className="text-purple-600 font-bold border-b-2 border-purple-600 pb-1">
//                 Sign In
//               </button>
//               <button className="text-gray-500 font-semibold pb-1">Join In</button>
//             </div>
  
//             {/* Social Sign-In Buttons */}
//             <div className="flex flex-col space-y-4 mb-4">
//               <button className="flex items-center justify-center border rounded-lg py-2 text-gray-600 hover:bg-gray-100">
//                 <img
//                   src="https://www.svgrepo.com/show/475656/google-color.svg"
//                   alt="Google Icon"
//                   className="w-5 h-5 mr-2"
//                 />
//                 Continue with Google
//               </button>
//               <button className="flex items-center justify-center border rounded-lg py-2 text-gray-600 hover:bg-gray-100">
//                 {/* <img
//                   src='../../../../public/assets/facebook-3-logo-svgrepo-com.svg'
//                   alt="Facebook Icon"
//                   className="w-5 h-5 mr-2"
//                 /> */}

//                 <Image alt="facebook" src={facebook} width={28} height={28} className="w-5 h-5 mr-2"/>
//                 Continue with Facebook
//               </button>
//             </div>
  
//             <div className="text-center text-gray-400 text-sm mb-4">Or connect with</div>
  
//             {/* Email and Password Inputs */}
//             <div className="space-y-4">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full p-2 border rounded-md text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
//               />
//               <div className="relative">
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="w-full p-2 border rounded-md text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
//                 />
//                 <span className="absolute inset-y-0 right-2 flex items-center text-gray-400">
//                   <FaEyeSlash/>
//                 </span>
//               </div>
//             </div>
  
          
//             <div className="flex items-center justify-between text-sm text-gray-600 mt-4">
//               <label className="flex items-center">
//                 <input type="checkbox" className="mr-2" />
//                 Remember me
//               </label>
//               <a href="#" className="text-purple-500 hover:underline">
//                 Forgot password?
//               </a>
//             </div>
  
        
//             <button className="w-full bg-purple-600 text-white py-2 rounded-md mt-6 hover:bg-purple-700">
//               Continue
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
  





'use client'
import React, { useState } from "react";
import Image from "next/image";
import peopleImage from "../../../../public/assets/Group 27.png";
import facebook from "../../../../public/assets/facebook-3-logo-svgrepo-com.svg";
import { FaEyeSlash } from "react-icons/fa";

export default function HobbyExplore() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="flex min-h-screen flex-col lg:flex-row bg-[#f7f5f9] max-w-[1440px] mx-auto">
      {/* Left Section */}
      <div className="lg:w-1/2 flex flex-col justify-center pt-3 lg:pt-0 px-3 md:px-20 lg:px-32">
        <h1 className="text-3xl font-bold mb-4 italic">
          Explore your <span className="text-blue-500">hobby</span> or {" "}
          <span className="text-purple-500">passion</span>
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Sign-in to interact with a community of fellow hobbyists and an
          eco-system of experts, teachers, suppliers, classes, workshops, and
          places to practice, participate, or perform. Your hobby may be about
          visual or performing arts, sports, games, gardening, model making,
          cooking, indoor or outdoor activities.
        </p>
        <p className="text-gray-600 text-sm">
          If you are an expert or a seller, you can Add your Listing and promote
          yourself, your students, products, services, or events. Hop on your
          hobbyhorse and enjoy the ride.
        </p>

        <div className="mt-5">
          <Image src={peopleImage} alt="image" width={300} height={200} className="w-full" />
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md p-6">
          {/* Toggle Buttons */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setIsSignIn(true)}
              className={`text-sm font-bold pb-1 border-b-2 ${
                isSignIn ? "text-purple-600 border-purple-600" : "text-gray-500 border-transparent"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsSignIn(false)}
              className={`text-sm font-bold pb-1 border-b-2 ${
                !isSignIn ? "text-purple-600 border-purple-600" : "text-gray-500 border-transparent"
              }`}
            >
              Join In
            </button>
          </div>

          {isSignIn ? (
            <SignInForm />
          ) : (
            <JoinInForm />
          )}
        </div>
      </div>
    </div>
  );
}

function SignInForm() {
  return (
    <>
      {/* Social Sign-In Buttons */}
      <div className="flex flex-col space-y-4 mb-4">
        <button className="flex items-center justify-center border rounded-lg py-2 text-gray-600 hover:bg-gray-100">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google Icon"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>
        <button className="flex items-center justify-center border rounded-lg py-2 text-gray-600 hover:bg-gray-100">
          <Image
            alt="facebook"
            src={facebook}
            width={28}
            height={28}
            className="w-5 h-5 mr-2"
          />
          Continue with Facebook
        </button>
      </div>

      <div className="text-center text-gray-400 text-sm mb-4">Or connect with</div>

      {/* Email and Password Inputs */}
      <div className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded-md text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded-md text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <span className="absolute inset-y-0 right-2 flex items-center text-gray-400">
            <FaEyeSlash />
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-600 mt-4">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          Remember me
        </label>
        <a href="#" className="text-purple-500 hover:underline">
          Forgot password?
        </a>
      </div>

      <button className="w-full bg-purple-600 text-white py-2 rounded-md mt-6 hover:bg-purple-700">
        Continue
      </button>
    </>
  );
}

function JoinInForm() {
  return (
    <>
          <div className="flex flex-col space-y-4 mb-4">
        <button className="flex items-center justify-center border rounded-lg py-2 text-gray-600 hover:bg-gray-100">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google Icon"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>
        <button className="flex items-center justify-center border rounded-lg py-2 text-gray-600 hover:bg-gray-100">
          <Image
            alt="facebook"
            src={facebook}
            width={28}
            height={28}
            className="w-5 h-5 mr-2"
          />
          Continue with Facebook
        </button>
      </div>

      <div className="text-center text-gray-400 text-sm mb-4">Or connect with</div>
      <div className="space-y-4 mb-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded-md text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded-md text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded-md text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
      </div>

      <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
        Join Now
      </button>
    </>
  );
}

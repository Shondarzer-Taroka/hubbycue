import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaGooglePlusG, FaYoutube, FaTelegramPlane, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="pt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-8 px-6">
 
        <div>
          <h2 className="text-lg font-bold mb-4">Hobbycue</h2>
          <ul>
            <li><a href="#" className="hover:underline footer-link">About Us</a></li>
            <li><a href="#" className="hover:underline footer-link">Our Services</a></li>
            <li><a href="#" className="hover:underline footer-link">Work with Us</a></li>
            <li><a href="#" className="hover:underline footer-link">FAQ</a></li>
            <li><a href="#" className="hover:underline footer-link">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">How Do I</h2>
          <ul>
            <li><a href="#" className="hover:underline footer-link">Sign Up</a></li>
            <li><a href="#" className="hover:underline footer-link">Add a Listing</a></li>
            <li><a href="#" className="hover:underline footer-link">Claim Listing</a></li>
            <li><a href="#" className="hover:underline footer-link">Post a Query</a></li>
            <li><a href="#" className="hover:underline footer-link">Add a Blog Post</a></li>
            <li><a href="#" className="hover:underline footer-link">Other Queries</a></li>
          </ul>
        </div>

    
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul>
            <li><a href="#" className="hover:underline footer-link">Listings</a></li>
            <li><a href="#" className="hover:underline footer-link">Blog Posts</a></li>
            <li><a href="#" className="hover:underline footer-link">Shop / Store</a></li>
            <li><a href="#" className="hover:underline footer-link">Community</a></li>
          </ul>
        </div>

     
        <div>
          <h2 className="text-lg font-bold mb-4">Social Media</h2>
          <div className="flex gap-2 text-gray-600">
            <a href="#" className=" w-[25px] h-[25px] bg-[#80808035] rounded-full flex items-center justify-center  hover:text-blue-600 transition duration-200"><FaFacebookF />
            
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-200 w-[25px] h-[25px] bg-[#80808035] rounded-full flex items-center justify-center"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500 transition duration-200 w-[25px] h-[25px] bg-[#80808035] rounded-full flex items-center justify-center"><FaInstagram /></a>
            <a href="#" className="hover:text-red-600 transition duration-200 w-[25px] h-[25px] bg-[#80808035] rounded-full flex items-center justify-center"><FaPinterest /></a>
            <a href="#" className="hover:text-blue-700 transition duration-200 w-[25px] h-[25px] bg-[#80808035] rounded-full flex items-center justify-center"><FaGooglePlusG /></a>
            <a href="#" className="hover:text-red-500 transition duration-200 w-[25px] h-[25px] bg-[#80808035] rounded-full flex items-center justify-center"><FaYoutube /></a>
            <a href="#" className="hover:text-blue-500 transition duration-200 w-[25px] h-[25px] bg-[#80808035] rounded-full flex items-center justify-center"><FaTelegramPlane /></a>
            <a href="#" className="hover:text-gray-500 transition duration-200 w-[25px] h-[25px] bg-[#80808035] rounded-full flex items-center justify-center"><FaEnvelope /></a>
          </div>
          <h2 className="text-lg font-bold mt-4">Invite Friends</h2>
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="Email ID"
              className="p-2 rounded-l border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8064A2]"
            />
            <button className="p-2 bg-[#8064A2] text-white rounded-r hover:bg-[#684f87] transition duration-300">
              Invite
            </button>
          </div>
        </div>
      </div>

     
      <div className="text-center mt-8 text-gray-500 bg-gray-100 p-3 md:p-4 rounded-lg">
        &copy; {new Date().getFullYear()} Purple Cues Private Limited
      </div>
    </footer>
  );
};

export default Footer;

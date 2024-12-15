import React from 'react';
import community from '../../../..//public/assets/Group 99.png'
import Image from 'next/image';
const HobbyCommunity = () => {
    return (
        <section className='max-w-[1440px] mx-auto bg-blue-50 min-h-screen p-4 md:p-11' >
            <div className=" flex flex-col">
                <div className=" mt-10">
                    <h1 className="text-xl md:text-4xl font-bold italic">
                        Your <span className="text-purple-500">Hobby</span>, Your <span className="text-blue-500">Community</span>...
                    </h1>
                    <button className="mt-5 bg-[#8064A2] text-white py-2 px-4 rounded-[8px]">
                        Get started
                    </button>
                </div>
        
                <div className='mt-6'>
                    <Image alt='commutnity' src={community} className='w-full h-full' />
                </div>
                <div className="fixed bottom-5 right-5">
                    <button className="bg-gray-200 p-2 rounded-full">
                        <span className="sr-only">Go to top</span>
                        <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>

    );
};

export default HobbyCommunity;

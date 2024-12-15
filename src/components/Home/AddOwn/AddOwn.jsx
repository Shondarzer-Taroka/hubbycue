import React from 'react';
import { IoIosAddCircle } from "react-icons/io";

const AddOwn = () => {
    return (
        <div className='bg-[#f7fdff] max-w-[1440px] mx-auto h-[314px] px-11 py-11'>
            <div className='border border-[#CED4DA] rounded'>
                <div className='p-9 space-y-4'>
                    <button>
                        <span className='flex gap-5'><IoIosAddCircle className='text-[#0096C8] text-3xl font-bold' /> <h3 className='text-3xl font-bold'>Add your own</h3> </span>
                    </button>

                    <p>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should <br /> be on hobbycue?  Go ahead and Add your Own page</p>
                    <button className='px-4 py-2 border border-[#8064A2] text-[#8064A2] rounded-lg'>
                        Add new
                    </button>
                </div>
            </div>

        </div>
    );
};

export default AddOwn;
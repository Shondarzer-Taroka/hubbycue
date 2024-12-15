import React from 'react';
import { IoIosAddCircle } from "react-icons/io";

const AddOwn = () => {
    return (
        <div>
            <div>
                <button>
                    <span><IoIosAddCircle className='text-[#0096C8]' /></span>
                </button>

                <p>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>

            </div>
        </div>
    );
};

export default AddOwn;
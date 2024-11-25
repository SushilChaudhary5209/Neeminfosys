// import React from 'react'
// import { IoIosArrowRoundForward } from "react-icons/io";

// function Button() {
//     return (
//         <div>
//             <button className='h-[54px] gap-4 flex items-center justify-center rounded-full px-[6px] bg-green-500'>
//                 <span>
//                     Get Free Consulation
//                 </span>
//                 <div className='w-[42px] h-[42px] flex items-center justify-center'>
//                     <IoIosArrowRoundForward className=' rounded-full w-full h-full bg-white' />
//                 </div>
//             </button>
//         </div>
//     )
// }

// export default Button;



















// import React from 'react';
// import { IoIosArrowRoundForward } from "react-icons/io";

// function Button() {
//     return (
//         <div className=''>
//             <button className='h-[54px] gap-4 hover:gap-4 flex items-center justify-center rounded-full px-[6px] bg-green-500 hover:bg-white transition-all duration-3000 transform hover:flex-row-reverse group hover:shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)]'>
//                 <span className='transition-all duration-3000'>
//                     Get Free Consultation
//                 </span>
//                 <div className='w-[42px] h-[42px] flex items-center justify-center transition-all duration-3000 rounded-full hover:text-white group-hover:bg-green-500'>
//                     <IoIosArrowRoundForward className='rounded-full w-full h-full bg-white group-hover:bg-green-500 group-hover:text-white hover:text-white' />
//                 </div>
//             </button>
//         </div>
//     );
// }

// export default Button;

















// import React from 'react';
// import { IoIosArrowRoundForward } from "react-icons/io";

// function Button({ text }) {
//     return (
//         <div className=''>
//             <button className='h-[54px] gap-4 hover:gap-4 flex items-center justify-center rounded-full px-[6px] bg-green-500 hover:bg-white transition-all duration-3000 transform hover:flex-row-reverse group hover:shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)]'>
//                 <span className='transition-all duration-3000'>
//                     {text}
//                 </span>
//                 <div className='w-[42px] h-[42px] flex items-center justify-center transition-all duration-3000 rounded-full hover:text-white group-hover:bg-green-500'>
//                     <IoIosArrowRoundForward className='rounded-full w-full h-full bg-white group-hover:bg-green-500 group-hover:text-white hover:text-white' />
//                 </div>
//             </button>
//         </div>
//     );
// }

// export default Button;














import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

function Button({ text, mb }) {
    return (
        <div className=''>
            <button 
                className={`h-[54px] text-white hover:text-black gap-4 hover:gap-4 flex items-center justify-center rounded-full px-[12px] bg-[#3779d7] hover:bg-white transition-all duration-3000 transform hover:flex-row-reverse group 
                    hover:shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)] ${mb}`}
            >
                <span className=' transition-all duration-3000 text-[20px]'>
                    {text}
                </span>
                <div className='w-[42px] text-black h-[42px] flex items-center justify-center transition-all duration-3000 rounded-full hover:text-white group-hover:bg-[#3779d7]'>
                    <IoIosArrowRoundForward className='rounded-full w-full h-full bg-white group-hover:bg-[#3779d7] group-hover:text-white hover:text-white' />
                </div>
            </button>
        </div>
    );
}

export default Button;

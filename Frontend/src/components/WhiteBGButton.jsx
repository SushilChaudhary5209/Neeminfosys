
import React from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowRoundForward } from "react-icons/io";

function WhiteBGButton({ bgColor,  borderColor, hoverBgColor, text, iconBgColor, iconColor, hoverIconBgColor, groupHoverIconColor }) {
    return (
        <div>
            <button 
                className={`h-[54px] gap-4 hover:gap-4 flex items-center justify-center rounded-full px-[6px] border-2 ${bgColor} ${borderColor} hover:${hoverBgColor} transition-all duration-3000 transform hover:flex-row-reverse group hover:shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)]`}
            >
                <span className='transition-all duration-3000'>
                    {text}
                </span>
                <div className={`w-[42px] h-[42px] flex items-center justify-center transition-all duration-3000 rounded-full ${iconColor}`}>
                    <IoIosArrowRoundForward className={`rounded-full w-full h-full ${iconBgColor} group-hover:${hoverIconBgColor} shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)]  group-hover:${groupHoverIconColor}`} />
                </div>
            </button>
        </div>
    );
}

WhiteBGButton.propTypes = {
    bgColor: PropTypes.string,
    borderColor: PropTypes.string,
    hoverBgColor: PropTypes.string,
    text: PropTypes.string,
    iconBgColor: PropTypes.string,
    iconColor: PropTypes.string,
    hoverIconBgColor: PropTypes.string,
    groupHoverIconColor: PropTypes.string
};

WhiteBGButton.defaultProps = {
    bgColor: '',
    borderColor: 'border-[#2641c2]',
    hoverBgColor: 'bg-white',
    text: 'Free Website Audit',
    iconBgColor: '',
    iconColor: 'text-black',
    hoverIconBgColor: 'bg-[#2641c2]',
    groupHoverIconColor: 'text-white'
};

export default WhiteBGButton;

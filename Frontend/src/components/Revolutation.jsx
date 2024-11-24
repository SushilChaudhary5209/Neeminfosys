

import React, { useState } from 'react';
import neem_icon from '../../public/images/neem_icon.png';
import Circle_1 from '../../public/images/Circle-1.webp';
import Circle_2 from '../../public/images/Circle-2.webp';
import Circle_3 from '../../public/images/Circle-3.webp';
import Circle_4 from '../../public/images/Circle-4.webp';

const content = [
    {
        title: 'Tailored Solutions',
        description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
    },
    {
        title: 'Tailored Solutions',
        description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
    },
    {
        title: 'Tailored Solutions',
        description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
    },
    {
        title: 'Tailored Solutions',
        description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
    },
];

function Revolutation() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hoveredCircleIndex, setHoveredCircleIndex] = useState(null);

    const handleMouseEnterDiv = (index) => {
        setHoveredIndex(index);
        setHoveredCircleIndex(null);
    };

    const handleMouseEnterCircle = (index) => {
        setHoveredCircleIndex(index);
        setHoveredIndex(null);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        setHoveredCircleIndex(null);
    };

    return (
        <div className='w-[100%] flex justify-center items-center'>
            <div className='w-[70%] py-16 flex gap-12'>
                <div className='w-[40%] flex flex-col gap-4'>
                    {content.map((item, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => handleMouseEnterDiv(index)}
                            onMouseLeave={handleMouseLeave}
                            className={`p-4 rounded-lg shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)] 
                            ${(hoveredIndex === index || hoveredCircleIndex === index) ? 'bg-[#2641c2] text-white' : ''}
                            ${hoveredCircleIndex !== null && hoveredCircleIndex !== index ? 'opacity-50' : ''}`}
                        >
                            <p className='text-xl font-semibold'>{item.title}</p>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
                <div className='w-[60%] relative flex justify-center items-center'>
                    <div className='relative w-[503px] h-[503px]'>
                        <img
                            src={Circle_4}
                            alt="Circle 4"
                            onMouseEnter={() => handleMouseEnterCircle(3)}
                            onMouseLeave={handleMouseLeave}
                            className={`absolute inset-0 m-auto w-[503px] h-[503px] ${hoveredIndex !== 3 && hoveredIndex !== null ? 'opacity-50' : ''} ${hoveredCircleIndex !== 3 && hoveredCircleIndex !== null ? 'opacity-50' : ''}`}
                        />
                        <img
                            src={Circle_3}
                            alt="Circle 3"
                            onMouseEnter={() => handleMouseEnterCircle(2)}
                            onMouseLeave={handleMouseLeave}
                            className={`absolute inset-0 m-auto w-[390px] h-[390px] ${hoveredIndex !== 2 && hoveredIndex !== null ? 'opacity-50' : ''} ${hoveredCircleIndex !== 2 && hoveredCircleIndex !== null ? 'opacity-50' : ''}`}
                        />
                        <img
                            src={Circle_2}
                            alt="Circle 2"
                            onMouseEnter={() => handleMouseEnterCircle(1)}
                            onMouseLeave={handleMouseLeave}
                            className={`absolute inset-0 m-auto w-[283px] h-[283px] ${hoveredIndex !== 1 && hoveredIndex !== null ? 'opacity-50' : ''} ${hoveredCircleIndex !== 1 && hoveredCircleIndex !== null ? 'opacity-50' : ''}`}
                        />
                        <img
                            src={Circle_1}
                            alt="Circle 1"
                            onMouseEnter={() => handleMouseEnterCircle(0)}
                            onMouseLeave={handleMouseLeave}
                            className={`absolute inset-0 m-auto w-[180px] h-[180px] ${hoveredIndex !== 0 && hoveredIndex !== null ? 'opacity-50' : ''} ${hoveredCircleIndex !== 0 && hoveredCircleIndex !== null ? 'opacity-50' : ''}`}
                        />
                        <img
                            src={neem_icon}
                            alt="Neem Icon"
                            className='neem-icon absolute inset-0 m-auto w-[90px] h-[90px]'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Revolutation;

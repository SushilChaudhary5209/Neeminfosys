
import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import web_development from '../../public/images/web-development.png';
import digital_marketing from '../../public/images/digital marketing.png';
import software_applocation from '../../public/images/software application.png';
import cloud_services from '../../public/images/cloud-services.png';
import graphic_design from '../../public/images/graphic-design.png';
import Motion_graphics from '../../public/images/Motion Graphics.png';

function OurExpertise() {
  const expertiseData = [
    {
      image: web_development,
      title: 'Web Development',
      description: 'Crafting stunning websites that captivate, convert, and elevate your online presence. Unleash your potential today!',
    },
    { 
      image: digital_marketing,
      title: 'Digital Marketing',
      description: 'Elevate your brand with targeted strategies that drive engagement, conversions, and growth.',
    },
    {
      image: software_applocation,
      title: 'Software Application',
      description: 'Developing efficient, scalable software solutions tailored to meet your business needs.',
    },
    {
      image: cloud_services,
      title: 'Cloud Services',
      description: 'Seamless scalability, unrivaled security, and limitless possibilities. Elevate your business with our cloud services today!',
    },
    {
      image: graphic_design,
      title: 'Graphic Design',
      description: 'From concept to creation, our graphic design ignites imagination and breathes life into your brand.',
    },
    {
      image: Motion_graphics,
      title: 'Motion Graphics',
      description: 'Dazzle your audience with dynamic visuals. Elevate your brand with mesmerizing motion graphics solutions.',
    },
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {expertiseData.map((expertise, index) => (
        <div 
          key={index} 
          className={`expertise-card p-6 rounded-lg transition-colors duration-300 ${
            index % 2 === 0 
              ? 'bg-[#E6EBF1] hover:bg-[#C8D2DD]' 
              : 'bg-[#E8f1E9] hover:bg-[#D0E1D2]'
          }`}
        >
          <div className='w-[80px] h-[80px] mb-4'>
            <img src={expertise.image} alt={expertise.title} className='w-full h-full object-cover' />
          </div>
          <div className='mb-4'>
            <p className='font-semibold text-lg'>{expertise.title}</p>
            <p className=''>{expertise.description}</p>
          </div>
          <div className='icon-container w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white'>
            <IoIosArrowRoundForward className='w-[25px] h-[25px]' />
          </div>
        </div>
      ))}
    </div>
  );
}

export default OurExpertise;

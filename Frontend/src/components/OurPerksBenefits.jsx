
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
      title: 'Competitive salary',
      description: 'We strive to ensure that our people get competitive remuneration as per the industry standards.',
    },
    { 
      image: digital_marketing,
      title: 'Awards & Recognition',
      description: 'We are a company led by performers and we never fail to acknowledge the exemplary performance of our people.',
    },
    {
      image: software_applocation,
      title: 'Professional Development Plan',
      description: 'We continuously run training and development activities round the year.',
    },
    {
      image: cloud_services,
      title: 'Paid Time Off and Holidays',
      description: 'You get 13 days of festival holidays and 18 days of paid leaves every year.',
    },
    {
      image: graphic_design,
      title: 'Performance Evaluation',
      description: 'We have the latest performance management system to ensure that your performance and reward based on performance.',
    },
    {
      image: Motion_graphics,
      title: 'Workable Environment',
      description: 'We have peaceful and workable environment in our office. We make sure that there are no any things that cause disturbance.',
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

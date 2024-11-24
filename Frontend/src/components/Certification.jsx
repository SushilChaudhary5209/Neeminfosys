
import React, { useState } from 'react';
import artc from '../../public/images/artc.png';
import security from '../../public/images/security-1.png';
import dyamanics365 from '../../public/images/dynamics365-1.webp';
import associate from '../../public/images/associate-1.png';
import developer from '../../public/images/developer-1.png';

function Certification() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const cards = [
    { img: artc, title: 'AWS', subtitle1: 'Solutions Architect', subtitle2: 'Associate' },
    { img: security, title: 'AWS', subtitle1: 'Security', subtitle2: 'Speciality' },
    { img: dyamanics365, title: 'Microsoft', subtitle1: 'Dynamics 365', subtitle2: 'Fundamentals' },
    { img: associate, title: 'Microsoft', subtitle1: 'Associate', subtitle2: '' },
    { img: developer, title: 'AWS', subtitle1: 'Developer', subtitle2: 'Associate' },
  ];

  return (
    <div className='w-[80%] flex flex-col items-center justify-center'>
      <div className='w-[60%] flex flex-col items-center gap-4'>
        <p className='text-4xl font-semibold'>Certifications</p>
        <p className='text-center font-medium'>
          We keep deepening our expertise to meet your highest expectations and build even more innovative products.
        </p>
      </div>

      <div className='mt-12 flex gap-6'>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg flex flex-col items-center justify-center gap-4 bg-[#dce5f0] transition-opacity duration-300 ${
              hoveredCard !== null && hoveredCard !== index ? 'opacity-50' : 'opacity-100'
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <img src={card.img} alt="" />
            </div>
            <p className='font-medium'>{card.title}</p>
            <div className='flex flex-col items-center'>
              <p>{card.subtitle1}</p>
              <p>{card.subtitle2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certification;

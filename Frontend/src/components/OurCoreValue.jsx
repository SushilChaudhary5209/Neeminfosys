

import React from 'react';

const coreValues = [
  {
    id: 1,
    title: 'Customer-centricity',
    description: 'Prioritizing the needs and satisfaction of clients by providing personalized and efficient solutions.',
  },
  {
    id: 2,
    title: 'Innovation',
    description: 'Encouraging creativity and out-of-the-box thinking to develop unique and impactful IT solutions.',
  },
  {
    id: 3,
    title: 'Reliability',
    description: 'Ensuring the delivery of high-quality services and solutions consistently, exceeding client expectations.',
  },
  {
    id: 4,
    title: 'Collaboration',
    description: 'Promoting teamwork and collaboration within the organization and with clients to achieve shared goals.',
  },
  {
    id: 5,
    title: 'Responsible Freedom',
    description: 'We have the freedom to take responsibility for our work and hold ourselves accountable.',
  },
  {
    id: 6,
    title: 'Character',
    description: 'We believe that leadership is the combination of character and competency.',
  },
  {
    id: 7,
    title: 'Be Remarkable',
    description: 'We are passionate about what we do and aim for continuous improvement and growth.',
  },
  {
    id: 8,
    title: 'Celebrate Efforts',
    description: 'We appreciate and honour our people and the team\'s collective effort.',
  },
  {
    id: 9,
    title: 'Be Open-Minded',
    description: 'We believe sharing our problems and facing them together helps build a safe space.',
  },
];

function OurCoreValue() {
  return (
    <div className="w-[80%] flex flex-col items-center">
      <div className="w-[60%] flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-8">
          <p className="text-5xl font-semibold">Our core values</p>
          <p className="text-center text-lg font-medium">
            Our core values show what we are, form the foundation of our culture, and guide us in everything we do.
            We always live by our core values.
          </p>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-3 gap-6">
        {coreValues.map(({ id, title, description }) => (
          <div
            key={id}
            className="shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)]"
          >
            <div className="w-full flex">
              <div className="w-[20%] h-2 bg-[#2641c2] "></div>
              <div className="w-[80%] h-2 bg-[#d8ebda]"></div>
            </div>
            <div className="px-2 py-4 bg-white flex flex-col gap-4">
              <div className="flex items-center justify-start gap-2">
                <div className="w-10 h-10 bg-[#d8ebda] rounded-full flex items-center justify-center">{id}</div>
                <p className="text-2xl font-semibold">{title}</p>
              </div>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurCoreValue;



import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import about_breadcrumb from '../../public/images/about_breadcrumb.png';
import Button from '../components/Button';
import our_mission from '../../public/images/our-mission.png';
import our_vision from '../../public/images/our-vision.png';
import janak_bhatt from '../../public/images/janak-bhatt.png';
import rajendra_bhatt from '../../public/images/rajendra-bhatt.png';
import manojBudhaAyer from '../../public/images/manojBudhaAyer.png';
import ganeshojha from '../../public/images/ganeshojha.png';
import team_niraj_pal from '../../public/images/team-niraj-pal.png';
import team_roshan from '../../public/images/team-roshan.jpg';
import team_bikram_basnet from '../../public/images/team-bikram-basnet.png';
import OurCoreValue from '../components/OurCoreValue';
import CardSlider from '../components/CardSlider.jsx';


const milestones = [
  { count: '35+', label: 'Website Design' },
  { count: '200+', label: 'Social Media Clients' },
  { count: '15+', label: 'Team Member' },
  { count: '3+', label: 'Web Products' },
];

const missionPoints = [
  "To put effort towards realizing a digital ideal. Each and every company, no matter how big or little, starts with a dream. In the end, having a dream -or, as we prefer to refer to it, 'passion for the goal' -is a need.",
  "To provide them with the necessary tools so they can grow their business, stand out from the competition, and do more than just survive.",
  "We're on a mission to connect as many talented people as possible to create meaningful work where together we can learn, earn and serve our way to becoming leaders worth following.",
];

const visionPoints = [
  "We aim to transform cities into thriving digital centers, utilizing technology for enhanced connectivity, efficiency, and sustainability, benefiting residents and businesses.",
  "Empowering businesses with technology for sustainable growth through tailored IT solutions, optimizing operations, improving customer experiences, and driving success.",
  "Becoming a trusted global IT provider for businesses and the public in Nepal and beyond. Building strong client relationships with high-quality, tailored solutions to establish a reputable global presence."
];

const teamMembers = [
  {
    name: 'Janak Bhatt',
    role: 'Chief Executive Officer',
    imgSrc: janak_bhatt,
    bgColor: '#fbc244',
    description: 'He leads the strategic vision and overall direction of the company, leveraging his expertise and 2 years of experience to drive its growth and success.',
    linkedIn: <FaLinkedin className='text-3xl' />
  },
  {
    name: 'Rajendra Bhatt',
    role: 'Chief Business Development Officer',
    imgSrc: rajendra_bhatt,
    bgColor: '#ecb6ea',
    description: 'He Spearheads strategic partnerships ans business development, fostering growth and client relationships, backed by 5 years of invaluable expertise in marketing and business development.',
    linkedIn: <FaLinkedin className='text-3xl' />
  },
  {
    name: 'Manoj Budha Ayer',
    role: 'Chief Digital Marketing Officer',
    imgSrc: manojBudhaAyer,
    bgColor: '#f6c586',
    description: 'He leads comprehensive strategies for brand growth, merging technical development and digital marketing, with 4 years of hands-on experience in both domains.',
    linkedIn: <FaLinkedin className='text-3xl' />
  },
  {
    name: 'Ganesh Raj Ojha',
    role: 'Chief Administrative Officer',
    imgSrc: ganeshojha,
    bgColor: '#baa4ee',
    description: 'He oversees administrative operations, optimizing organizational efficiency as Neem Infosys\'s CAO, bringing 4 years of seasoned experience in administrative roles for operational excellence.',
    linkedIn: <FaLinkedin className='text-3xl' />
  },
  {
    name: 'Niraj Pal',
    role: 'Chief Technology Officer',
    imgSrc: team_niraj_pal,
    bgColor: '#baa4ee',
    description: 'He drives overall business strategy and growth, leveraging three years of Software Engineering expertise to lead technology innovation and development.',
    linkedIn: <FaLinkedin className='text-3xl' />
  },
  {
    name: 'Roshan Bist',
    role: 'Web Developer',
    imgSrc: team_roshan,
    bgColor: '#baa4ee',
    description: 'Roshan is a frontend web designer and WordPress developer at Neem Infosys.',
    linkedIn: <FaLinkedin className='text-3xl' />
  },
  {
    name: 'Bikram Basnet',
    role: 'Sr. Graphic Designer',
    imgSrc: team_bikram_basnet,
    bgColor: '#e9a28a',
    description: 'Bikram is a talented and creative senior graphic designer at Neem Infosys.',
    linkedIn: <FaLinkedin className='text-3xl' />
  }
];

function About() {
  return (
    <div>
      <section className='w-full py-12 flex justify-center items-center bg-[#e8f1e9]'>
        <div className='w-[80%] flex flex-row items-center'>
          <div className='w-[50%] flex flex-col gap-4'>
            <p className='text-5xl font-semibold'>About</p>
            <p className='text-5xl font-semibold'>
              <span className='text-[#2641c2]'>Neem</span> <span className='text-[#808285]'>Infosys</span>
            </p>
            <p>Neem Infosys is a full-service IT Company at Mahendranagar, Nepal. We develop user-centric websites, web apps, and Digital Marketing that grows startups and existing businesses in the sales and service industries.</p>
            <Button text="Get Free Consultation" />
          </div>
          <div className='w-[50%]'>
            <img src={about_breadcrumb} alt="About Neem Infosys" />
          </div>
        </div>
      </section>

      <section className='w-full flex justify-center'>
        <div className='w-[80%] mx-auto py-12 flex flex-col items-center gap-6'>
          <p className='text-5xl font-semibold'>How We Started</p>
          <p className='text-[#2641c2] font-semibold'>“Our success is measured by your success”</p>
          <p>After gaining almost two years of experience in the IT Industry with IT Zone and Sofsee Tech, our team felt confident enough to establish Neem Infosys Pvt. Ltd in July 2023. Comprising a group of passionate IT enthusiasts, we recognized the crucial role that IT companies and training institutes play in today's digital landscape.</p>
          <p>We were motivated to take action because Far Western Nepal lacked such capabilities, notably in the areas of IT consulting, training, and services. Neem Infosys aims to solve problems faced by students and IT enthusiasts in the IT field and to introduce local businesses to the digital world.</p>
          <p>Starting with five friends, we have since expanded to include over 15 members and a few interns. The company has also expanded its services to include a range of IT solutions (UX/UI Design, Website Development, Digital Marketing, Video Animation, Custom Software, and Cloud Services) and is dedicated to providing cutting-edge technology solutions to businesses and organizations around the world.</p>
        </div>
      </section>

      <section className='w-full flex justify-center'>
        <div className='w-[75%] px-6 py-6 bg-white rounded-lg relative top-14 flex justify-around shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)]'>
          {milestones.map((milestone, index) => (
            <div key={index} className='flex flex-col items-center'>
              <p className='text-4xl font-semibold text-[#2641c2]'>{milestone.count}</p>
              <p className='text-[#808285]'>{milestone.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='w-full bg-[#e8f1e9] pt-28 pb-14 flex flex-col items-center'>
        <div className='w-[80%] flex flex-col items-center gap-12'>
          <div className='w-full flex'>
            <div className='w-[50%] flex justify-center'>
              <img src={our_mission} alt="Our Mission" className='w-[70%]' />
            </div>
            <div className='w-[50%] flex flex-col gap-4'>
              <p className='text-xl font-semibold text-[#808285]'>OUR MISSION</p>
              <p className='text-4xl font-semibold text-[#2641c2]'>Easy solution, reasonable price and speedy job</p>
              <ul className='list-disc pl-5 px-6 flex flex-col gap-4'>
                {missionPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className='w-full flex'>
            <div className='w-[50%] flex flex-col gap-4'>
              <p className='text-xl font-semibold text-[#808285]'>OUR VISION</p>
              <p className='text-4xl font-semibold text-[#2641c2]'>Innovation, Reliability, and Exceptional Customer Service.</p>
              <ul className='list-disc pl-5 px-6 flex flex-col gap-4'>
                {visionPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className='w-[50%] h-auto flex justify-center'>
              <img src={our_vision} alt="Our Mission" className='w-[90%] h-auto' />
            </div>
          </div>
        </div>
      </section>

      <section className='w-full flex flex-col items-center'>
        <div className='w-[80%] flex flex-col items-center gap-6'>
          <p className='text-4xl font-semibold text-[#2641c2]'>Our team</p>
          <p className='font-semibold'>Our people mean the world to us</p>
          <div className='grid grid-cols-4 justify-center gap-6'>
            {teamMembers.map((member, index) => (
              <div key={index} className='w-[261px] flex flex-col items-center group'>
                <div className='rounded-lg bg-[#f8f8f8] group-hover:hidden'>
                  <div className={`bg-[${member.bgColor}] rounded-md`}>
                    <img src={member.imgSrc} alt={member.name} className='w-[261px] h-[261px] rounded-md' />
                  </div>
                  <div className='my-4 flex flex-col items-center'>
                    <p className='font-semibold'>{member.name}</p>
                    <p>{member.role}</p>
                  </div>
                </div>
                <div className='w-full p-8 text-white hidden rounded-lg hover:bg-[#2641c2] group-hover:block'>
                  <div>
                    <p className='font-semibold text-xl'>{member.name}</p>
                    <p className='pb-2 font-semibold text-lg'>{member.role}</p>
                    <p className='font-medium'>{member.description}</p>
                  </div>
                  <div className='mt-4 flex justify-end'>
                    {member.linkedIn}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button text="Join Our Team" />
        </div>
      </section>

      <section className='w-full mt-16 flex flex-col items-center'>
        <OurCoreValue />
      </section>
      <section className='my-12 w-full flex flex-col items-center justify-center'>
        <div className='w-[80%] flex flex-col items-center justify-center gap-6'>
          <div className='flex flex-col items-center gap-4'>
            <p className='text-4xl font-semibold'>Let’s Hear What Our Clients Say</p>
            <p className='text-lg font-medium'>We transform clients’ ideas into reality. Let’s see what made them love our work.</p>
          </div>
          <div className='w-full flex'>
            <CardSlider />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

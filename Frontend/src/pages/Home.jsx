
import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from '../components/Button';
import WhiteBGButton from '../components/WhiteBGButton';
import heroVideo from '../../public/videos/hero-animation-video.webm';
import ict_award from '../../public/images/ict-award.png';
import ict_award_banner_neem_infosys from '../../public/images/ict-award-banner-neem-infosys.jpg';
import ImageSlider from '../components/ImageSlider.jsx';
import Revolutation from '../components/Revolutation.jsx';
import Young_woman from '../../public/images/young_woman.png';
import OurExpertise from '../components/OurExpertise.jsx';
import partner from '../../public/images/partner.png';
import CardSlider from '../components/CardSlider.jsx';
import TechonologyStack from '../components/TechonologyStack.jsx';
import OurPartner from '../components/OurPartner.jsx';
import laptop from '../../public/images/laptop.webp';
import WhyChoseUs from '../components/WhyChoseUs.jsx';
import how_we_work from '../../public/images/how-we-work.webp';
import benefitsinvestingerp from '../../public/images/7-benefits-investing-erp.jpg';
import top_web_features_min from '../../public/images/top-10-web-features-min.jpg';
import Certification from '../components/Certification.jsx';
import Contact from './Contact.jsx'

const services = [
  {
    title: "Dedicated Development Team",
    description: "Our dedicated development team aims to fulfill all your software, app, web, or other development needs.",
    bgColor: "#e8f1e9"
  },
  {
    title: "End-To-End Software Development",
    description: "From planning and coding to testing and releasing, we have a team of professionals for end-to-end software development.",
    bgColor: "#e6ebf1"
  },
  {
    title: "POC/MVP Development",
    description: "Mitigate risks, maximize success, and drive results transforming development strategy with MVP software development.",
    bgColor: "#d7ebd9"
  }
];

function Home() {
  return (
    <div className='relative'>
      <section>
        <div className='w-full lg:px-32 md:px-10 px-2 flex flex-col lg:flex-row items-center lg:items-start gap-20'>
          <div className='md:w-[50%] w-[100%] py-12 flex flex-col gap-8'>
            <h1 className='text-5xl font-semibold flex flex-col items-center lg:items-start gap-2'>
              <p>
                <span> Build Your </span>
                <span className='text-[#2641c2]'> Idea’s </span>
              </p>
              <p>
                <span> Your </span>
                <span className='text-[#2641c2]'> Business </span>
              </p>
              <p>
                <span> with </span>
                <span className='text-[#2641c2]'> Neem </span>
                <span className='text-[#808285]'> Infosys </span>
              </p>
            </h1>
            <div className='text-center md:text-start'>
              <p className='text-xl font-medium'>
                We develop user-centric website, web apps and Digital Marketing that grows startup and existing businesses in the sales and service industries.
              </p>
            </div>
            <div className='flex justify-center lg:justify-start gap-4'>
              <Button text="Get Free Consulation" />
              <WhiteBGButton />
            </div>
          </div>
          <div className='w-[50%]'>
            <video autoPlay muted loop playsInline>
              <source src={heroVideo} type='video/webm' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className='lg:px-32 md:px-10 px-2 relative top-52 bg-[#2641c2]'>
        <div className='flex gap-6 relative bottom-36 rounded-md bg-white shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)]'>
          <div className='mx-auto p-4 flex flex-col lg:flex-row gap-6'>
            {services.map((service, index) => (
              <div key={index} className={`bg-[${service.bgColor}] rounded-md group flex flex-col gap-4`}>
                <div className='px-8 pt-8 flex items-center justify-between'>
                  <div className='text-xl font-semibold'>
                    <p>{service.title.split(' ')[0]}</p>
                    <p>{service.title.split(' ').slice(1).join(' ')}</p>
                  </div>
                  <div className='w-[42px] h-[42px]'>
                    <IoIosArrowRoundForward className="rounded-full w-full h-full bg-[#808285] transform transition-transform duration-1000 group-hover:rotate-[360deg]" />
                  </div>
                </div>
                <div className='px-8 pb-8 font-medium'>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='relative bottom-20 text-white flex flex-col items-center lg:flex-row gap-12'>
          <div className='w-full lg:w-[65%] px-4 flex flex-col items-center lg:items-start gap-2'>
            <p className='text-xl font-medium'>Trusted by</p>
            <p className='text-3xl font-semibold'>1000+ Successful Brands, We Take Charge of 6+ Services in 3+ Industries</p>
          </div>
          <div className='w-full lg:w-[35%] text-2xl font-semibold flex flex-col justify-center items-center'>
            <p>ICT AWARD</p>
            <p>WINNING COMPANY</p>
          </div>
        </div>
      </section>

      <section>
        <div className='mt-52 lg:px-32 md:px-10 px-2 pt-12 flex justify-between'>
          <div className='flex flex-col gap-2'>
            <div className='text-4xl font-bold flex flex-col gap-2'>
              <p>Awards &</p>
              <p>Recognition</p>
            </div>
            <div className='text-xl'>
              <p><span>We have won the</span> <span>𝑩𝒆𝒔𝒕 𝑺𝒕𝒂𝒓𝒕𝒖𝒑</span> <span> of </span></p>
              <p><span>𝑺𝒖𝒅𝒖𝒓𝒑𝒂𝒔𝒄𝒉𝒊𝒎 𝑷𝒓𝒐𝒗𝒊𝒏𝒄𝒆</span> <span> from the </span><span>𝑰𝑪𝑻 𝑨𝒘𝒂𝒓𝒅𝒔</span></p>
              <p><span>2023</span> <span>𝑵𝒆𝒑𝒂𝒍.</span></p>
            </div>
          </div>
          <div className='shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)]'>
            <div className='w-[217px] h-[164px] flex justify-center items-center bg-[#2641c2]'>
              <img src={ict_award} alt="" className='w[213px] h-[160px]' />
            </div>
            <p className='text-center'>ICT Award 2023</p>
          </div>
        </div>
        <div className='flex justify-center mt-8'>
          <img src={ict_award_banner_neem_infosys} alt="" />
        </div>
      </section>
      <section>
        <div className='w-full mb-12 bg-[#e8f1e9] flex flex-col items-center'>
          <div className='w-full bg-[#e8f1e9] flex flex-col items-center'>
            <p className='text-5xl font-semibold'>Featured Projects</p>
            <p className='text-lg font-medium'>Explore our affordable products, that help setting new standards to grow your business</p>
            <p className='text-lg font-medium'>easing and maintaining your day to day work through excellent IT solutions.</p>
          </div>
          <div className='w-full mb-12'>
            <ImageSlider />
          </div>
          <Button text="View More" mb="mb-8" />
        </div>
      </section>
      <section className='mt-12'>
        <div className='flex justify-center'>
          <p className='text-3xl font-semibold'>Revolutionizing Businesses with Excellence & Expertise</p>
        </div>
        <Revolutation />
      </section>
      <section className='w-full flex flex-col items-center justify-center'>
        <div className='w-[70%] rounded-lg bg-[#dee0e5] ps-8 py-2 pe-2 flex gap-8'>
          <div className='w-[60%] py-6 flex flex-col gap-8'>
            <div className='text-5xl font-semibold flex flex-col gap-6'>
              <p> <span className='text-[#2641c2]'>Let’s Build</span> <span>the Future of</span></p>
              <p>Technology Together</p>
            </div>
            <div>
              <p>Let our team provide you with a no-cost, no-commitment technical proposal for your next enterprise custom project.</p>
            </div>
            <div>
              <WhiteBGButton bgColor='bg-white' borderColor="border-white" hoverBgColor="bg-[#444444]" text="Get Free Conculation" hoverIconBgColor="bg-[#2641c2]" iconBgColor='bg-[#2641c2]' iconColor="text-white" groupHoverIconColor="text-white" />
            </div>
          </div>
          <div className='w-[40%]'>
            <img src={Young_woman} alt="" className='w-[80%]' />
          </div>
        </div>
      </section>
      <section className='my-12 w-full flex flex-col items-center justify-center'>
        <div className='w-[70%] flex flex-col items-center justify-center gap-6'>
          <div className='flex flex-col items-center gap-6'>
            <p className='text-5xl font-semibold'>Our Expertise</p>
            <p className='text-lg font-medium'>We build digital solutions with the latest technologies that line up with your business goals.</p>
          </div>
          <div>
            <OurExpertise />
          </div>
          <div className='w-full flex mt-12'>
            <div className='w-[50%] flex flex-col gap-4'>
              <p className='text-xl font-semibold'>Become a Partner</p>
              <p className='text-4xl font-semibold'>Alone We Are a Drop of Water; Together an Ocean</p>
              <p className='text-md'>Let our team provide you with a no-cost, no-commitment technical proposal for your next enterprise custom project.</p>
              <Button text="Get Free Consulation" />
            </div>
            <div className='w-[50%]'>
              <img src={partner} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className='w-full flex justify-center'>
        <TechonologyStack />
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


      <section className='w-full flex justify-center'>
        <OurPartner />
      </section>

      <section className='w-full mt-24 flex justify-center'>
        <div className='w-[80%] flex items-center justify-center gap-6 bg-black rounded-xl'>
          <div className='w-[60%] relative text-white'>
            <p className='text-3xl relative left-16 font-semibold'>Our Robust Mobile & Web App Development Solutions Stands Your Business at the Top!</p>
            <div className='ms-16 mt-6'>
              <Button text="Get Free Consulation" />
            </div>
          </div>
          <div className='w-[40%]'>
            <img src={laptop} alt="" />
          </div>
        </div>
      </section>

      <section className='w-full mt-24 flex justify-center'>
        <WhyChoseUs />
      </section>

      <section className='w-full mt-24 flex justify-center'>
        <div className='w-[80%] flex flex-col items-center justify-center gap-6'>
          <div className='w-[60%] flex flex-col items-center gap-4'>
            <p className='text-4xl font-semibold'>How we work?</p>
            <p className='text-center font-medium'>
              They’ll Love Your Product. You’ll Love Our Process.
            </p>
          </div>
          <div className='w-[80%] mt-6'>
            <img src={how_we_work} alt="" />
          </div>
        </div>
      </section>

      <section className='w-full mt-24 flex justify-center'>
        <div className='w-[80%] flex flex-col items-center justify-center gap-6'>
          <div className='w-[60%] flex flex-col items-center gap-4'>
            <p className='text-4xl font-semibold'>Featured Blog</p>
            <p className='text-center font-medium'>
              Check out our guides to stay updated with the market and economy.
            </p>
          </div>
          <div className='flex gap-6'>
            <div className='w-[50%] flex items-center gap-4 p-4 rounded-lg bg-[#e6ebf1]'>
              <div className=''>
                <img src={benefitsinvestingerp} alt="" className='rounded-lg' />
              </div>
              <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-3 font-medium'>
                  <p className='text-[#2641c2]'>2 Feb 2024</p>
                  <p>Top 7 Benefits of Investing in Enterprise Software Development!</p>
                </div>
                <div>
                  <WhiteBGButton bgColor='bg-white' borderColor="border-white" hoverBgColor="bg-[#444444]" text="Read More" hoverIconBgColor="bg-[#2641c2]" iconBgColor='bg-[#2641c2]' iconColor="text-white" groupHoverIconColor="text-white" />
                </div>
              </div>
            </div>
            <div className='w-[50%] flex items-center gap-4 p-4 rounded-lg bg-[#e8f1e9]'>
              <div className=''>
                <img src={top_web_features_min} alt="" className='rounded-lg' />
              </div>
              <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-3 font-medium'>
                  <p className='text-[#2641c2]'>2 Feb 2024</p>
                  <p>Top 10 Essential Features to Include in a Web App: A Detailed Guide!</p>
                </div>
                <div>
                  <WhiteBGButton bgColor='bg-white' borderColor="border-white" hoverBgColor="bg-[#444444]" text="Read More" hoverIconBgColor="bg-[#2641c2]" iconBgColor='bg-[#2641c2]' iconColor="text-white" groupHoverIconColor="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Button text="View More" />
          </div>
        </div>
      </section>

      <section className='w-full mt-24 flex justify-center'>

        <Certification />
       
      </section>

      <section className='mb-8 mt-8'>
        <Contact />
      </section>
    </div>
  );
}

export default Home;

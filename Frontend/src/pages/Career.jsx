

// import React from 'react';
// import { IoIosArrowRoundForward } from "react-icons/io";
// import OurPerksBenefits from '../components/OurPerksBenefits';
// import crer_bnn_img from '../../public/images/crer_bnn_img.svg';
// import screening from '../../public/images/screening.png';
// import interview from '../../public/images/interview.png';
// import selection from '../../public/images/selection.png';
// import onboarding from '../../public/images/onboarding.png';
// import growth from '../../public/images/growth.png';
// import OurCoreValue from '../components/OurCoreValue';
// import CareerCardSlider from '../components/CareerCardSlider';
// import AllYourQuestionAns from '../components/AllYourQuestionAns';
// import ApplyForJob from '../components/ApplyForJob';


// const jobTitles = [
//   "Internships", "Graphic Designer", "Sales & Marketing", "Graphic & Motion Designer", "Accountant", "Web Developer", {/*  add hrefs  */}
// ];

// const hiringProcessSteps = [
//   { img: screening, title: "Screening", desc: ["CV screening", "CV shortlisting", "Interview scheduling"] },
//   { img: interview, title: "Interview", desc: ["Technical interview", "HR interview", "Presentation (optional)"] },
//   { img: selection, title: "Selection", desc: ["Person-job fit review", "Cultural fit review", "Candidate finalization", "Offer letter signing"] },
//   { img: onboarding, title: "Onboarding", desc: ["Welcome to Neem Infosys family!", "Company orientation", "Team orientation", "Project orientation"] },
//   { img: growth, title: "Probation and Growth", desc: ["6 months of probation", "Learning plan", "Performance and competency review", "Growth opportunity", "Transition plan", "Succession plan"] }
// ];

// const Career = () => (
//   <div>
//     <section className='w-full flex flex-col items-center'>
//       <div className='w-full flex justify-center bg-[#d6e9fb]'>
//         <div className='w-[80%] my-10 flex justify-center'>
//           <div className='w-[50%] flex flex-col justify-center gap-1'>
//             <p className='text-3xl font-semibold text-[#2641c2]'>BE A PART OF</p>
//             <p className='text-4xl font-bold'>Our Successful Journey</p>
//             <p className='text-lg font-medium'>Create Your Career in IT Company</p>
//           </div>
//           <div className='w-[50%]'>
//             <img src={crer_bnn_img} alt="Career Banner" />
//           </div>
//         </div>
//       </div>
//     </section>

//     <section className='w-full mt-24 flex justify-center'>
//       <div className='w-[80%] flex flex-col items-center'>
//         <div className='w-[60%] flex flex-col items-center gap-4'>
//           <p className='text-5xl font-semibold'>Career Opportunities</p>
//           <p className='text-center font-medium'>We are looking for Innovative Thinkers and Creative Executors. Join Us to Challenge, Collaborate, Build and Inspire</p>
//         </div>
//         <div className='w-full mt-12 flex flex-col items-center justify-center gap-8'>
//           {jobTitles.map((title, index) => (
//             <div key={index} className='w-full p-6 rounded-md flex justify-center shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0),4px_0px_10px_-4px_rgba(0,0,0,0.3)]'>
//               <a href="/careers/careerinternship" className='w-[80%] text-[#444444] text-xl font-semibold'>{title}</a>
//               <div className='w-[20%] flex justify-end text-blue-500'>
//                 <a href="/careers/careerinternship" className='flex items-center'>
//                   <p>View job</p>
//                   <IoIosArrowRoundForward className='text-2xl' />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>

//     <section className='w-full mt-24 flex justify-center'>
//       <div className='w-[80%] flex flex-col items-center justify-center'>
//         <div className='flex flex-col items-center gap-6'>
//           <p className='text-5xl font-semibold'>Our Perks & Benefits</p>
//           <p className='w-[70%] text-md font-medium'>We expect our employees to give us their best, and we’re committed to doing the same. It’s why we offer a variety of facilities and benefits designed to keep you excited about working at Neem Infosys.</p>
//         </div>
//         <div className='mt-8'>
//           <OurPerksBenefits />
//         </div>
//       </div>
//     </section>

//     <section className='w-full mt-12 py-12 flex justify-center bg-[#e6ebf1]'>
//       <div className='w-[80%] flex flex-col justify-between items-center gap-24'>
//         <div className='w-[70%] flex flex-col items-center justify-center gap-2'>
//           <p className='text-5xl font-semibold'>Our Hiring process</p>
//           <p className='text-center text-md font-medium'>Nothing we do is more vital than hiring the right people for the right job. We have a slick and seamless process to get you onboard. We will leave no stones unturned to start your journey smoothly and progressively.</p>
//         </div>
//         <div className='w-full flex justify-between'>
//           {hiringProcessSteps.map((step, index) => (
//             <div key={index} className='group flex flex-col gap-4'>
//               <div className='w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center'>
//                 {index + 1}
//               </div>
//               <div className='w-[61px] h-[60px]'>
//                 <img src={step.img} alt={step.title} className='filter grayscale group-hover:filter-none' />
//               </div>
//               <div>
//                 <p className='font-semibold text-xl'>{step.title}</p>
//                 {step.desc.map((text, i) => <p key={i}>{text}</p>)}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>

//     <section className='w-full mt-16 flex flex-col items-center'>
//       <OurCoreValue />
//     </section>

//     <section className='w-full mt-16 flex flex-col items-center'>
//       <CareerCardSlider />
//     </section>

//     <section className='w-full mt-16 flex flex-col items-center bg-[#e6ebf1]'>
//       <AllYourQuestionAns />
//     </section>

//     <section className='w-full mt-16 flex flex-col items-center'>
      
//        <ApplyForJob />
      
//     </section>
//   </div>
// );

// export default Career;


















import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import OurPerksBenefits from '../components/OurPerksBenefits';
import crer_bnn_img from '../../public/images/crer_bnn_img.svg';
import screening from '../../public/images/screening.png';
import interview from '../../public/images/interview.png';
import selection from '../../public/images/selection.png';
import onboarding from '../../public/images/onboarding.png';
import growth from '../../public/images/growth.png';
import OurCoreValue from '../components/OurCoreValue';
import CareerCardSlider from '../components/CareerCardSlider';
import AllYourQuestionAns from '../components/AllYourQuestionAns';
import ApplyForJob from '../components/ApplyForJob';

const jobTitles = [
  { title: "Internships", href: "/careers/careerinternship" },
  { title: "Graphic Designer", href: "/careers/graphic-designer" },
  { title: "Sales & Marketing", href: "/careers/sales-marketing" },
  { title: "Graphic & Motion Designer", href: "/careers/graphic-motion-designer" },
  { title: "Accountant", href: "/careers/accountant" },
  { title: "Web Developer", href: "/careers/web-developer" },
];

const hiringProcessSteps = [
  { img: screening, title: "Screening", desc: ["CV screening", "CV shortlisting", "Interview scheduling"] },
  { img: interview, title: "Interview", desc: ["Technical interview", "HR interview", "Presentation (optional)"] },
  { img: selection, title: "Selection", desc: ["Person-job fit review", "Cultural fit review", "Candidate finalization", "Offer letter signing"] },
  { img: onboarding, title: "Onboarding", desc: ["Welcome to Neem Infosys family!", "Company orientation", "Team orientation", "Project orientation"] },
  { img: growth, title: "Probation and Growth", desc: ["6 months of probation", "Learning plan", "Performance and competency review", "Growth opportunity", "Transition plan", "Succession plan"] }
];

const Career = () => (
  <div>
    <section className='w-full flex flex-col items-center'>
      <div className='w-full flex justify-center bg-[#d6e9fb]'>
        <div className='w-[80%] my-10 flex justify-center'>
          <div className='w-[50%] flex flex-col justify-center gap-1'>
            <p className='text-3xl font-semibold text-[#2641c2]'>BE A PART OF</p>
            <p className='text-4xl font-bold'>Our Successful Journey</p>
            <p className='text-lg font-medium'>Create Your Career in IT Company</p>
          </div>
          <div className='w-[50%]'>
            <img src={crer_bnn_img} alt="Career Banner" />
          </div>
        </div>
      </div>
    </section>

    <section className='w-full mt-24 flex justify-center'>
      <div className='w-[80%] flex flex-col items-center'>
        <div className='w-[60%] flex flex-col items-center gap-4'>
          <p className='text-5xl font-semibold'>Career Opportunities</p>
          <p className='text-center font-medium'>We are looking for Innovative Thinkers and Creative Executors. Join Us to Challenge, Collaborate, Build and Inspire</p>
        </div>
        <div className='w-full mt-12 flex flex-col items-center justify-center gap-8'>
          {jobTitles.map((job, index) => (
            <div key={index} className='w-full p-6 rounded-md flex justify-center shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0),4px_0px_10px_-4px_rgba(0,0,0,0.3)]'>
              <a href={job.href} className='w-[80%] text-[#444444] text-xl font-semibold'>{job.title}</a>
              <div className='w-[20%] flex justify-end text-blue-500'>
                <a href={job.href} className='flex items-center'>
                  <p>View job</p>
                  <IoIosArrowRoundForward className='text-2xl' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className='w-full mt-24 flex justify-center'>
      <div className='w-[80%] flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center gap-6'>
          <p className='text-5xl font-semibold'>Our Perks & Benefits</p>
          <p className='w-[70%] text-md font-medium'>We expect our employees to give us their best, and we’re committed to doing the same. It’s why we offer a variety of facilities and benefits designed to keep you excited about working at Neem Infosys.</p>
        </div>
        <div className='mt-8'>
          <OurPerksBenefits />
        </div>
      </div>
    </section>

    <section className='w-full mt-12 py-12 flex justify-center bg-[#e6ebf1]'>
      <div className='w-[80%] flex flex-col justify-between items-center gap-24'>
        <div className='w-[70%] flex flex-col items-center justify-center gap-2'>
          <p className='text-5xl font-semibold'>Our Hiring process</p>
          <p className='text-center text-md font-medium'>Nothing we do is more vital than hiring the right people for the right job. We have a slick and seamless process to get you onboard. We will leave no stones unturned to start your journey smoothly and progressively.</p>
        </div>
        <div className='w-full flex justify-between'>
          {hiringProcessSteps.map((step, index) => (
            <div key={index} className='group flex flex-col gap-4'>
              <div className='w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center'>
                {index + 1}
              </div>
              <div className='w-[61px] h-[60px]'>
                <img src={step.img} alt={step.title} className='filter grayscale group-hover:filter-none' />
              </div>
              <div>
                <p className='font-semibold text-xl'>{step.title}</p>
                {step.desc.map((text, i) => <p key={i}>{text}</p>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className='w-full mt-16 flex flex-col items-center'>
      <OurCoreValue />
    </section>

    <section className='w-full mt-16 flex flex-col items-center'>
      <CareerCardSlider />
    </section>

    <section className='w-full mt-16 flex flex-col items-center bg-[#e6ebf1]'>
      <AllYourQuestionAns />
    </section>

    <section className='w-full mt-16 flex flex-col items-center'>
      <ApplyForJob />
    </section>
  </div>
);

export default Career;

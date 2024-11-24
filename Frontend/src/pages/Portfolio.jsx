import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Lba_logo2 from '../../public/images/Lba.png';
import Lba_college from '../../public/images/Lba-college.png';
import Mantra from '../../public/images/mantra.png';
import mantra_hospital from '../../public/images/mantra-hospital.png';
import Nava_Srijana from '../../public/images/Nava-Srijana.png';
import Nabsrijana from '../../public/images/nabsrijana.png';
import Sumnima_Herbal_Logo from '../../public/images/Sumnima Herbal Logo 1.png';
import skinlite from '../../public/images/skinlite.png';
import farwest_khabar from '../../public/images/farwest-khabar.png';
import farwestkhabar from '../../public/images/farwestkhabar.png';
import homesnepal from '../../public/images/homesnepal 1.png';
import homes_nepal from '../../public/images/homes-nepal.png';

const projects = [
    {
        img: Lba_logo2,
        alt: 'Lba Logo',
        description: '- College Website',
        content: 'A college website that helps students to quickly view college notices, download educational resources, quick contact to college and much more.',
        tech: 'HTML, CSS, JS, PHP, MySQL',
        buttonColor: 'bg-[#ff9900]',
        textColor: 'text-[#ff9900]',
        borderColor: 'border-[#ff9900]',
        bgColor: 'bg-[#f5e1bf]',
        liveImg: Lba_college,
    },
    {
        img: Mantra,
        alt: 'Hospital Logo',
        description: '- Hospital Website',
        content: 'A hospital website that helps patients to book their appointment, get health package, quick contact to the hospital, and get health related tips and updates.',
        tech: 'HTML, CSS, JS, PHP, MySQL',
        buttonColor: 'bg-[#006aff]',
        textColor: 'text-[#006aff]',
        borderColor: 'border-[#006aff]',
        bgColor: 'bg-[#cadcf6]',
        liveImg: mantra_hospital,
    },
    {
        img: Nava_Srijana,
        alt: 'Cooperative Logo',
        description: '- Cooperative Organization Website',
        content: 'A cooperative organization website that provides organizational services, reports, news and events, download different documents, pay through QR etc through single website.',
        tech: 'HTML, CSS, JS, PHP, MySQL',
        buttonColor: 'bg-[#ff9900]',
        textColor: 'text-[#ff9900]',
        borderColor: 'border-[#ff9900]',
        bgColor: 'bg-[#f5e1bf]',
        liveImg: Nabsrijana,
    },
    {
        img: Sumnima_Herbal_Logo,
        alt: 'Cosmetic Logo',
        description: '- Cosmetic Website',
        content: 'A cosmetic website that shows cosmetic products with their details, dealership form, feedback form, information about distributors etc.',
        tech: 'HTML, CSS, JS, PHP, MySQL',
        buttonColor: 'bg-[#1fa741]',
        textColor: 'text-[#1fa741]',
        borderColor: 'border-[#1fa741]',
        bgColor: 'bg-[#cfead5]',
        liveImg: skinlite,
    },
    {
        img: farwest_khabar,
        alt: 'News Logo',
        description: '- News Website',
        content: 'A news website that shows recent news, news with different categories. It also contains news share and comment option as well as sufficient space for ads placement.',
        tech: 'HTML, CSS, JS, PHP, MySQL',
        buttonColor: 'bg-[#ff9900]',
        textColor: 'text-[#ff9900]',
        borderColor: 'border-[#ff9900]',
        bgColor: 'bg-[#f5e1bf]',
        liveImg: farwestkhabar,
    },
    {
        img: homesnepal,
        alt: 'Construction Logo',
        description: '- Construction Website',
        content: 'A construction website that provides different construction services, information about running and completed construction projects, construction work insights, and quick contact.',
        tech: 'HTML, CSS, JS, PHP, MySQL',
        buttonColor: 'bg-[#006aff]',
        textColor: 'text-[#006aff]',
        borderColor: 'border-[#006aff]',
        bgColor: 'bg-[#cadcf6]',
        liveImg: homes_nepal,
    }
];

function Portfolio() {
    return (
        <div className='mb-20 z-0 flex flex-col items-center gap-6'>
            <p className='text-5xl font-semibold'>
                <span className='text-green-500'>Transform</span> <span>The World With Your Idea.</span>
            </p>
            <p className='text-xl'>From dream to reality, here are some projects we are proud to be part of.</p>
            <div className='w-[80%] mt-20 flex gap-6'>
                <div className='sticky top-32 w-[25%] rounded-lg bg-[#ceead5] h-80'>
                    <ul className='px-6 py-8 font-semibold flex flex-col gap-4'>
                        <li>All</li>
                        <li>Website</li>
                        <li>Graphics Design</li>
                        <li>Motion Graphics</li>
                        <li>Video Editing</li>
                        <li>UI/UX Design</li>
                        <li>Web Application</li>
                    </ul>
                </div>
                <div className='w-[75%] flex flex-col gap-2'>
                    <p className='text-3xl font-semibold'>Website</p>
                    <div className='flex flex-col gap-10'>
                        {projects.map((project, index) => (
                            <div key={index} className={`group p-8 flex justify-center items-center rounded-lg ${project.bgColor}`}>
                                <div className='flex flex-col gap-6'>
                                    <div className='flex items-center gap-2'>
                                        <div>
                                            <img src={project.img} alt={project.alt} />
                                        </div>
                                        <p className={`text-xl font-semibold group-hover:${project.textColor} leading-relaxed`}>
                                            {project.description}
                                        </p>
                                    </div>
                                    <p className='leading-relaxed'>{project.content}</p>
                                    <div className='flex gap-2'>
                                        <p className='font-semibold'>Technology</p>
                                        <p className='text-[16px] leading-relaxed'>{project.tech}</p>
                                    </div>
                                    <div>
                                        <button className={`px-2 py-1 rounded-md border-2 flex items-center justify-center border-black group-hover:${project.buttonColor} group-hover:text-white group-hover:${project.borderColor}`}>
                                            <p>View Live</p>
                                            <IoIosArrowRoundForward className='text-4xl' />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <img src={project.liveImg} alt='Live preview' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;

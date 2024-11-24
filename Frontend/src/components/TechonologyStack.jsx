
import React, { useState } from 'react';
import React_Native from '../../public/images/React-Native.png';
import bootstrap from '../../public/images/bootstrap.jpeg';
import Vuejs_ from '../../public/images/Vue.js_.png';
import NodeJS from '../../public/images/NodeJS.png';
import TypeScript from '../../public/images/TypeScript.png';
import PHP from '../../public/images/PHP.png';
import Swift from '../../public/images/Swift.png';
import objC from '../../public/images/obj.png';
import kotlin from '../../public/images/Kotlin.webp';
import Flutter from '../../public/images/Flutter.png';

function TechnologyStack() {
    const [webHovered, setWebHovered] = useState(null);
    const [mobileHovered, setWMobilebHovered] = useState(null);

    const webHandleMouseEnter = (tech) => {
        setWebHovered(tech);
    };

    const webHandleMouseLeave = () => {
        setWebHovered(null);
    };

    const mobileHandleMouseEnter = (tech) => {
        setWMobilebHovered(tech);
    };

    const mobileHandleMouseLeave = () => {
        setWMobilebHovered(null);
    };

    const WebAppDevelopment = [
        { name: 'React JS', image: React_Native },
        { name: 'Bootstrap', image: bootstrap },
        { name: 'Vue', image: Vuejs_ },
        { name: 'Node JS', image: NodeJS },
        { name: 'TypeScript', image: TypeScript },
        { name: 'PHP', image: PHP },
    ];

    const MobileAppDevelopment = [
        { name: 'Swift', image: Swift },
        { name: 'Objective-C', image: objC },
        { name: 'Kotlin', image: kotlin },
        { name: 'Flutter', image: Flutter },
        { name: 'React Native', image: React_Native },
    ];

    return (
        <div className='w-[70%] flex flex-col items-center justify-center gap-6'>
            <div className='w-[60%] flex flex-col items-center gap-4'>
                <p className='text-5xl font-semibold'>Technology Stack</p>
                <p className='text-center font-medium'>
                    Our engineers apprehend your business requirements and help you choose the right technology for your solution.
                </p>
            </div>
            <div className='w-full flex flex-col gap-6'>
                <div className='w-full flex items-center gap-12 rounded-xl p-8 bg-[#f3f6fb]'>
                    <div className='text-4xl font-semibold'>
                        <p>Web App</p>
                        <p>Development</p>
                    </div>
                    <div className='w-full flex justify-between'>
                        <div className='w-full flex flex-col gap-8'>
                            <p className='font-semibold'>Frontend</p>
                            <div className='flex gap-4'>
                                {WebAppDevelopment.slice(0, 3).map((tech) => (
                                    <div key={tech.name} className='flex flex-col items-center'>
                                        <div
                                            className={`w-[82px] h-[82px] rounded-lg bg-white shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)] 
                                                ${webHovered && webHovered !== tech.name ? 'opacity-50' : 'opacity-100'}`}
                                            onMouseEnter={() => webHandleMouseEnter(tech.name)}
                                            onMouseLeave={webHandleMouseLeave}
                                        >
                                            <img src={tech.image} alt={tech.name} className='w-full h-full p-3' />
                                        </div>
                                        <p>{tech.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-8'>
                            <p className='font-semibold'>Backend</p>
                            <div className='flex gap-4'>
                                {WebAppDevelopment.slice(3).map((tech) => (
                                    <div key={tech.name} className='flex flex-col items-center'>
                                        <div
                                            className={`w-[82px] h-[82px] rounded-lg bg-white shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)] 
                                                ${webHovered && webHovered !== tech.name ? 'opacity-50' : 'opacity-100'}`}
                                            onMouseEnter={() => webHandleMouseEnter(tech.name)}
                                            onMouseLeave={webHandleMouseLeave}
                                        >
                                            <img src={tech.image} alt={tech.name} className='w-full h-full p-3' />
                                        </div>
                                        <p>{tech.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='w-full flex flex-col gap-6'> 
                <div className='w-full flex items-center gap-12 rounded-xl p-8 bg-[#f3f6fb]'>
                    <div className='text-4xl font-semibold'>
                        <p>Web App</p>
                        <p>Development</p>
                    </div>
                    <div className='w-full flex justify-between'>
                        <div className='w-full flex flex-col gap-8'>
                            <p className='font-semibold'>Frontend</p>
                            <div className='flex gap-4'>
                                {MobileAppDevelopment.slice(0, 3).map((tech) => (
                                    <div key={tech.name} className='flex flex-col items-center'>
                                        <div
                                            className={`w-[82px] h-[82px] rounded-lg bg-white shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)] 
                                                ${mobileHovered && mobileHovered !== tech.name ? 'opacity-50' : 'opacity-100'}`}
                                            onMouseEnter={() => mobileHandleMouseEnter(tech.name)}
                                            onMouseLeave={mobileHandleMouseLeave}
                                        >
                                            <img src={tech.image} alt={tech.name} className='w-full h-full p-3' />
                                        </div>
                                        <p>{tech.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-8'>
                            <p className='font-semibold'>Backend</p>
                            <div className='flex gap-4'>
                                {MobileAppDevelopment.slice(3).map((tech) => (
                                    <div key={tech.name} className='flex flex-col items-center'>
                                        <div
                                            className={`w-[82px] h-[82px] rounded-lg bg-white shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)] 
                                                ${mobileHovered && mobileHovered !== tech.name ? 'opacity-50' : 'opacity-100'}`}
                                            onMouseEnter={() => mobileHandleMouseEnter(tech.name)}
                                            onMouseLeave={mobileHandleMouseLeave}
                                        >
                                            <img src={tech.image} alt={tech.name} className='w-full h-full p-3' />
                                        </div>
                                        <p>{tech.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechnologyStack;


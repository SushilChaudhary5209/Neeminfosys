
import React, { useEffect, useRef } from 'react';
import { FaCheck } from 'react-icons/fa6';
import man_animation_video from '../../public/videos/man-animation-video.mp4';

function WhyChoseUs() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.currentTime = 0;
            const duration = 10;
            video.addEventListener('loadedmetadata', () => {
                if (video.duration > duration) {
                    video.currentTime = video.duration - duration;
                }
            });
        }
    }, []);

    return (
        <div className='w-[80%] flex flex-col items-center justify-center gap-6'>
            <div className='w-[60%] flex flex-col items-center gap-6'>
                <p className='text-5xl font-semibold'>Why Choose Us</p>
                <p className='text-lg text-center font-medium'>
                    More the years, the better the solutions! We have been partnering with brands and offering our expertise for more than a decade.
                </p>
            </div>
            <div className='w-full flex gap-8'>
                <div className='w-[50%] flex justify-center'>
                    <div className='w-[60%] flex justify-center'>
                        <video autoPlay muted loop playsInline ref={videoRef} src={man_animation_video} ></video>
                    </div>
                </div>
                <div className='w-[50%] flex flex-col gap-6'>
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className='p-4 group rounded-lg hover:bg-[#2641c2] flex gap-2 shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)]'>
                            <div className='w-[10%] group flex justify-center'>
                                <div className='w-6 h-6 text-white group-hover:text-[#2641c2] rounded-full bg-[#2641c2] group-hover:bg-white flex justify-center items-center'>
                                    <FaCheck />
                                </div>
                            </div>
                            <div className='group-hover:text-white flex flex-col gap-2'>
                                <p className='text-lg font-semibold'>Quality</p>
                                <p>We aim to deliver high-quality products. Hence, we take care of everything at the granular level.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WhyChoseUs;

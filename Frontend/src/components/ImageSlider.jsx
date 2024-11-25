import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io';
import flag_nepal from '../../public/images/flag-nepal.png';
import NeemIMS from '../../public/images/NeemIMS.webp';
import BandhuCRM from '../../public/images/BandhuCRM.webp';
import WhiteBGButton from './WhiteBGButton';

function ImageSlider() {
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="custom-arrow next-arrow w-8 h-8 rounded-full flex items-center justify-center bg-[#3779d7]" onClick={onClick}>
                <IoIosArrowRoundForward size={50} />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="custom-arrow prev-arrow w-8 h-8 rounded-full flex items-center justify-center bg-[#3779d7]" onClick={onClick}>
                <IoIosArrowRoundBack size={50} />
            </div>
        );
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        draggable: true,
    };

    return (
        <div className='bg-[#c9e1ee]'>
            <div className="slider-container w-full text-white">
                <Slider {...settings}>
                    <div className='w-[100%]'>
                        <div className='w-[100%] pt-12 flex'>
                            <div className='w-[50%] px-8 pt-4 pb-12 flex flex-col gap-4 bg-[#444444]'>
                                <p className='text-3xl font-semibold'>NEEM IMS</p>
                                <p className='text-3xl font-semibold'>"Manage your Institute Effortlessly"</p>
                                <p className=' font-normal'>Neem IMS: Your all-in-one solution for digital institute management. It can manage all aspects of your institute's operation from enquiries and registration to payments, attendance, and students' performance.</p>
                                <p className=' font-normal'>Easy to use and affordable, making it the perfect solution for educational institutes of all sizes.</p>
                                <div className='flex'>
                                    <div className='w-[50%]'>
                                        <p>Subscribers</p>
                                        <p className='text-xl font-medium'>40+</p>
                                    </div>
                                    <div className='w-[50%]'>
                                        <p>Region</p>
                                        <div className='flex'>
                                            <img src={flag_nepal} alt="" className='w-[27px] h-[27px]' />
                                            <p className='text-xl font-medium'>Nepal</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='w-[50%]'>
                                        <p>Platform</p>
                                        <p className='text-xl font-medium'>Web</p>
                                    </div>
                                    <div className='w-[50%]'>
                                        <p>Technology</p>
                                        <p className='text-xl font-medium'>Laravel, JavaScript, Bootstrap</p>
                                    </div>
                                </div>
                                <WhiteBGButton borderColor="border-white" hoverBgColor="bg-[#444444]" text="View Demo" hoverIconBgColor="bg-white" iconBgColor="bg-white" groupHoverIconColor="text-[#444444]" />
                            </div>
                            <div className='w-[50%] px-6 pt-12 bg-white'>
                                <img src={NeemIMS} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%]'>
                        <div className='w-[100%] pt-12 flex'>
                            <div className='w-[50%] px-8 pt-4 pb-6 flex flex-col gap-4 bg-[#444444]'>
                                <p className='text-3xl font-semibold'>Bandhu CRM</p>
                                <p className='text-3xl font-semibold'>"Run your business better with Bandhu CRM "</p>
                                <p className=' font-normal'>Bandhu CRM is an all-in-one solution for B2B businesses. It includes everything you need to run your business more efficiently, including customer management, project management, invoicing, and more.</p>
                                <p className=' font-normal'>Easy to use and affordable, making it a great choice for small-sized B2B businesses.</p>
                                <div className='flex'>
                                    <div className='w-[50%]'>
                                        <p>Subscribers</p>
                                        <p className='text-xl font-medium'>40+</p>
                                    </div>
                                    <div className='w-[50%]'>
                                        <p>Region</p>
                                        <div className='flex'>
                                            <img src={flag_nepal} alt="" className='w-[27px] h-[27px]' />
                                            <p className='text-xl font-medium'>Nepal</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='w-[50%]'>
                                        <p>Platform</p>
                                        <p className='text-xl font-medium'>Web</p>
                                    </div>
                                    <div className='w-[50%]'>
                                        <p>Technology</p>
                                        <p className='text-xl font-medium'>Laravel, JavaScript, Bootstrap</p>
                                    </div>
                                </div>
                                <WhiteBGButton borderColor="border-white" hoverBgColor="bg-[#444444]" text="View Demo" hoverIconBgColor="bg-white" iconBgColor="bg-white" groupHoverIconColor="text-[#444444]" />
                            </div>
                            <div className='w-[50%] px-6 pt-12 bg-white'>
                                <img src={BandhuCRM} alt="" />
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default ImageSlider;

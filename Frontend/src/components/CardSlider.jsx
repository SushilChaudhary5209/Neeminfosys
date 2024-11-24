

import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import test_bg from '../../public/images/testi_bg.svg';
import shyam_singh_mauni from '../../public/images/shyam-singh-mauni.png';
import gopal_hamal from '../../public/images/gopal-hamal.png';
import manoj_biswakarma from '../../public/images/manoj-biswakarma.png';
import Madhav_Gautam from '../../public/images/Madhav Gautam.jpg';
import Tej_Gautam from '../../public/images/Tej Gautam.jpg';
import mantra_hospital from '../../public/images/mantra-hospital.jpg';
import icon_shyam_singh_mauni from '../../public/images/icon-shyam-singh-mauni.png';
import icon_gopal_hamal from '../../public/images/icon-gopal-hamal.png';
import icon_manoj_biswakarma from '../../public/images/icon-manoj-biswakarma.png';
import icon_Madhav_Gautam from '../../public/images/icon-Mahadav-Gautam.jpeg';
import icon_Sumnima from '../../public/images/icon-Sumnima.jpg';
import Dr_Govinda_RokayaHospital from '../../public/images/Dr.Govinda-RokayaHospital-director.jpg';

const testimonials = [
    {
        name: 'Shyam Singh Mauni',
        title: 'Principal of LBA College',
        image: shyam_singh_mauni,
        feedback: `Exceptional service! Neem Infosys transformed our IT infrastructure, optimizing processes and boosting productivity. Their knowledgeable team customized solutions to our unique needs, from software development to network management. Thanks to Neem Infosys, we're confidently navigating the tech landscape with innovative solutions at our fingertips.`,
        icon: icon_shyam_singh_mauni
    },
    {
        name: 'Gopal Hamal',
        title: 'Mayor of Dhangadhi Sub-Metropolition City',
        image: gopal_hamal,
        feedback: `Neem Infosys exceeded our expectations by providing remarkable IT support. Their professionals are highly skilled, promptly resolving issues and maintaining our systems seamlessly. With their invaluable assistance, we've experienced uninterrupted operations and remarkable growth. Neem Infosys is undoubtedly a reliable partner for any business's technological endeavors.`,
        icon: icon_gopal_hamal
    },
    {
        name: 'Manoj Biswakarma',
        title: 'Principal of Balmiki International School',
        image: manoj_biswakarma,
        feedback: `Neem Infosys truly understands the modern IT challenges businesses face. Their cutting-edge solutions transformed our company, elevating us to new heights of success. Their proactive approach to maintenance and problem-solving ensures our systems are always running smoothly. Neem Infosys has our highest recommendation for delivering IT excellence.`,
        icon: icon_manoj_biswakarma
    },
    {
        name: 'Madhav Gautam',
        title: 'CEO of Timber Group',
        image: Madhav_Gautam,
        feedback: `Neem Infosys has been an invaluable partner for Timber Group. Their team, led by Madhav Gautam, consistently delivers top-notch IT solutions, contributing significantly to our success. Their expertise, professionalism, and innovation make them our go-to choice for tailored services. I highly recommend Neem Infosys for their outstanding contributions to our projects.`,
        icon: icon_Madhav_Gautam
    },
    {
        name: 'Tej Gautam',
        title: 'CEO of Sumnima Herbal',
        image: Tej_Gautam,
        feedback: `Neem Infosys has provided exceptional service to Sumnima Herbal, optimizing and boosting productivity. Our partnership with Neem Infosys has proven instrumental in advancing our technological capabilities. Their knowledgeable team customized solutions to our unique needs, contributing to the growth and efficiency of our operations. Thanks to Neem Infosys, we confidently navigate the tech landscape with innovative solutions at our fingertips.`,
        icon: icon_Sumnima
    },
    {
        name: 'Dr. Govinda Rokaya',
        title: 'Director of Mantra Hospital',
        image: mantra_hospital,
        feedback: `I am delighted to express my satisfaction with Neem Infosys. As the Director of Mantra Hospital, I have had the privilege of partnering with Neem Infosys for our IT solutions, and the experience has been truly exceptional. Their team's expertise, dedication, and innovative approach have significantly contributed to the seamless functioning of our hospital systems. I highly recommend their services for any institution.`,
        icon: Dr_Govinda_RokayaHospital
    },
];

const TestimonialItem = ({ testimonial }) => (
    <div className='w-full flex items-center gap-20'>
        <div className='relative w-[40%]'>
            <div>
                <img src={test_bg} alt="background" />
            </div>
            <div className='absolute bottom-0 right-0'>
                <img src={testimonial.image} alt={testimonial.name} />
                {/* Display the icon at the center of the image */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <img src={testimonial.icon} alt={testimonial.name} className="w-16 h-16 rounded-full border-4 border-white shadow-lg" />
                </div>
            </div>
        </div>
        <div className='w-[60%] flex flex-col gap-2'>
            <p className='text-4xl font-semibold'>{testimonial.name}</p>
            <p>{testimonial.title}</p>
            <p>{testimonial.feedback}</p>
        </div>
    </div>
);

function CardSlider() {
    const sliderRef = useRef(null);
    const iconSliderRef = useRef(null);
    const [clickedIcon, setClickedIcon] = useState(0); // Default first slide

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index) => {
            setClickedIcon(index); // Update active icon when main slider changes
        },
    };

    const iconSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0',
        afterChange: (index) => {
            sliderRef.current.slickGoTo(index); // Sync slider when icon changes
        },
        prevArrow: <div className="slick-arrow slick-prev">←</div>, // Custom Back Arrow
        nextArrow: <div className="slick-arrow slick-next">→</div>, // Custom Forward Arrow
    };

    const handleIconClick = (index) => {
        setClickedIcon(index); // Set clicked icon as active
        sliderRef.current.slickGoTo(index); // Go to the respective slide
    };

    const handleForwardClick = () => {
        sliderRef.current.slickNext();
        iconSliderRef.current.slickNext();
    };

    const handleBackClick = () => {
        sliderRef.current.slickPrev();
        iconSliderRef.current.slickPrev();
    };

    return (
        <div className="w-full flex flex-col items-center gap-4">
            <Slider ref={sliderRef} {...settings} className="w-full">
                {testimonials.map((testimonial, index) => (
                    <TestimonialItem key={index} testimonial={testimonial} />
                ))}
            </Slider>
            <Slider ref={iconSliderRef} {...iconSettings} className="w-[60%] pt-4 h-36">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        onClick={() => handleIconClick(index)}
                        className="cursor-pointer my-4"
                    >
                        <img
                            src={testimonial.icon}
                            alt={testimonial.name}
                            className={`w-20 h-20 rounded-full 
                            ${clickedIcon === index ? 'ring-2 ring-green-900 ring-offset-1 ring-offset-slate-50 dark:ring-offset-white zoom' : ''}`}
                        />
                    </div>
                ))}
            </Slider>
            <div className="flex items-center justify-center gap-8">
                <div
                    onClick={handleBackClick}
                    className="cursor-pointer flex items-center justify-center w-12 h-12 border border-gray-200 rounded-full transition-all duration-300"
                >
                    <IoIosArrowRoundBack size={32} />
                </div>
                <div
                    onClick={handleForwardClick}
                    className="cursor-pointer flex items-center justify-center w-12 h-12 border border-gray-200 rounded-full transition-all duration-300"
                >
                    <IoIosArrowRoundForward size={32} />
                </div>
            </div>
            <style jsx>{`
                .zoom {
                    transform: scale(1.2);
                    transition: transform 0.5s ease-in-out;
                }
                .slick-prev, .slick-next {
                    font-size: 300px;
                    color: #000;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 1;
                    cursor: pointer;
                    transition: color 0.3s ease;
                }
                .slick-prev {
                    left: -20px;
                }
                .slick-next {
                    right: -20px;
                }
                .slick-prev:hover, .slick-next:hover {
                    color: #2D3748;
                }
            `}</style>
        </div>
    );
}

export default CardSlider;




import React, { useState } from 'react';
import Slider from 'react-slick';
import test_bg from '../../public/images/testi_bg.svg';
import team_bikram_basnet1 from '../../public/images/team-bikram-basnet1.png';
import team_roshan_bist from '../../public/images/team-roshan-bist.png';
import team_niraj_pal1 from '../../public/images/team-niraj-pal1.png';
import icon_bikram_basnet from '../../public/images/icon-bikram-basnet.png';
import icon_roshan_bist from '../../public/images/icon-roshan-bist.png';
import icon_niraj_pal from '../../public/images/icon-niraj-pal.png';

function CareerCardSlider() {
    const [selectedMember, setSelectedMember] = useState('bikram'); 
    const [clickedIcon, setClickedIcon] = useState(0);

    const settings = {
        dots: false,
        infinite: false, 
        speed: 500, 
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    const teamMembers = [
        {
            id: 'bikram',
            name: 'Bikram Basnet',
            role: 'Graphics Designer',
            image: team_bikram_basnet1,
            icon: icon_bikram_basnet,
            description: 'Inspiring creativity and innovation, Neem Infosys has provided me, Bikram Basnet, with an exceptional platform to flourish as a Senior Graphics Designer...',
        },
        {
            id: 'roshan',
            name: 'Rosan Bist',
            role: 'Web Developer',
            image: team_roshan_bist,
            icon: icon_roshan_bist,
            description: 'The company\'s commitment to pushing the boundaries of web development has allowed me to unleash my creativity and expertise in unprecedented ways...',
        },
        {
            id: 'niraj',
            name: 'Niraj Pal',
            role: 'Software Engineer',
            image: team_niraj_pal1,
            icon: icon_niraj_pal,
            description: 'Neem Infosys isn\'t just a workplace; it\'s a realm of innovation where I, as a Software Engineer...',
        },
    ];

    const handleIconClick = (member, index) => {
        setSelectedMember(member);
        setClickedIcon(index);
    };

    const renderSliderContent = () => {
        const member = teamMembers.find(m => m.id === selectedMember);
        return (
            <div>
                <div className="flex items-center gap-20">
                    <div className="relative w-[40%]">
                        <div>
                            <img src={test_bg} alt="background" />
                        </div>
                        <div className="absolute bottom-0 right-0">
                            <img src={member.image} alt="Team member" />
                        </div>
                    </div>
                    <div className="w-[60%] flex flex-col gap-2">
                        <p className="text-4xl font-semibold">{member.name}</p>
                        <p>{member.role}</p>
                        <p>{member.description}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="w-[80%] flex flex-col items-center">
            <div className="w-[70%] flex flex-col items-center gap-2">
                <p className="text-4xl font-semibold">Let’s Hear What Our Team Says</p>
                <p className="text-lg font-lg">
                    Discover the insights and experiences directly from our dedicated team members.
                </p>
            </div>

            {selectedMember && (
                <Slider {...settings} className="w-full mt-6">
                    {renderSliderContent()}
                </Slider>
            )}

            <div className='ps-[35%] flex gap-4'>
                {teamMembers.map((member, index) => (
                    <div 
                        key={member.id}
                        onClick={() => handleIconClick(member.id, index)} 
                        className={`rounded-full ${clickedIcon === index ? 'ring-2 ring-green-900 ring-offset-1 ring-offset-slate-50 dark:ring-offset-white zoom' : ''}`}
                    >
                        <img src={member.icon} alt={member.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CareerCardSlider;

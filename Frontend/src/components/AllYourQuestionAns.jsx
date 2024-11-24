

import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

function AllYourQuestionAns() {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const questions = [
        {
            question: "I just submitted my application, what can I expect?",
            answer: "Thanks for applying to join our team at Neem Infosys! We’re stoked to have you on board. Our recruitment team will carefully review your application, and if it’s a match made in heaven, we’ll be reaching out to you soon to discuss the next steps. In case you have any questions about your application, feel free to drop us a line at",
        },
        {
            question: "How long does your recruitment process take?",
            answer: "At Neem Infosys, we’ve a streamlined recruitment process to make it as efficient and effective as possible. You may get a call for an interview the very next day. However, our comprehensive recruitment process, starting from the initial screening to the grand finale of final selection, could span over a period of 2 to 3 weeks, just to ensure that both you and us feel that we are a great match to each other.",
        },
        {
            question: "What do we look for in a candidate?",
            answer: "We are on the lookout for a true gem – someone who radiates confidence in themselves and their unique abilities. A positive attitude and a strong work ethic are absolute must-haves in our ideal candidate. We admire individuals who embrace a growth mindset and are eager to dive into new opportunities, always open to learning and expanding their horizons. If you possess these qualities, you might just be the perfect match we’ve been searching for!",
        },
        {
            question: "I’m interested in a number of positions on your website, can I apply for multiple positions?",
            answer: "Yes, you can! We encourage you to apply for all the positions that align with your skills and interests. Each application will be individually evaluated based on the specific requirements of the role. However, we encourage you to customize each of your applications to a given position, highlighting your most relevant skills and experience areas.",
        },
        {
            question: "Do you offer internship?",
            answer: "Absolutely! Here we call it ‘Traineeship’, because we do not want you to come here for a few months and leave, but build a wonderful career with us. We believe in nurturing talent and providing opportunities for growth. Each year, we proudly host the Neem Traineeship Program, a fantastic avenue for aspiring individuals to kickstart their careers.",
        },
        {
            question: "What is the performance review period?",
            answer: "We conduct both Performance Reviews and Competency Reviews on an annual basis to ensure a comprehensive evaluation of our team members’ growth and development. Based on these reviews, your supervisor shall work with you to develop your professional development plan.",
        },
        {
            question: "Will I be paid for this internship?",
            answer: "Yes, we will pay for talent one intern that will be rightly compensated.",
        },
        {
            question: "Will I need to be physically present in the office?",
            answer: "Yes, we will be running the internship program at the office. All the assignments and projects need to be submitted during office hours(10 AM- 6 PM).",
        },
        {
            question: "Can I apply for a position if I don’t meet all the listed qualifications?",
            answer: "We encourage candidates to apply if they believe their skills and experiences align with the role, even if they don’t meet all the listed qualifications. Our selection process considers a combination of qualifications, experiences, and potential for growth.",
        },
        {
            question: "Can the schedule be adjusted if my college begins or if I have exams in the middle of my internship?",
            answer: "Due to the uncertainty of the examination schedules, we will be flexible regarding the internship timings. Those of you who might have exams during the internship period will be scheduled to join in the next batch.",
        },
        {
            question: "I’m having trouble submitting an application, what should I do?",
            answer: "We’re sorry to hear that you’re experiencing difficulties with submitting your application. Don’t worry; we’re here to help! Please follow these steps to resolve the issue:",
        },
        {
            question: "What makes Neem Infosys a great place to work?",
            answer: "At Neem Infosys, our dedication to continuous learning and unwavering commitment to encourage professional development set the cornerstone of our vibrant and inclusive work culture. We firmly believe that learning is a lifelong journey, and we take immense pride in providing our team members with ample opportunities to grow both personally and professionally. Our supportive team environment serves as a nurturing ground for individuals to explore their potential and embark on exciting projects that challenge and inspire them to reach new heights. As an employer of choice, we value innovation and excellence, and we are thrilled to witness our employees’ growth as they embrace the opportunities for continuous learning and career advancement.",
        },
        {
            question: "What can I do to prepare for the interviews?",
            answer: "Preparation is key to success! Research our company, understand the role’s responsibilities, and be ready to showcase your skills and experiences. It’s essential to be authentic and demonstrate how you align with our values and culture.",
        },
        {
            question: "What is the company culture like at Neem Infosys?",
            answer: "Our company culture is one of collaboration, innovation, and inclusivity. We foster an environment where everyone’s ideas are valued, and teamwork is encouraged. We believe in work-life balance and strive to create a positive and supportive atmosphere for all our team members.",
        },
        {
            question: "Do I need my own laptop?",
            answer: "Yes, you will require basic working gear like a laptop, headphones, etc.",
        },
        {
            question: "What will be the timing?",
            answer: "This internship requires you to commit to twelve weeks of full-time work. Our regular schedule is from 10 am to 6 pm. However, considering the present scenario, we might be able to adjust the timings if required.",
        },
    ];

    return (
        <div className="w-[80%] my-12 flex flex-col items-center gap-8">
            <div className="w-[70%] flex flex-col items-center gap-2">
                <p className="text-5xl font-semibold">All your questions Answered.</p>
                <p className="text-lg text-center font-lg">
                    Can’t find what you’re looking for? Drop us a line and we’d be happy to answer any questions you have.
                </p>
            </div>
            <div className='w-full grid grid-cols-2 gap-4'>
                {questions.map((item, index) => (
                    <div key={index} onClick={() => toggleDropdown(index)}>
                        <div className={`w-full p-3 border rounded-md border-slate-300 bg-white flex items-center ${openDropdown === index ? 'text-[#136ee5] bg-[#e7f1ff] rounded-tr-md rounded-tl-md' : ''} ${openDropdown === index ? 'rounded-none' : 'rounded-br-md rounded-bl-md'}`}>
                            <p className='w-[90%]'>{item.question}</p>
                            <div className='w-[10%] flex justify-end'>
                                <IoIosArrowDown className={`${openDropdown === index ? 'rotate-180' : ''}`} />
                            </div>
                        </div>
                        {openDropdown === index && (
                            <div className="w-full p-3 border rounded-br-md rounded-bl-md border-slate-300 bg-white flex items-center justify-center">
                                <p className="text-sm">{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllYourQuestionAns;

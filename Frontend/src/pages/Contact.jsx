import React from 'react'
import { BiSolidMessageEdit } from "react-icons/bi";

import flag_nepal from '../../public/images/flag-nepal.png';
import Captcha from '../components/Captcha';
import Button from '../components/Button';
import Form from '../components/Form';

function Contact() {


    return (
        <div className='w-full flex justify-center'>
            <div className='w-[80%] p-6 flex'>
                <div className='w-[50%] flex flex-col gap-8'>
                    <p className='text-4xl font-semibold'>Get In Touch</p>
                    <div className='flex flex-col gap-4'>
                        <p className='text-7xl font-semibold text-[#2641c2]'>Our Experts</p>
                        <p className='font-medium'>Want to find out how Neem Infosys can help your organization? We’d love to hear from you. </p>
                    </div>
                    <div>
                        <p className='text-2xl font-semibold'>Integrate Towards Innovation</p>
                        <p>Become an Neem Infosys Partner to Launch, Run and Grow Your Business Globally.</p>
                        <div>
                            <p className='font-semibold'>Become a Partner</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-2xl font-semibold'>Contact Info:</p>
                        <div className='flex items-center gap-2'>
                            <BiSolidMessageEdit className='text-2xl text-[#2641c2]' />
                            <p>neeminfosys@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-6'>
                                <img src={flag_nepal} alt="" />
                            </div>
                            <p>+977-9841822340</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-6'>
                                <img src={flag_nepal} alt="" />
                            </div>
                            <p>+977-9868715191</p>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] bg-white shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)] rounded-lg p-6 ">
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Contact

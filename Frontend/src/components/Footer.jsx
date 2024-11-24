
import React from 'react'
import neem_infosys from '../../public/images/neem_infosys.png'
import digital_markiting from '../../public/images/digital_marketing_agency_nepal.jpg'
import IT_Zone_Logo2 from '../../public/images/IT_Zone_Logo2.jpg'
import sofsee_tech from '../../public/images/sofsee_tech.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
    return (
        <div className='bg-[#222222] h-full flex flex-col items-center py-10 overflow-x-hidden'>
            <div className='mx-8 grid justify-center xl:grid-cols-[356px_250px_207px_162px_320px] lg:grid-cols-[332px_421px_183px] sm:px-16 sm:grid-cols-2 grid-cols-1 gap-12 xl:gap-0 '>
                <div className='xl:w-[356px] lg:w-[332px] lg:px-10 flex flex-col gap-2'>
                    <p className='text-white text-center text-2xl font-semibold'>Neem Group</p>
                    <div className='flex gap-2'>
                        <div className='w-[138px] h-[60px] flex items-center justify-center bg-white rounded-md'>
                            <img src={neem_infosys} alt="" className='w-[133px] h-auto' />
                        </div>
                        <div className='w-[134px] h-[60px] flex items-center justify-center bg-white rounded-md'>
                            <img src={digital_markiting} alt="" className='w-[83px] h-auto' />
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='w-[138px] h-[60px] flex items-center justify-center bg-white rounded-md'>
                            <img src={IT_Zone_Logo2} alt="" className='w-[133px] h-auto' />
                        </div>
                        <div className='w-[134px] h-[60px] flex items-center justify-center bg-white rounded-md'>
                            <img src={sofsee_tech} alt="" className='w-[83px] h-auto' />
                        </div>
                    </div>
                </div>



                <div className='xl:w-[250px] lg:w-[421px] text-white flex flex-col gap-4'>
                    <p className='text-2xl font-semibold'>Recent Blogs</p>
                    <p>Top 7 Benefits of Investing in Enterprise Software Development!</p>
                    <p>Top 10 Essential Features to Include in a Web App: A Detailed Guide!</p>
                </div>




                <div className='xl:w-[207px] lg:w-[183px] text-white flex flex-col gap-4'>
                    <p className=' text-2xl font-semibold'>Services</p>
                    <p>Website Development</p>
                    <p>Digital Marketing</p>
                    <p>Software Application</p>
                    <p>Cloud Services</p>
                    <p>Graphics Design</p>
                    <p>Motion Graphics</p>
                </div>



                <div className='xl:w-[162px] lg:w-[332px] lg:px-10  text-white flex flex-col gap-4'>
                    <p className=' text-2xl font-semibold'>Company</p>
                    <p>About Us</p>
                    <p>What We Do</p>
                    <p>Blogs</p>
                    <p>Gallery</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>



                <div className='xl:w-[320px] lg:w-[421px] text-white flex flex-col gap-4'>
                    <p className=' text-2xl font-semibold'>Connect US</p>
                    <p>Make the right business move</p>
                    <form action="" className='w-[304px] h-[40px] flex items-center'>
                        <input type="email" name="" id="" placeholder='Email Address' className='h-[40px] ps-2 text-black rounded-s-md no-border focus:outline-none' />
                        <input type="submit" placeholder='Send' className='w-[63px] h-[40px] cursor-pointer text-white text-center rounded-e-md bg-[#2641c2]' />
                    </form>
                    <p className=''>Your mail and other information are confidential.</p>
                    <hr className='w-[280px] h-[1px]' />
                    <div className='w-[280px] flex justify-evenly'>
                        <FaFacebookF />
                        <FaTwitter />
                        <FaLinkedinIn />
                        <FaYoutube />
                        <FaInstagram />
                    </div>
                </div>
            </div>
            <hr className='xl:w-[1116px] lg:w-[963px] sm:w-[696px] w-[432px] h-[2px] mt-8' />
            <div className='text-white flex flex-col sm:flex-row justify-center items-center gap-2 mt-8 sm:gap-8'>
                <p>2023 Neem Infosys. All Rights Reserved.</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
    )
}

export default Footer

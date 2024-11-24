import React from 'react'
import RegisterForm from './RegisterForm'
import Button from './Button'
import phone_icon from '../../public/images/phone_icon.png'

function ApplyForJob() {

    return (
        <div className="w-[80%] my-12 flex items-center gap-8">
            <div className='w-[50%] flex flex-col gap-12'>
                <p className='ps-4 text-4xl font-semibold '>Apply for Job</p>
                <RegisterForm />
                <div className='ps-4'>
                    <Button text="Submit" />
                </div>
            </div>
            <div className='w-[50%] flex flex-col gap-8'>
                <p className='text-4xl font-semibold'>Contact us today</p>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <div>
                            <p className='w-8 h-8 text-white rounded-full bg-[#2641c2] flex items-center justify-center'>
                                1
                            </p>
                        </div>
                        <p>Our People Ops team will review your application and if you meet the criteria, they will call you for an interview.</p>
                    </div>
                    <div className='flex gap-4'>
                        <div>
                            <p className='w-8 h-8 text-white rounded-full bg-[#2641c2] flex items-center justify-center'>
                                2
                            </p>
                        </div>
                        <p>
                            If you do not get a call within 30 days of submitting your application, please understand that we couldn’t select you this time, but your CV will be in our roster so that when the right vacancy is open, we can contact you.</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='w-8 h-8'>
                        <img src={phone_icon} alt="" />
                    </div>
                    <p className='font-semibold text-4xl'>+977 9810631146</p>
                </div>
            </div>
        </div>
    )
}

export default ApplyForJob

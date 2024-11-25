
import React from 'react';
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const featureData = [
  { label: '24/7 Support', status: ['check', 'check', 'check'] },
  { label: 'CMS website design', status: ['check', 'check', 'check'] },
  { label: 'Responsive & Interactive Design', status: ['check', 'check', 'check'] },
  { label: 'Number of pages / menus / categories', status: ['check', 'check', 'check'] },
  { label: 'Search Engine friendly', status: ['check', 'check', 'check'] },
  { label: 'Social Media Integration', status: ['check', 'close', 'check'] },
  { label: 'Advanced Real Time Search', status: ['check', 'check', 'check'] },
  { label: 'CSV Import Of Product', status: ['check', 'check', 'check'] },
  { label: 'Advance Product Offer', status: ['close', 'check', 'check'] },
  { label: 'Blog Design', status: ['check', 'check', 'close'] },
  { label: 'Single Vendor/Multi Vendor', status: ['check', 'check', 'check'] },
  { label: 'Shopping Cart', status: ['check', 'check', 'check'] },
  { label: 'Logo Design', status: ['close', 'check', 'check'] },
  { label: 'Payment Integration', status: ['check', 'check', 'check'] },
  { label: 'Custom Website', status: ['close', 'check', 'check'] },
  { label: 'Newsletter Subscription', status: ['check', 'check', 'check'] },
  { label: 'Checkout Easy', status: ['check', 'check', 'close'] },
];

const buttonData = Array(3).fill({
  label: 'Quick Enquiry',
  href: '#',
});

function WebDevelopmentPackage() {
  return (
    <div className='w-full mt-24 flex flex-col items-center'>
      <div className='w-[90%] flex flex-col items-center'>
        <div className='w-[55%] flex flex-col items-center gap-6'>
          <div className='flex items-center gap-2'>
            <div className='w-12 h-0.5 bg-[#0b7be5]'></div>
            <p className='text-lg font-[16px]'>HOW WE CHARGE</p>
            <div className='w-12 h-0.5 bg-[#0b7be5]'></div>
          </div>
          <p className='text-4xl font-semibold'>
            <span>Website Development</span>
            <span className='text-[#0b7be5]'> Packages</span>
          </p>
          <div className='text-center font-[16px] text-[#666666]'>
            <p>We offer different website design and development prices to you. Custom</p>
            <p>packages are also available as per your need. Just send us your requirements and we will</p>
            <p>send you quote right after.</p>
          </div>
        </div>

        <section className='bg-[#0b78e521] my-12 p-12 flex flex-col gap-6'>
          <div className='flex justify-between gap-8'>
            <p className='w-[365px] text-lg font-semibold'>Features</p>
            {['For marketing newbies and small house teams', 'For individuals looking to grow their business/brand', 'For enterprises looking to build their presence online'].map((text, index) => (
              <p key={index} className='w-[200px] text-center'>{text}</p>
            ))}
          </div>
          <div className='flex justify-between gap-8'>
            <p className='w-[365px] text-lg font-semibold'></p>
            {['Basic', 'Advance', 'Premium'].map((text, index) => (
              <p key={index} className='w-[200px] text-center font-semibold text-[#0b7be5]'>{text}</p>
            ))}
          </div>

          {featureData.map(({ label, status }, index) => (
            <div key={index} className='flex justify-between gap-8'>
              <p className='w-[365px] text-lg font-semibold'>{label}</p>
              {status.map((item, idx) => (
                <div key={idx} className={`w-[200px] ${item === 'check' ? 'text-[#0b7be5]' : 'text-[#da392e] text-xl'} flex justify-center items-center`}>
                  {item === 'check' ? <FaCheck /> : <IoClose />}
                </div>
              ))}
            </div>
          ))}

          <div className='flex justify-between gap-8'>
            <p className='w-[365px] text-2xl font-semibold'></p>
            {buttonData.map((button, idx) => (
              <div key={idx} className='w-[200px] flex items-center justify-center'>
                <a href={button.href} className='w-[154px] h-[44px] font-semibold py-[10px] px-[24px] text-white rounded-full border border-[#0b7be5] bg-[#0b7be5] flex justify-center items-center hover:w-[156px] hover:h-[46px] hover:text-[#0b7be5] hover:bg-white transition-all duration-500'>
                  {button.label}
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default WebDevelopmentPackage;


import React from 'react';
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import './SEOPackage.css';

const seoPackageData01 = [
    {
        title: 'standard', price: '29,999/', period: 'mon', description: 'Preferred for Small Businesses', features: [
            {
                category: 'Initial website analysis', items: [
                    { text: 'Upto 10 Keyword Ranking', icon: 'check' },
                    { text: 'Site Audit', icon: 'check' },
                    { text: 'Competitor Analysis', icon: 'check' },
                    { text: 'Google Analytics Setup', icon: 'check' },
                    { text: 'Google Search Console Setup', icon: 'check' },
                    { text: 'Robots.txt Creation', icon: 'check' },
                    { text: 'Sitemap Creation', icon: 'check' }
                ]
            },
            {
                category: 'On Page Setup', items: [
                    { text: 'Keyword Research', icon: 'check' },
                    { text: 'Keyword Mapping', icon: 'close' },
                    { text: 'Few Major Pages Meta And Heading Tag Optimization', icon: 'check' },
                    { text: 'URL Optimization', icon: 'check' },
                    { text: 'Image Optimization', icon: 'check' },
                    { text: '2 SEO Optimized Blog Articles', icon: 'check' },
                    { text: 'Few Existing Content Optimization', icon: 'check' }
                ]
            },
            {
                category: 'Technical SEO', items: [
                    { text: 'Canonical URL Addition', icon: 'check' },
                    { text: 'Custom 404 Page Setup', icon: 'check' },
                    { text: 'OG Tags', icon: 'check' },
                    { text: 'Page Redirection', icon: 'check' },
                    { text: 'Sitemap', icon: 'check' },
                    { text: 'Robots.txt', icon: 'check' },
                    { text: 'Browser Bompatibility Check', icon: 'check' },
                    { text: 'Page Speed Optimization', icon: 'check' },
                    { text: 'Broken Link Fixing', icon: 'close' },
                    { text: 'Site Architecture', icon: 'close' },
                    { text: 'Mobile Friendliness', icon: 'close' },
                    { text: 'Solve Keyword Cannibalization', icon: 'close' },
                    { text: 'Hreflang Tags', icon: 'close' },
                    { text: 'Competitor Backlink Research', icon: 'close' },
                    { text: 'Other Webmaster Optimization', icon: 'close' }
                ]
            },
            {
                category: 'Off Page SEO', items: [
                    { text: 'Link Building', icon: 'close' },
                    { text: 'Guest Blogging', icon: 'close' },
                    { text: 'Directory Submission', icon: 'close' },
                    { text: 'Quora Posting', icon: 'check' },
                    { text: 'Reddit Posting', icon: 'check' },
                    { text: 'Schema Implementation', icon: 'close' },
                    { text: 'Conversion Tracking', icon: 'close' },
                    { text: 'Infographic Creation And Sharing', icon: 'close' }
                ]
            },
            {
                category: 'Local SEO', items: [
                    { text: 'GMB Setup & Optimization', icon: 'check' },
                    { text: 'GMB Posting', icon: 'close' },
                    { text: 'Google Map Creation', icon: 'check' },
                    { text: 'Local Citation', icon: 'close' }
                ]
            },
            {
                category: 'Monthly Report', items: [
                    { text: 'Work Done Report', icon: 'check' },
                    { text: 'On Page Report', icon: 'check' },
                    { text: 'Backlink Report', icon: 'close' },
                    { text: 'Traffic By Country', icon: 'check' },
                    { text: 'Traffic Comparison', icon: 'check' },
                    { text: 'Top 10 Performing Pages', icon: 'check' },
                    { text: 'Top 10 Keywords', icon: 'check' },
                    { text: 'Clicks, Impression, Position', icon: 'check' },
                ]
            }
        ]
    }
];

const seoPackageData02 = [
    {
        title: 'Professional', price: '49,999/', period: 'mon', description: 'Preferred for mid size Businesses', features: [
            {
                category: 'Initial website analysis', items: [
                    { text: 'Upto 20 Keyword Ranking', icon: 'check' },
                    { text: 'Site Audit', icon: 'check' },
                    { text: 'Competitor Analysis', icon: 'check' },
                    { text: 'Google Analytics Setup', icon: 'check' },
                    { text: 'Google Search Console Setup', icon: 'check' },
                    { text: 'Robots.txt Creation', icon: 'check' },
                    { text: 'Sitemap Creation', icon: 'check' }
                ]
            },
            {
                category: 'On Page Setup', items: [
                    { text: 'Keyword Research', icon: 'check' },
                    { text: 'Keyword Mapping', icon: 'check' },
                    { text: 'Major Pages Meta And Heading Tag Optimization', icon: 'check' },
                    { text: 'URL Optimization', icon: 'check' },
                    { text: 'Image Optimization', icon: 'check' },
                    { text: '4 SEO Optimized Blog Articles', icon: 'check' },
                    { text: 'Existing Major Page Content Optimization', icon: 'check' }
                ]
            },
            {
                category: 'Technical SEO', items: [
                    { text: 'Canonical URL Addition', icon: 'check' },
                    { text: 'Custom 404 Page Setup', icon: 'check' },
                    { text: 'OG Tags', icon: 'check' },
                    { text: 'Page Redirection', icon: 'check' },
                    { text: 'Sitemap', icon: 'check' },
                    { text: 'Robots.txt', icon: 'check' },
                    { text: 'Browser Compatibility Check', icon: 'check' },
                    { text: 'Page Speed Optimization', icon: 'check' },
                    { text: 'Broken Link Fixing', icon: 'check' },
                    { text: 'Site Architecture', icon: 'check' },
                    { text: 'Mobile Friendliness', icon: 'check' },
                    { text: 'Solve Keyword Cannibalization', icon: 'check' },
                    { text: 'Hreflang Tags', icon: 'close' },
                    { text: 'Competitor Backlink Research', icon: 'close' },
                    { text: 'Bing Webmaster Optimization', icon: 'check' }
                ]
            },
            {
                category: 'Off Page SEO', items: [
                    { text: 'Link Building', icon: 'check' },
                    { text: 'Guest Blogging', icon: 'close' },
                    { text: 'Few Directory Submission', icon: 'check' },
                    { text: 'Few Weekly Post On Quora', icon: 'check' },
                    { text: 'Few Weekly Post On Reddit', icon: 'check' },
                    { text: 'Schema Implementation', icon: 'check' },
                    { text: 'Conversion Tracking', icon: 'close' },
                    { text: 'Few Infographic Creation And Sharing', icon: 'check' }
                ]
            },
            {
                category: 'Local SEO', items: [
                    { text: 'GMB Setup & Optimization', icon: 'check' },
                    { text: 'GMB Posting', icon: 'check' },
                    { text: 'Google Map Creation', icon: 'check' },
                    { text: 'Few Local Citation', icon: 'check' }
                ]
            },
            {
                category: 'Monthly Report', items: [
                    { text: 'Work Done Report', icon: 'check' },
                    { text: 'On Page Report', icon: 'check' },
                    { text: 'Backlink Report', icon: 'check' },
                    { text: 'Traffic By Country', icon: 'check' },
                    { text: 'Traffic Comparison', icon: 'check' },
                    { text: 'Top 10 Performing Pages', icon: 'check' },
                    { text: 'Top 10 Keywords', icon: 'check' },
                    { text: 'Clicks, Impression, Position', icon: 'check' },
                ]
            }
        ]
    }
];

const seoPackageData03 = [
    {
        title: 'Premium', price: ' 79,999/', period: 'mon', description: 'Preferred for large Businessess', features: [
            {
                category: 'Initial Website Analysis', items: [
                    { text: 'Upto 40 Keyword Ranking', icon: 'check' },
                    { text: 'Site Audit', icon: 'check' },
                    { text: 'Competitor Analysis', icon: 'check' },
                    { text: 'Google Analytics Setup', icon: 'check' },
                    { text: 'Google Search Console Setup', icon: 'check' },
                    { text: 'Robots.txt Creation', icon: 'check' },
                    { text: 'Sitemap Creation', icon: 'check' }
                ]
            },
            {
                category: 'On Page Setup', items: [
                    { text: 'Keyword Research', icon: 'check' },
                    { text: 'Keyword Mapping', icon: 'check' },
                    { text: 'Major Pages Meta And Heading Tag Optimization', icon: 'check' },
                    { text: 'URL Optimization', icon: 'check' },
                    { text: 'Image Optimization', icon: 'check' },
                    { text: '6 SEO Optimized Blog Artic', icon: 'check' },
                    { text: 'Existing Major Page Content Optimization', icon: 'check' }
                ]
            },
            {
                category: 'Technical SEO', items: [
                    { text: 'Canonical URL Addition', icon: 'check' },
                    { text: 'Custom 404 Page Setup', icon: 'check' },
                    { text: 'OG Tags', icon: 'check' },
                    { text: 'Page Redirection', icon: 'check' },
                    { text: 'Sitemap', icon: 'check' },
                    { text: 'Robots.txt', icon: 'check' },
                    { text: 'Browser Compatibility Check', icon: 'check' },
                    { text: 'Page Speed Optimization', icon: 'check' },
                    { text: 'Broken Link Fixing', icon: 'check' },
                    { text: 'Site Architecture', icon: 'check' },
                    { text: 'Mobile Friendliness', icon: 'check' },
                    { text: 'Solve Keyword Cannibalization', icon: 'check' },
                    { text: 'Hreflang Tags', icon: 'close' },
                    { text: 'Competitor Backlink research', icon: 'close' },
                    { text: 'Bing Webmaster Optimization', icon: 'check' }
                ]
            },
            {
                category: 'Off Page SEO', items: [
                    { text: 'Link Building', icon: 'check' },
                    { text: 'Guest Blogging', icon: 'check' },
                    { text: 'Few Directory Submission', icon: 'check' },
                    { text: 'Active On Quora', icon: 'check' },
                    { text: 'Active On Reddit', icon: 'check' },
                    { text: 'Schema Implementation', icon: 'check' },
                    { text: 'Conversion Tracking', icon: 'check' },
                    { text: 'Monthly 1 Infographic Creation And Sharing', icon: 'check' }
                ]
            },
            {
                category: 'Local SEO', items: [
                    { text: 'GMB Setup & Optimization', icon: 'check' },
                    { text: 'GMB Posting', icon: 'check' },
                    { text: 'Google Map Creation', icon: 'check' },
                    { text: 'Local Citation', icon: 'check' }
                ]
            },
            {
                category: 'Monthly Report', items: [
                    { text: 'Work Done Report', icon: 'check' },
                    { text: 'On Page Report', icon: 'check' },
                    { text: 'Backlink Report', icon: 'check' },
                    { text: 'Traffic By Country', icon: 'check' },
                    { text: 'Traffic Comparison', icon: 'check' },
                    { text: 'Top 10 Performing Pages', icon: 'check' },
                    { text: 'Top 10 Keywords', icon: 'check' },
                    { text: 'Clicks, Impression, Position', icon: 'check' },
                ]
            }
        ]
    }
];

const seoPackageData04 = [
    {
        title: 'Premium Plus', description: 'Preferred for highly competitive Businesses', features: [
            {
                category: 'Initial Website Analysis', items: [
                    { text: 'Upto 160 Keyword Ranking', icon: 'check' },
                    { text: 'Site Audit', icon: 'check' },
                    { text: 'Competitor Analysis', icon: 'check' },
                    { text: 'Google Analytics Setup', icon: 'check' },
                    { text: 'Google Search Console Setup', icon: 'check' },
                    { text: 'Robots.txt Creation', icon: 'check' },
                    { text: 'Sitemap Creation', icon: 'check' }
                ]
            },
            {
                category: 'On Page Setup', items: [
                    { text: 'Keyword Research', icon: 'check' },
                    { text: 'Keyword mapping', icon: 'check' },
                    { text: 'Almost All Pages Meta And Heading Tag Optimization', icon: 'check' },
                    { text: 'URL Optimization', icon: 'check' },
                    { text: 'Image Optimization', icon: 'check' },
                    { text: '8 SEO Optimized Blog Articles', icon: 'check' },
                    { text: 'Existing Major Page Content Optimization', icon: 'check' }
                ]
            },
            {
                category: 'Technical SEO', items: [
                    { text: 'Canonical URL Addition', icon: 'check' },
                    { text: 'Custom 404 Page Setup', icon: 'check' },
                    { text: 'OG Tags', icon: 'check' },
                    { text: 'Page Redirection', icon: 'check' },
                    { text: 'Sitemap', icon: 'check' },
                    { text: 'Robots.txt', icon: 'check' },
                    { text: 'Browser Compatibility Check', icon: 'check' },
                    { text: 'Page Speed Optimization', icon: 'check' },
                    { text: 'Broken Link Fixing', icon: 'check' },
                    { text: 'Site Architecture', icon: 'check' },
                    { text: 'Mobile Friendliness', icon: 'check' },
                    { text: 'Solve Keyword Cannibalization', icon: 'check' },
                    { text: 'Hreflang Tags', icon: 'check' },
                    { text: 'Competitor Backlink Research', icon: 'check' },
                    { text: 'Bing And Other Webmaster Optimization', icon: 'check' }
                ]
            },
            {
                category: 'Off Page SEO', items: [
                    { text: 'Link Building', icon: 'check' },
                    { text: 'Guest Blogging', icon: 'check' },
                    { text: 'Few Directory Submission', icon: 'check' },
                    { text: 'Active On Quora', icon: 'check' },
                    { text: 'Active On Reddit', icon: 'check' },
                    { text: 'Schema Implementation', icon: 'check' },
                    { text: 'Conversion Tracking', icon: 'check' },
                    { text: 'Weekly 1 Infographic Creation And Sharing', icon: 'check' }
                ]
            },
            {
                category: 'Local SEO', items: [
                    { text: 'GMB Setup & Optimization', icon: 'check' },
                    { text: 'GMB Posting', icon: 'check' },
                    { text: 'Google Map Creation', icon: 'check' },
                    { text: 'Local Citation', icon: 'check' }
                ]
            },
            {
                category: 'Monthly Report', items: [
                    { text: 'Work Done Report', icon: 'check' },
                    { text: 'On Page Report', icon: 'check' },
                    { text: 'backlink Report', icon: 'check' },
                    { text: 'Traffic By Country', icon: 'check' },
                    { text: 'Traffic Comparison', icon: 'check' },
                    { text: 'Top 10 Performing Pages', icon: 'check' },
                    { text: 'Top 10 Keywords', icon: 'check' },
                    { text: 'Clicks, Impression, Position', icon: 'check' },
                ]
            }
        ]
    }
];

const buttonData = [
    {
        label: 'Quick Enquiry',
        href: '#',
    },
];

const Icon = ({ type }) => type === 'check' ? <FaCheck className='text-[10px]' /> : <IoClose className='text-[10px]' />;

function SEOPackage() {
    return (
        <div className='h-full flex flex-col items-center gap-24 mt-24 mb-[1600px]'>
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
            <div className=" h-screen bg-white">
                <div className="half-circle bg-[#5a7ee892] w-full h-[100%] rounded-t-full">
                    <div className='w-full flex justify-center'>
                        <div className='relative top-16 w-[90%] flex justify-center gap-4'>
                            <div className='p-2 flex flex-col gap-4 rounded-xl bg-white shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)]'>
                                {seoPackageData01.map((pkg, idx) => (
                                    <React.Fragment key={idx}>
                                        <div className='flex flex-col items-center justify-between gap-4'>
                                            <p className='text-3xl'>{pkg.title}</p>
                                            <p className='flex items-center gap-2'>
                                                <span>Rs </span>
                                                <span className='text-3xl'>{pkg.price} </span>
                                                <span>{pkg.period}</span>
                                            </p>
                                        </div>
                                        <p className='text-slate-500 text-center'>{pkg.description}</p>
                                        <p className='text-center text-slate-500'>---------------------</p>
                                        {pkg.features.map((feature, fIdx) => (
                                            <div key={fIdx} className='flex flex-col gap-2'>
                                                <p className='text-lg font-semibold'>{feature.category}</p>
                                                {feature.items.map((item, iIdx) => (
                                                    <div key={iIdx} className='flex items-center gap-2'>
                                                        <div className={`w-4 h-4 ${item.icon === 'check' ? 'bg-[#0b7be5]' : 'bg-[#da392e]'} text-white rounded-full flex items-center justify-center`}>
                                                            <Icon type={item.icon} />
                                                        </div>
                                                        <p className='font-medium text-sm'>{item.text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </React.Fragment>
                                ))}
                                <p className='font-medium'>no dedicated project manager</p>
                                <p>
                                    <span className='font-medium'>Contract: </span>
                                    <span> Minimum 6 Month</span>
                                </p>
                                <div className='w-full flex justify-center'>
                                    {buttonData.map((button, idx) => (
                                        <div key={idx} className='w-[200px] flex items-center justify-center'>
                                            <a
                                                href={button.href}
                                                className='w-[154px] h-[44px] font-semibold py-[10px] px-[24px] text-white rounded-full border bg-[#0b7be5] hover:bg-black flex justify-center items-center hover:w-[156px] hover:h-[46px] transition-all duration-500'
                                            >
                                                {button.label}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='p-2 flex flex-col gap-4 rounded-xl bg-white shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)]'>
                                {seoPackageData02.map((pkg, idx) => (
                                    <React.Fragment key={idx}>
                                        <div className='flex flex-col items-center justify-between gap-4'>
                                            <p className='text-3xl'>{pkg.title}</p>
                                            <p className='flex items-center gap-2'>
                                                <span>Rs </span>
                                                <span className='text-3xl'>{pkg.price} </span>
                                                <span>{pkg.period}</span>
                                            </p>
                                        </div>
                                        <p className='text-slate-500 text-center'>{pkg.description}</p>
                                        <p className='text-center text-slate-500'>---------------------</p>
                                        {pkg.features.map((feature, fIdx) => (
                                            <div key={fIdx} className='flex flex-col gap-2'>
                                                <p className='text-lg font-semibold'>{feature.category}</p>
                                                {feature.items.map((item, iIdx) => (
                                                    <div key={iIdx} className='flex items-center gap-2'>
                                                        <div className={`w-4 h-4 ${item.icon === 'check' ? 'bg-[#0b7be5]' : 'bg-[#da392e]'} text-white rounded-full flex items-center justify-center`}>
                                                            <Icon type={item.icon} />
                                                        </div>
                                                        <p className='font-medium text-sm'>{item.text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </React.Fragment>
                                ))}
                                <p className='font-medium'>no dedicated project manager</p>
                                <p>
                                    <span className='font-medium'>Contract: </span>
                                    <span> Minimum 6 Month</span>
                                </p>
                                <div className='w-full flex justify-center'>
                                    {buttonData.map((button, idx) => (
                                        <div key={idx} className='w-[200px] flex items-center justify-center'>
                                            <a
                                                href={button.href}
                                                className='w-[154px] h-[44px] font-semibold py-[10px] px-[24px] text-white rounded-full border bg-[#0b7be5] hover:bg-black flex justify-center items-center hover:w-[156px] hover:h-[46px] transition-all duration-500'
                                            >
                                                {button.label}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='p-2 flex flex-col gap-4 rounded-xl bg-white shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)]'>
                                {seoPackageData03.map((pkg, idx) => (
                                    <React.Fragment key={idx}>
                                        <div className='flex flex-col items-center justify-between gap-4'>
                                            <p className='text-3xl'>{pkg.title}</p>
                                            <p className='flex items-center gap-2'>
                                                <span>Rs </span>
                                                <span className='text-3xl'>{pkg.price} </span>
                                                <span>{pkg.period}</span>
                                            </p>
                                        </div>
                                        <p className='text-slate-500 text-center'>{pkg.description}</p>
                                        <p className='text-center text-slate-500'>---------------------</p>
                                        {pkg.features.map((feature, fIdx) => (
                                            <div key={fIdx} className='flex flex-col gap-2'>
                                                <p className='text-lg font-semibold'>{feature.category}</p>
                                                {feature.items.map((item, iIdx) => (
                                                    <div key={iIdx} className='flex items-center gap-2'>
                                                        <div className={`w-4 h-4 ${item.icon === 'check' ? 'bg-[#0b7be5]' : 'bg-[#da392e]'} text-white rounded-full flex items-center justify-center`}>
                                                            <Icon type={item.icon} />
                                                        </div>
                                                        <p className='font-medium text-sm'>{item.text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </React.Fragment>
                                ))}
                                <p className='font-medium'>no dedicated project manager</p>
                                <p>
                                    <span className='font-medium'>Contract: </span>
                                    <span> Minimum 6 Month</span>
                                </p>
                                <div className='w-full flex justify-center'>
                                    {buttonData.map((button, idx) => (
                                        <div key={idx} className='w-[200px] flex items-center justify-center'>
                                            <a
                                                href={button.href}
                                                className='w-[154px] h-[44px] font-semibold py-[10px] px-[24px] text-white rounded-full border bg-[#0b7be5] hover:bg-black flex justify-center items-center hover:w-[156px] hover:h-[46px] transition-all duration-500'
                                            >
                                                {button.label}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='p-2 flex flex-col gap-4 rounded-xl bg-white shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)]'>
                                {seoPackageData04.map((pkg, idx) => (
                                    <React.Fragment key={idx}>
                                        <div className='flex flex-col items-center justify-between gap-4'>
                                            <p className='text-3xl'>{pkg.title}</p>
                                        </div>
                                        <p className='text-slate-500 text-center'>{pkg.description}</p>
                                        <p className='text-center text-slate-500'>---------------------</p>
                                        {pkg.features.map((feature, fIdx) => (
                                            <div key={fIdx} className='flex flex-col gap-2'>
                                                <p className='text-lg font-semibold'>{feature.category}</p>
                                                {feature.items.map((item, iIdx) => (
                                                    <div key={iIdx} className='flex items-center gap-2'>
                                                        <div className={`w-4 h-4 ${item.icon === 'check' ? 'bg-[#0b7be5]' : 'bg-[#da392e]'} text-white rounded-full flex items-center justify-center`}>
                                                            <Icon type={item.icon} />
                                                        </div>
                                                        <p className='font-medium text-sm'>{item.text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </React.Fragment>
                                ))}
                                <p className='font-medium'>no dedicated project manager</p>
                                <p>
                                    <span className='font-medium'>Contract: </span>
                                    <span> Minimum 6 Month</span>
                                </p>
                                <div className='w-full flex justify-center'>
                                    {buttonData.map((button, idx) => (
                                        <div key={idx} className='w-[200px] flex items-center justify-center'>
                                            <a
                                                href={button.href}
                                                className='w-[154px] h-[44px] font-semibold py-[10px] px-[24px] text-white rounded-full border bg-[#0b7be5] hover:bg-black flex justify-center items-center hover:w-[156px] hover:h-[46px] transition-all duration-500'
                                            >
                                                {button.label}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                        <p className='text-slate-500 mt-24 ms-16'>*Note : All of the above packages are exclusive of VAT</p>
                </div>
            </div>
        </div>
    );
}

export default SEOPackage;

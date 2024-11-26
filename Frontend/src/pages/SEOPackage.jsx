
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
                category: 'on page setup', items: [
                    { text: 'keyword Research', icon: 'check' },
                    { text: 'keyword mapping', icon: 'close' },
                    { text: 'few major pages meta and heading tag optimization', icon: 'check' },
                    { text: 'URL optimization', icon: 'check' },
                    { text: 'Image optimization', icon: 'check' },
                    { text: '2 SEO optimized blog articles', icon: 'check' },
                    { text: 'Few existing content optimization', icon: 'check' }
                ]
            },
            {
                category: 'technical SEO', items: [
                    { text: 'Canonical URL Addition', icon: 'check' },
                    { text: 'custom 404 page setup', icon: 'check' },
                    { text: 'OG tags', icon: 'check' },
                    { text: 'page redirection', icon: 'check' },
                    { text: 'sitemap', icon: 'check' },
                    { text: 'robots.txt', icon: 'check' },
                    { text: 'browser compatibility check', icon: 'check' },
                    { text: 'page speed optimization', icon: 'check' },
                    { text: 'broken link fixing', icon: 'close' },
                    { text: 'site architecture', icon: 'close' },
                    { text: 'mobile friendliness', icon: 'close' },
                    { text: 'solve keyword cannibalization', icon: 'close' },
                    { text: 'hreflang tags', icon: 'close' },
                    { text: 'competitor backlink research', icon: 'close' },
                    { text: 'other webmaster optimization', icon: 'close' }
                ]
            },
            {
                category: 'off page SEO', items: [
                    { text: 'link building', icon: 'close' },
                    { text: 'guest blogging', icon: 'close' },
                    { text: 'Directory submission', icon: 'close' },
                    { text: 'quora posting', icon: 'check' },
                    { text: 'reddit posting', icon: 'check' },
                    { text: 'schema implementation', icon: 'close' },
                    { text: 'conversion tracking', icon: 'close' },
                    { text: 'infographic creation and sharing', icon: 'close' }
                ]
            },
            {
                category: 'local SEO', items: [
                    { text: 'GMB setup & optimization', icon: 'check' },
                    { text: 'GMB posting', icon: 'close' },
                    { text: 'google map creation', icon: 'check' },
                    { text: 'local citation', icon: 'close' }
                ]
            },
            {
                category: 'monthly report', items: [
                    { text: 'work done report', icon: 'check' },
                    { text: 'on page report', icon: 'check' },
                    { text: 'backlink report', icon: 'close' },
                    { text: 'traffic by country', icon: 'check' },
                    { text: 'traffic comparison', icon: 'check' },
                    { text: 'top 10 performing pages', icon: 'check' },
                    { text: 'top 10 keywords', icon: 'check' },
                    { text: 'clicks, impression, position', icon: 'check' },
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
                    { text: 'upto 20 keyword ranking', icon: 'check' },
                    { text: 'site audit', icon: 'check' },
                    { text: 'competitor analysis', icon: 'check' },
                    { text: 'google analytics setup', icon: 'check' },
                    { text: 'google search console setup', icon: 'check' },
                    { text: 'robots.txt creation', icon: 'check' },
                    { text: 'sitemap creation', icon: 'check' }
                ]
            },
            {
                category: 'on page setup', items: [
                    { text: 'keyword Research', icon: 'check' },
                    { text: 'keyword mapping', icon: 'check' },
                    { text: 'major pages meta and heading tag optimization', icon: 'check' },
                    { text: 'URL optimization', icon: 'check' },
                    { text: 'Image optimization', icon: 'check' },
                    { text: '4 SEO optimized blog articles', icon: 'check' },
                    { text: 'existing major page content optimization', icon: 'check' }
                ]
            },
            {
                category: 'technical SEO', items: [
                    { text: 'Canonical URL Addition', icon: 'check' },
                    { text: 'custom 404 page setup', icon: 'check' },
                    { text: 'OG tags', icon: 'check' },
                    { text: 'page redirection', icon: 'check' },
                    { text: 'sitemap', icon: 'check' },
                    { text: 'robots.txt', icon: 'check' },
                    { text: 'browser compatibility check', icon: 'check' },
                    { text: 'page speed optimization', icon: 'check' },
                    { text: 'broken link fixing', icon: 'check' },
                    { text: 'site architecture', icon: 'check' },
                    { text: 'mobile friendliness', icon: 'check' },
                    { text: 'solve keyword cannibalization', icon: 'check' },
                    { text: 'hreflang tags', icon: 'close' },
                    { text: 'competitor backlink research', icon: 'close' },
                    { text: 'bing webmaster optimization', icon: 'check' }
                ]
            },
            {
                category: 'off page SEO', items: [
                    { text: 'link building', icon: 'check' },
                    { text: 'guest blogging', icon: 'close' },
                    { text: 'few Directory submission', icon: 'check' },
                    { text: 'few weekly post on quora', icon: 'check' },
                    { text: 'few weekly post on reddit', icon: 'check' },
                    { text: 'schema implementation', icon: 'check' },
                    { text: 'conversion tracking', icon: 'close' },
                    { text: 'few infographic creation and sharing', icon: 'check' }
                ]
            },
            {
                category: 'local SEO', items: [
                    { text: 'GMB setup & optimization', icon: 'check' },
                    { text: 'GMB posting', icon: 'check' },
                    { text: 'google map creation', icon: 'check' },
                    { text: 'few local citation', icon: 'check' }
                ]
            },
            {
                category: 'monthly report', items: [
                    { text: 'work done report', icon: 'check' },
                    { text: 'on page report', icon: 'check' },
                    { text: 'backlink report', icon: 'check' },
                    { text: 'traffic by country', icon: 'check' },
                    { text: 'traffic comparison', icon: 'check' },
                    { text: 'top 10 performing pages', icon: 'check' },
                    { text: 'top 10 keywords', icon: 'check' },
                    { text: 'clicks, impression, position', icon: 'check' },
                ]
            }
        ]
    }
];

const seoPackageData03 = [
    {
        title: 'Premium', price: ' 79,999/', period: 'mon', description: 'Preferred for large Businessess', features: [
            {
                category: 'Initial website analysis', items: [
                    { text: 'upto 40 keyword ranking', icon: 'check' },
                    { text: 'Site Audit', icon: 'check' },
                    { text: 'Competitor Analysis', icon: 'check' },
                    { text: 'Google Analytics Setup', icon: 'check' },
                    { text: 'Google Search Console Setup', icon: 'check' },
                    { text: 'Robots.txt Creation', icon: 'check' },
                    { text: 'Sitemap Creation', icon: 'check' }
                ]
            },
            {
                category: 'on page setup', items: [
                    { text: 'keyword Research', icon: 'check' },
                    { text: 'keyword mapping', icon: 'check' },
                    { text: 'major pages meta and heading tag optimization', icon: 'check' },
                    { text: 'URL optimization', icon: 'check' },
                    { text: 'Image optimization', icon: 'check' },
                    { text: '6 SEO optimized blog artic', icon: 'check' },
                    { text: 'existing major page content optimization', icon: 'check' }
                ]
            },
            {
                category: 'technical SEO', items: [
                    { text: 'Canonical URL Addition', icon: 'check' },
                    { text: 'custom 404 page setup', icon: 'check' },
                    { text: 'OG tags', icon: 'check' },
                    { text: 'page redirection', icon: 'check' },
                    { text: 'sitemap', icon: 'check' },
                    { text: 'robots.txt', icon: 'check' },
                    { text: 'browser compatibility check', icon: 'check' },
                    { text: 'page speed optimization', icon: 'check' },
                    { text: 'broken link fixing', icon: 'check' },
                    { text: 'site architecture', icon: 'check' },
                    { text: 'mobile friendliness', icon: 'check' },
                    { text: 'solve keyword cannibalization', icon: 'check' },
                    { text: 'hreflang tags', icon: 'close' },
                    { text: 'competitor backlink research', icon: 'close' },
                    { text: 'bing webmaster optimization', icon: 'check' }
                ]
            },
            {
                category: 'off page SEO', items: [
                    { text: 'link building', icon: 'check' },
                    { text: 'guest blogging', icon: 'check' },
                    { text: 'few Directory submission', icon: 'check' },
                    { text: 'active on quora', icon: 'check' },
                    { text: 'active on reddit', icon: 'check' },
                    { text: 'schema implementation', icon: 'check' },
                    { text: 'conversion tracking', icon: 'check' },
                    { text: 'monthly 1 infographic creation and sharing', icon: 'check' }
                ]
            },
            {
                category: 'local SEO', items: [
                    { text: 'GMB setup & optimization', icon: 'check' },
                    { text: 'GMB posting', icon: 'check' },
                    { text: 'google map creation', icon: 'check' },
                    { text: 'local citation', icon: 'check' }
                ]
            },
            {
                category: 'monthly report', items: [
                    { text: 'work done report', icon: 'check' },
                    { text: 'on page report', icon: 'check' },
                    { text: 'backlink report', icon: 'check' },
                    { text: 'traffic by country', icon: 'check' },
                    { text: 'traffic comparison', icon: 'check' },
                    { text: 'top 10 performing pages', icon: 'check' },
                    { text: 'top 10 keywords', icon: 'check' },
                    { text: 'clicks, impression, position', icon: 'check' },
                ]
            }
        ]
    }
];

const seoPackageData04 = [
    {
        title: 'Premium Plus', description: 'Preferred for highly competitive Businesses', features: [
            {
                category: 'Initial website analysis', items: [
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
                category: 'on page setup', items: [
                    { text: 'keyword Research', icon: 'check' },
                    { text: 'keyword mapping', icon: 'check' },
                    { text: 'almost all pages meta and heading tag optimization', icon: 'check' },
                    { text: 'URL optimization', icon: 'check' },
                    { text: 'Image optimization', icon: 'check' },
                    { text: '8 SEO optimized blog articles', icon: 'check' },
                    { text: 'existing major page content optimization', icon: 'check' }
                ]
            },
            {
                category: 'technical SEO', items: [
                    { text: 'Canonical URL Addition', icon: 'check' },
                    { text: 'custom 404 page setup', icon: 'check' },
                    { text: 'OG tags', icon: 'check' },
                    { text: 'page redirection', icon: 'check' },
                    { text: 'sitemap', icon: 'check' },
                    { text: 'robots.txt', icon: 'check' },
                    { text: 'browser compatibility check', icon: 'check' },
                    { text: 'page speed optimization', icon: 'check' },
                    { text: 'broken link fixing', icon: 'check' },
                    { text: 'site architecture', icon: 'check' },
                    { text: 'mobile friendliness', icon: 'check' },
                    { text: 'solve keyword cannibalization', icon: 'check' },
                    { text: 'hreflang tags', icon: 'check' },
                    { text: 'competitor backlink research', icon: 'check' },
                    { text: 'bing and other webmaster optimization', icon: 'check' }
                ]
            },
            {
                category: 'off page SEO', items: [
                    { text: 'link building', icon: 'check' },
                    { text: 'guest blogging', icon: 'check' },
                    { text: 'few Directory submission', icon: 'check' },
                    { text: 'active on quora', icon: 'check' },
                    { text: 'active on reddit', icon: 'check' },
                    { text: 'schema implementation', icon: 'check' },
                    { text: 'conversion tracking', icon: 'check' },
                    { text: 'weekly 1 infographic creation and sharing', icon: 'check' }
                ]
            },
            {
                category: 'local SEO', items: [
                    { text: 'GMB setup & optimization', icon: 'check' },
                    { text: 'GMB posting', icon: 'check' },
                    { text: 'google map creation', icon: 'check' },
                    { text: 'local citation', icon: 'check' }
                ]
            },
            {
                category: 'monthly report', items: [
                    { text: 'work done report', icon: 'check' },
                    { text: 'on page report', icon: 'check' },
                    { text: 'backlink report', icon: 'check' },
                    { text: 'traffic by country', icon: 'check' },
                    { text: 'traffic comparison', icon: 'check' },
                    { text: 'top 10 performing pages', icon: 'check' },
                    { text: 'top 10 keywords', icon: 'check' },
                    { text: 'clicks, impression, position', icon: 'check' },
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

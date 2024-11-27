import React from "react";
import "./SEOPackage.css";
import { FaAngleDown } from "react-icons/fa6";
import star from "../../public/images/star.svg";

const seoPackageData01 = [
  {
    title: "Starter",
    price: "12000/",
    period: "mon",
    description: "For marketing newbies and small house teams",
    best: false,
    features: [
      {
        category: "Initial website analysis",
        items: [
          { text: "social media management", icon: "check" },
          { text: "6 Graphical banners", icon: "check" },
          { text: "1 GIF/Video (10 secs or less)", icon: "check" },
          { text: "Platforms: Facebook, Instagram", icon: "check" },
          { text: "1 Free Festive Post", icon: "check" },
          { text: "Direct Advertisement", icon: "check" },
        ],
      },
    ],
  },
  {
    title: "Basic",
    price: "49,999/",
    period: "mon",
    description: "For new but established companies seeking to grow",
    best: false,
    features: [
      {
        items: [
          { text: "social media management" },
          { text: "planning and strategy" },
          { text: "Profile / Cover Image Creation [included]" },
          { text: "10 Graphical Banners", icon: "check" },
          { text: "2 GIFs (10 secs) or 1 Video (20 secs or less)" },
          { text: "Platforms: Facebook, Instagram" },
          { text: "1 Free Festive Post" },
          { text: "Content Calendar" },
          { text: "Organic Promotion" },
          { text: "Monthly Reporting" },
          { text: "Keyword Based Content" },
          { text: "Direct Advertisement + Ads Manager" },
        ],
      },
    ],
  },
  {
    title: "Standard",
    price: "30000/",
    period: "mon",
    description: "For those looking to grow their business/brand",
    best: true,
    features: [
      {
        items: [
          { text: "social media management" },
          { text: "planning and strategy" },
          { text: "Profile / Cover Image Creation [included]" },
          { text: "15 Graphical Banners", icon: "check" },
          { text: "3 GIFs (10 secs) / 2 Video (15 secs or less)" },
          { text: "Platforms: Facebook, Instagram, Tiktok" },
          { text: "Competitor Analysis" },
          { text: "2 Free Festive Post" },
          { text: "Content Calendar" },
          { text: "Organic Promotion" },
          { text: "Lead Generation" },
          { text: "Customer Review" },
          { text: "Weekly Meeting" },
        ],
      },
    ],
  },
  {
    title: "Premium",
    price: "45000/",
    period: "mon",
    description: "For those looking to grow their business/brand",
    best: false,
    features: [
      {
        items: [
          { text: "social media management" },
          { text: "planning and strategy" },
          { text: "Profile / Cover Image Creation [included]" },
          { text: "20 Graphical Banners", icon: "check" },
          { text: "4 GIFs (10 secs) / 3 Video (15 secs or less)" },
          { text: "Platforms: Facebook, Instagram, Tiktok and LinkedIn" },
          { text: "Competitor Analysis" },
          { text: "3 Free Festive Post" },
          { text: "Content Calendar" },
          { text: "Organic Promotion" },
          { text: "Lead Generation" },
          { text: "Customer Review" },
        ],
      },
    ],
  },
];

const buttonData = [
  {
    label: "Quick Enquiry",
    href: "#",
  },
];

function SocialMediaPackage() {
  return (
    <div className="h-full flex flex-col items-center gap-24 mt-24 mb-[385px]">
      <div className="w-[55%] flex flex-col items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-12 h-0.5 bg-[#0b7be5]"></div>
          <p className="text-lg font-medium text-gray-500">SUBSCRIPTION PLAN</p>
          <div className="w-12 h-0.5 bg-[#0b7be5]"></div>
        </div>
        <p className="text-4xl font-bold">Social Media Packages</p>
        <div className="text-center font-[20px]">
          <p>Choose plans from our simple, transparent pricing</p>
        </div>
      </div>
      <div className=" h-screen bg-white">
        <div className="half-circle bg-[#5a7ee892] w-full h-[100%] rounded-t-full">
          <div className="w-full flex justify-center">
            <div className=" w-[90%]  flex justify-center gap-4">
              <div className="p-2 flex flex-col justify-between gap-4 rounded-xl">
                <div className="p-2 flex gap-x-4">
                  {seoPackageData01.map((pkg, idx) => (
                    <div
                    key={idx}
                    className={`bg-white mt-12 pb-4 ${pkg.best === true ? 'rounded-bl-xl rounded-br-xl' : 'rounded-xl'} shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)] flex flex-col gap-4`}
                    >
                        {pkg.best === true ? (
                          <div className="relative top-[-38px]">
                            <div className="p-2 text-white flex justify-center gap-4 rounded-tl-xl rounded-tr-xl bg-blue-500">
                              <div className="flex items-center">
                                <img src={star} alt="" />
                              </div>
                              <p className="font-medium">best value</p>
                              <div className="flex items-center">
                                <img src={star} alt="" />
                              </div>
                            </div>
                          </div>
                        ) : <div className="pt-[38px]"></div>}
                      <div className="px-4">
                        <div className="flex flex-col items-center justify-between gap-4 px-4 pb-4">
                          <p className="text-2xl font-medium">{pkg.title}</p>
                          <p className="text-blue-500 flex items-center gap-2">
                            <span className="font-medium">Rs </span>
                            <span className="text-2xl font-medium">
                              {pkg.price}{" "}
                            </span>
                            <span className="font-medium">{pkg.period}</span>
                          </p>
                        </div>
                        <p className="text-center font-[18px]">
                          {pkg.description}
                        </p>
                        <p className="text-center text-[18px] text-slate-500">
                          -----------------------------------
                        </p>
                        {pkg.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex flex-col gap-2">
                            {feature.items.map((item, iIdx) => (
                              <div
                                key={iIdx}
                                className="flex items-center gap-2"
                              >
                                <div
                                  className={`w-4 h-4 rounded-full flex items-center justify-center`}
                                >
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                </div>
                                <p className="font-medium text-sm">
                                  {item.text}
                                </p>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="w-full h-full flex justify-center items-end">
                        {buttonData.map((button, idx) => (
                          <div
                            key={idx}
                            className="w-[200px] flex items-center justify-center"
                          >
                            <a
                              href={button.href}
                              className="w-[154px] h-[44px] font-semibold py-[10px] px-[24px] text-white rounded-full border bg-[#0b7be5] hover:bg-black flex justify-center items-center hover:w-[156px] hover:h-[46px] transition-all duration-500"
                            >
                              {button.label}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-96 bg-[#5a7ee892]">
          <div className="pt-64 ps-16 ">
            <p>25% Service Charge On Advertisement</p>
            <p>*Note : All of the above packages are exclusive of VAT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaPackage;

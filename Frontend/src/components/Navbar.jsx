import React, { useState } from "react";
import Image from "../../public/images/neem_infosys.png";
import AnimatedPhone from "../../public/images/Phone.gif";
import flag from "../../public/images/flag-nepal.png";
import { CiLock } from "react-icons/ci";
import { FaAngleDown, FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import { MdOutlineTextSnippet } from "react-icons/md";
import { FaBookAtlas } from "react-icons/fa6";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { FaFileVideo } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import SlidingText from "./SlidingText";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isServiceHovered, setIsServiceHovered] = useState(false);
  const [isPricingHovered, setIsPricingHovered] = useState(false);
  const [isInsightsHovered, setIsInsightsHovered] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky top-0 z-10 border-gray-200">
      <div className="p-1 text-[14px] font-semibold w-full text-white bg-[#3779d7] xl:ps-[40%] px-2 sm:px-[10%] flex gap-2 items-center">
        <div className="xl:w-[40%] w-0 flex items-center justify-between">
          <p className="hidden xl:block hover:text-gray-200 cursor-pointer">
            Blogs
          </p>
          <p className="hidden xl:block">|</p>
          <p className="hidden xl:block hover:text-gray-200 cursor-pointer ">
            e-Guides
          </p>
          <p className="hidden xl:block">|</p>
          <p className="hidden xl:block hover:text-gray-200 cursor-pointer">
            Feature Listing
          </p>
        </div>
        <div className="xl:w-[60%] w-full flex items-center justify-evenly">
          <div className="w-full hidden  sm:flex items-center justify-evenly">
            <div className="w-[20px] ml-4 h-[20px]  flex items-center justify-center">
              <img src={AnimatedPhone} alt="Animated Phone" />
            </div>
            <div className="w-[21px] h-[21px] bg-white p-0.5 object-cover ml-4 rounded-full flex items-center justify-center">
              <img src={flag} className="w-[20px] h-[20px]" alt="" />
            </div>
            <p className="mr-4">+977-9841822340</p>
            <p>|</p>
          </div>
          <div className="w-full flex items-center justify-evenly">
            <div className="w-[21px] h-[21px] bg-white p-0.5 ml-4 object-cover rounded-full flex items-center justify-center">
              <img src={flag} className="w-[20px] h-[20px]" alt="" />
            </div>
            <p>+977-9868715191</p>
            <div className="ml-4 flex gap-1">
              <CiLock className="text-xl" />
              <p className="flex items-center ml-2 justify-center font-semibold">
                Login <FaAngleDown className="font-semibold mt-1 text-[18px]" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="w-full">
          <ul className="w-full lg:px-32 md:px-10 px-2 font-medium flex justify-between lg:justify-between lg:items-center text-black">
            <div className="flex justify-between">
              <li>
                <a href="/" className="block py-2 px-3 hover:text-blue-700">
                  <img
                    src="https://bluefox.com.np/assets/images/logo.svg"
                    alt="Neem Infosys"
                    className="w-[147px] h-[60px]"
                  />
                </a>
              </li>
            </div>
            <div className="flex justify-end ml-20 lg:justify-normal w-full font-semibold text-[15px]">
              <div className="hidden w-full xl:flex">
                <div className="hidden w-full items-center justify-center gap-2 md:flex">
                  <li>
                    <a href="/about" className="block py-2 px-3">
                      About Us
                    </a>
                  </li>
                  <li
                    className="relative group"
                    onMouseEnter={() => setIsServiceHovered(true)}
                    onMouseLeave={() => setIsServiceHovered(false)}
                  >
                    <a
                      href="#"
                      className={`flex items-center justify-center py-2 px-3 ${
                        isServiceHovered ? "text-[#2641c2]" : "text-black"
                      }`}
                    >
                      Service
                      {isServiceHovered ? <FaCaretUp /> : <FaCaretDown />}
                    </a>
                    <div className="lg:w-[600px] w-full hidden group-hover:block absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow">
                      <ul className="py-2 text-sm text-black">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Service 1
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Service 2
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Service 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="/product" className="block py-2 px-3">
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="/portfolio" className="block py-2 px-3">
                      Portfolio
                    </a>
                  </li>
                  <li
                    className="relative group"
                    onMouseEnter={() => setIsPricingHovered(true)}
                    onMouseLeave={() => setIsPricingHovered(false)}
                  >
                    <a
                      href="#"
                      className={`flex items-center justify-center py-2 px-3 ${
                        isPricingHovered ? "text-[#2641c2]" : "text-black"
                      }`}
                      onClick={() => setIsPricingHovered(!isPricingHovered)}
                    >
                      Pricing
                      {isPricingHovered ? <FaCaretUp /> : <FaCaretDown />}
                    </a>
                    <div className="w-72 hidden group-hover:block absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow">
                      <ul className="py-2 text-sm text-black">
                        <li>
                          <a
                            href="#"
                            className="flex items-center  gap-6 font-semibold px-4 py-2 hover:bg-gray-100"
                          >
                            <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                              <IoEarth className="text-blue-500" />
                            </div>
                            Web Development Package
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center  gap-6 font-semibold px-4 py-2 hover:bg-gray-100"
                          >
                            <div className="w-6 h-6 bg-pink-100 rounded flex items-center justify-center">
                              <IoSearchSharp className="text-pink-500" />
                            </div>
                            SEO Pacakge
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center gap-6 font-semibold px-4 py-2 hover:bg-gray-100"
                          >
                            <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
                              <FaShareAlt className="text-orange-500" />
                            </div>
                            Social Media Package
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className="relative group"
                    onMouseEnter={() => setIsInsightsHovered(true)}
                    onMouseLeave={() => setIsInsightsHovered(false)}
                  >
                    <a
                      href="#"
                      className={`flex items-center justify-center py-2 px-3 ${
                        isInsightsHovered ? "text-[#2641c2]" : "text-black"
                      }`}
                    >
                      Insights
                      {isInsightsHovered ? <FaCaretUp /> : <FaCaretDown />}
                    </a>
                    <div className="w-72 hidden group-hover:block absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow">
                      <ul className="py-2 text-sm text-black">
                        <li>
                          <a
                            href="#"
                            className="flex items-center  gap-6 font-semibold px-4 py-2 hover:bg-gray-100"
                          >
                            <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                              <MdOutlineTextSnippet className="text-blue-500" />
                            </div>
                            Blogs
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center  gap-6 font-semibold px-4 py-2 hover:bg-gray-100"
                          >
                            <div className="w-6 h-6 bg-pink-100 rounded flex items-center justify-center">
                              <FaBookAtlas className="text-pink-500" />
                            </div>
                            e-Guides
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center  gap-6 font-semibold px-4 py-2 hover:bg-gray-100"
                          >
                            <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
                              <MdOutlineFeaturedPlayList className="text-orange-500" />
                            </div>
                            Feature Listing
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center  gap-6 font-semibold px-4 py-2 hover:bg-gray-100"
                          >
                            <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                              <FaFileVideo className="text-purple-500" />
                            </div>
                            Video Libeary
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="/career" className="block py-2 px-3">
                      Careers
                    </a>
                  </li>
                </div>
              </div>
              <div className="flex gap-2 mr-12">
                <div className="xl:hidden flex items-center">
                  <button
                    className="p-1 rounded-sm bg-[#3779d7] text-white text-2xl"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                  >
                    <IoReorderThreeOutline className="text-[24px]" />
                  </button>
                </div>
                <SlidingText className="ml-2" />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

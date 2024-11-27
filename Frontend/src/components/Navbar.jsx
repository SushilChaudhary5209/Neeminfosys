import React, { useState } from "react";
import Image from "../../public/images/neem_infosys.png";
import AnimatedPhone from "../../public/images/Phone.gif";
import flag from "../../public/images/flag-nepal.png";
import { CiLock, CiMail } from "react-icons/ci";
import { FaAngleDown, FaCaretDown, FaCaretUp, FaPhone } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import {
  MdLocationOn,
  MdOutlineLocationOn,
  MdOutlineTextSnippet,
} from "react-icons/md";
import { FaBookAtlas } from "react-icons/fa6";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { FaFileVideo } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import SlidingText from "./SlidingText";
import Button from "./Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isServiceHovered, setIsServiceHovered] = useState(false);
  const [isPricingHovered, setIsPricingHovered] = useState(false);
  const [isInsightsHovered, setIsInsightsHovered] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("development");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setIsEnquiryOpen(false);
  };

  const developmentContent = (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 p-6">
      <div className="border rounded-lg p-4 bg-[#e6f4ea] flex items-start gap-4">
        <img
          src="https://via.placeholder.com/80"
          alt="Development"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-black">Development</h3>
          <p className="text-sm text-gray-700">
            Creating digital experiences through coding, design, and user
            interaction principles.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="border rounded-lg p-4 bg-[#e6f4ea] flex items-start gap-4">
          <img
            src="https://via.placeholder.com/80"
            alt="Website Development"
            className="w-16 h-16 rounded object-cover"
          />
          <div>
            <h4 className="text-md font-semibold">Website Development</h4>
            <p className="text-sm text-gray-700">
              Specialized Custom Website Development Services
            </p>
          </div>
        </div>
        <div className="border rounded-lg p-4 bg-[#e6f4ea] flex items-start gap-4">
          <img
            src="https://via.placeholder.com/80"
            alt="App Development"
            className="w-16 h-16 rounded object-cover"
          />
          <div>
            <h4 className="text-md font-semibold">App Development</h4>
            <p className="text-sm text-gray-700">
              Building Custom Apps for Seamless User Experience
            </p>
          </div>
        </div>
        <div className="border rounded-lg p-4 bg-[#e6f4ea] flex items-start gap-4">
          <img
            src="https://via.placeholder.com/80"
            alt="System/Software Development"
            className="w-16 h-16 rounded object-cover"
          />
          <div>
            <h4 className="text-md font-semibold">
              System/Software Development
            </h4>
            <p className="text-sm text-gray-700">
              Cutting-edge System/Software Development Solutions
            </p>
          </div>
        </div>
        <div className="border rounded-lg p-4 bg-[#e6f4ea] flex items-start gap-4">
          <img
            src="https://via.placeholder.com/80"
            alt="UI/UX"
            className="w-16 h-16 rounded object-cover"
          />
          <div>
            <h4 className="text-md font-semibold">UI/UX</h4>
            <p className="text-sm text-gray-700">
              Design UI/UX interfaces for effortless user interaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const marketingContent = (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 p-6">
      <div className="border rounded-lg p-4 bg-[#e6f4ea] flex items-start gap-4">
        <img
          src="https://via.placeholder.com/80"
          alt="Marketing"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-black">Marketing</h3>
          <p className="text-sm text-gray-700">
            Promotion of products or services via online channels and
            strategies.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="border rounded-lg p-4 bg-[#e6f4ea] flex items-start gap-4">
          <img
            src="https://via.placeholder.com/80"
            alt="SEO"
            className="w-16 h-16 rounded object-cover"
          />
          <div>
            <h4 className="text-md font-semibold">
              Search Engine Optimization (SEO)
            </h4>
            <p className="text-sm text-gray-700">
              Enhance Search Engine Ranking with Effective SEO
            </p>
          </div>
        </div>
        <div className="border rounded-lg p-4 bg-[#e6f4ea] flex items-start gap-4">
          <img
            src="https://via.placeholder.com/80"
            alt="SMM"
            className="w-16 h-16 rounded object-cover"
          />
          <div>
            <h4 className="text-md font-semibold">
              Social Media Marketing (SMM)
            </h4>
            <p className="text-sm text-gray-700">
              Boost online presence, engage audience
            </p>
          </div>
        </div>
        <div className="border rounded-lg p-4 bg-[#e6f4ea] flex items-start gap-4">
          <img
            src="https://via.placeholder.com/80"
            alt="Graphic Design"
            className="w-16 h-16 rounded object-cover"
          />
          <div>
            <h4 className="text-md font-semibold">Graphic Design</h4>
            <p className="text-sm text-gray-700">
              Bringing Ideas to Visual Life
            </p>
          </div>
        </div>
        <div className="border rounded-lg p-4 bg-[#e6f4ea] flex items-start gap-4">
          <img
            src="https://via.placeholder.com/80"
            alt="Content Writing"
            className="w-16 h-16 rounded object-cover"
          />
          <div>
            <h4 className="text-md font-semibold">Content Writing</h4>
            <p className="text-sm text-gray-700">
              Creating Content that Resonates
            </p>
          </div>
        </div>
      </div>
    </div>
  );

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
                    {isServiceHovered && (
                      <div className="lg:w-[600px] w-full absolute z-10 bg-white rounded-lg shadow-lg">
                        <div className="flex flex-col">
                          <button
                            className={`text-left px-4 py-2 font-semibold ${
                              activeSection === "development"
                                ? "bg-gray-200"
                                : ""
                            }`}
                            onMouseEnter={() => setActiveSection("development")}
                          >
                            Development
                          </button>
                          <button
                            className={`text-left px-4 py-2 font-semibold ${
                              activeSection === "marketing" ? "bg-gray-200" : ""
                            }`}
                            onMouseEnter={() => setActiveSection("marketing")}
                          >
                            Marketing
                          </button>
                        </div>
                        <div>
                          {activeSection === "development"
                            ? developmentContent
                            : marketingContent}
                        </div>
                      </div>
                    )}
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
                      <ul className="py-2 text-sm text-[#2641c2]">
                        <li>
                          <a
                            href="/pricing/webdevelopmentpackage"
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
                            href="/pricing/seopackage"
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
                            href="/pricing/socialmediapackage"
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
                          <p
                            onClick={() => setIsEnquiryOpen(true)}
                            className="flex items-center gap-6 font-semibold px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
                              <MdOutlineFeaturedPlayList className="text-orange-500" />
                            </div>
                            Quick Enquiry
                          </p>

                          {isEnquiryOpen && (
                            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
                              <div className="bg-white w-11/12 max-w-6xl rounded-lg shadow-lg p-6 relative grid grid-cols-1 md:grid-cols-2">
                                <button
                                  onClick={() => setIsEnquiryOpen(false)}
                                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
                                >
                                  &times;
                                </button>

                                <div className="p-4">
                                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                                    Have a Project in Mind
                                  </h3>
                                  <h1 className="text-[50px] font-bold mt-2 text-gray-700">
                                    Tell Us A Bit More
                                  </h1>
                                  <form className="space-y-6">
                                    <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 gap-4">
                                      <div>
                                        <input
                                          type="text"
                                          required
                                          className="w-full px-2 py-2.5 border-[1px] border-[#85a9df] rounded outline-none tracking-wide text-[18px] text-gray-600"
                                          placeholder="Name *"
                                        />
                                      </div>
                                      <div>
                                        <input
                                          type="email"
                                          required
                                          className="w-full px-2 py-2.5 border-[1px] border-[#85a9df] rounded outline-none tracking-wide text-[18px] text-gray-600"
                                          placeholder="Email *"
                                        />
                                      </div>
                                    </div>

                                    <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 gap-4">
                                      <div className="w-full h-[50px] flex border-[1px] border-[#85a9df] rounded outline-none tracking-wide text-[18px] text-gray-600">
                                        <span className="px-2 h-full flex items-center bg-gray-100 border-r border-gray-300">
                                          +977
                                        </span>
                                        <input
                                          type="text"
                                          required
                                          className="w-full px-2 outline-none"
                                          placeholder="Phone Number"
                                        />
                                      </div>

                                      <div className="w-full border-[1px] border-[#85a9df] rounded outline-none tracking-wide text-[18px] text-gray-600">
                                        <select
                                          required
                                          className="w-full h-full p-2 bg-white rounded"
                                        >
                                          <option value="">
                                            --- Service ---
                                          </option>
                                          <option value="website-development">
                                            Website Development
                                          </option>
                                          <option value="app-development">
                                            App Development
                                          </option>
                                          <option value="ui-ux">UI/UX</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div>
                                      <textarea
                                        rows="6"
                                        required
                                        className="w-full p-2 border-[1px] border-[#85a9df] rounded outline-none tracking-wide text-[18px] text-gray-600"
                                        placeholder="Write a message *"
                                      ></textarea>
                                    </div>
                                    <button
                                      type="submit"
                                      className="bg-[#3779d7] text-white px-5 py-3 rounded-3xl cursor-pointer text-[18px]"
                                    >
                                      Submit
                                    </button>
                                  </form>
                                </div>
                                <div className="flex ml-10 justify-center items-center">
                                  <div className="p-8 w-[450px] bg-white rounded-lg shadow-lg">
                                    <h3 className="text-xl font-normal text-gray-800">
                                      We would love to hear from you
                                    </h3>
                                    <h1 className="text-2xl mt-1 font-bold text-gray-700">
                                      Get in Touch
                                    </h1>
                                    <ul className="space-y-8 mt-8">
                                      <li className="flex items-center gap-4">
                                        <div className="bg-[#2641c2] p-3 rounded-full">
                                          <FaPhone
                                            size={24}
                                            className="text-white"
                                          />
                                        </div>
                                        <div>
                                          <p className="font-semibold text-xl text-gray-800">
                                            Our Phone Number
                                          </p>
                                          <p className="text-sm text-[20px] text-gray-600">
                                            9801848492
                                          </p>
                                        </div>
                                      </li>

                                      <li className="flex items-center gap-4">
                                        <div className="bg-[#2641c2] p-3 rounded-full">
                                          <CiMail
                                            size={24}
                                            className="text-white font-bold"
                                          />
                                        </div>
                                        <div>
                                          <p className="font-semibold text-xl text-gray-800">
                                            Our Email
                                          </p>
                                          <p className="text-sm text-gray-600 text-[20px]">
                                            sales@softbenz.com
                                          </p>
                                        </div>
                                      </li>

                                      <li className="flex items-center gap-4">
                                        <div className="bg-[#2641c2] p-3 rounded-full">
                                          <MdLocationOn
                                            size={24}
                                            className="text-white"
                                          />
                                        </div>
                                        <div>
                                          <p className="font-semibold text-gray-800 text-xl">
                                            Office Address
                                          </p>
                                          <p className="text-sm text-gray-600 text-[20px]">
                                            Shankhamul-31, Kathmandu
                                          </p>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
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

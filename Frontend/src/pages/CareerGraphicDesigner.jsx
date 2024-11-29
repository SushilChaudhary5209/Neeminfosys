// import React from 'react'

// function CareerGraphicDesigner() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default CareerGraphicDesigner














import React from "react";
import InternshipRegistrationForm from "../components/InternshipRegistrationForm";
import Button from "../components/Button";
import Captcha from "../components/Captcha";
import phone_icon from "../../public/images/phone_icon.png";

const sections = [
  {
    title: "Job description",
    content: (
      <>
        <p className="text-gray-500">
          Neem Infosys is a Leading IT Company in Mahendranagar Nepal. We
          develop user-centric website, mobile apps and Digital Marketing that
          grows startup, business, products, corporate. Neem Infosys is a
          full-service company specializing in Digital Marketing & Web
          Development. We have helped over 1000 clients with our result-oriented
          tactics, and we have helped over 100 clients with web development
          thanks to our expertise in cutting-edge technologies. We’re on a
          mission to connect many talented people as possible to create
          meaningful work where together we can Learn, Earn and Serve our way to
          becoming leaders worth following.
        </p>
      </>
    ),
  },
  {
    title: "About the role",
    content: (
      <>
        <p className="text-gray-500">
          Are you a creative individual with a flair for visual storytelling?
          We’re on the hunt for a Graphic Designer to join our dynamic team. If
          you love turning ideas into captivating designs, we want to hear from
          you. In this role, you will be responsible to design and produce a
          range of digital and print graphics. You will also get to work closely
          with clients, the marketing and events team, and fellow designers to
          create stunning promotional collaterals. We are forever expanding our
          design team to have more awesome people who can help us further
          elevate our mission. Currently, we are looking for a graphic designer
          to join our team.
        </p>
        <ul className="list-disc ps-12 text-gray-500 flex flex-col gap-2">
          {[
            "Design and produce a range of digital, and print graphics. Including information graphics, print, and digital newsletters, social media graphics, marketing collaterals, presentation slides, and promotional materials.",
            "Operate design tools like Figma, Canva and Adobe CC Products (Photoshop, Illustrator, AfterEffects, Premiere, InDesign).",
            "Prepare rough drafts and present ideas to internal and external stakeholders.",
            "Create motion graphics and edit/create video clips for events, corporate videos, presentations, and product demos.",
            "Concept, develop and execute original social media content and campaigns in collaboration with the digital marketing team.",
            "Work closely with the in-house events, marketing, and design team and support with graphic design and video needs.",
            "Implement Neem’s brand guideline and contribute to improving it.",
          ].map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "Job Requirements",
    content: (
      <ul className="list-disc ps-12 text-gray-500 flex flex-col gap-2">
        {[
          "Bachelor’s in any stream is preferred with at least 1 year of professional experience.",
          "Excellent verbal and written communication skills – both English and Nepali.",
          "Knowledge and experience of software operation and ability to stay on top of things and learn new tools.",
          "Proficiency with Adobe Creative Suite (Photoshop, Illustrator). Knowledge of collaborative design tools like Figma would be a plus.",
          "Leadership Skills – highly proactive, self-motivated, self-organized, decision-maker, committed and an excellent team player.",
          "Technical knowledge and someone with experience in related marketing or advertising fields will be a great plus point.",
          "Solid organizational skills including attention to detail and multitasking skills.",
          "Skills: Graphic Design, Color Theory, Typography, Layouts, Grid, Spacing, Alignment illustration, and sensibility.",
          "Ability to work both independently and collaboratively.",
          "Ability to multi-task and work in a fast-paced environment while producing high-quality work.",
          "Familiarity with the best practices of social media marketing and platform guidelines would be a great add-on.",
        ].map((text, index) => (
            <li key={index}>{text}</li>
          ))}
      </ul>
    ),
  },
];

function CareerGraphicDesigner() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-white py-12 w-full flex flex-col items-center gap-2 bg-gradient-to-r from-custom-blue-start to-custom-blue-end">
        <p className="text-3xl font-medium">Graphic Designer</p>
        <div className="flex items-center gap-4">
          <a href="/">Home </a>
          <p className="text-xl">|</p>
          <a href="/career"> Careers</a>
        </div>
      </div>
      <div className="w-[80%] my-12 flex">
        <div>
          <div className="w-[90%] flex flex-col gap-6">
            <p className="w-full text-2xl font-semibold">Graphic Designer</p>
            {sections.map((section, index) => (
              <div key={index} className="w-full flex flex-col gap-2">
                <p className="text-xl font-semibold text-blue-500">
                  {section.title}
                </p>
                {section.content}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <div className="w-full mt-12 flex justify-center">
              <a href="">
                <button className="text-white bg-[#3779d7] p-4 rounded-sm mt-4">
                  View All Current Openings
                </button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full rounded-lg py-16 shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)]">
            <div className="w-full flex flex-col">
              <p className="ps-4 text-2xl font-semibold ">Apply for Job</p>
              <InternshipRegistrationForm />

              <div className="ps-4 flex gap-4">
                <Captcha />
                <Button text="Submit" />
              </div>
            </div>
            <div className="w-full px-4 py-8 flex flex-col gap-8">
              <p className="text-2xl font-semibold">Apply for Job</p>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <div>
                    <p className="w-8 h-8 text-white rounded-full bg-[#2641c2] flex items-center justify-center">
                      1
                    </p>
                  </div>
                  <p>
                    Our People Ops team will review your application and if you
                    meet the criteria, they will call you for an interview.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div>
                    <p className="w-8 h-8 text-white rounded-full bg-[#2641c2] flex items-center justify-center">
                      2
                    </p>
                  </div>
                  <p>
                    If you do not get a call within 30 days of submitting your
                    application, please understand that we couldn’t select you
                    this time, but your CV will be in our roster so that when
                    the right vacancy is open, we can contact you.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8">
                  <img src={phone_icon} alt="" />
                </div>
                <p className="font-semibold text-2xl">+977 9810631146</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerGraphicDesigner;

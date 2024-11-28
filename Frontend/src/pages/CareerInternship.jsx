// import React from "react";

// function ViewJob() {
//   return (
//     <div className="w-full flex flex-col items-center">
//       <div className="text-white py-12 w-full flex flex-col items-center gap-2 bg-gradient-to-r from-custom-blue-start to-custom-blue-end">
//         <p className="text-3xl font-medium">Internships</p>
//         <div className="flex items-center gap-4">
//           <a href="/">Home </a>
//           <p className="text-xl">|</p>
//           <a href="/careers"> Carrers</a>
//         </div>
//       </div>
//       <div className="w-[80%]">
//         <div className="w-[55%] flex flex-col gap-6">
//           <p className="text-2xl font-semibold">Graphic Designer</p>
//           <div className="flex flex-col gap-2">
//             <p className="text-xl font-semibold text-blue-500">
//               Job description
//             </p>
//             <p>
//               Neem Infosys is a Leading IT Company in Mahendranagar Nepal. We
//               develop user-centric website, mobile apps and Digital Marketing
//               that grows startup, business, products, corporate. Neem Infosys is
//               a full-service company specializing in Digital Marketing & Web
//               Development. We have helped over 1000 clients with our
//               result-oriented tactics, and we have helped over 100 clients with
//               web development thanks to our expertise in cutting-edge
//               technologies. We’re on a mission to connect many talented people
//               as possible to create meaningful work where together we can Learn,
//               Earn and Serve our way to becoming leaders worth following.
//             </p>
//           </div>
//           <div className="flex flex-col gap-2">
//             <p className="text-xl font-semibold text-blue-500">
//               About the role
//             </p>
//             <p>
//               Are you a creative individual with a flair for visual
//               storytelling? We’re on the hunt for a Graphic Designer to join our
//               dynamic team. If you love turning ideas into captivating designs,
//               we want to hear from you. In this role, you will be responsible to
//               design and produce a range of digital and print graphics. You will
//               also get to work closely with clients, the marketing and events
//               team, and fellow designers to create stunning promotional
//               collaterals. We are forever expanding our design team to have more
//               awesome people who can help us further elevate our mission.
//               Currently, we are looking for a graphic designer to join our team.
//             </p>
//             <ul className="list-disc ps-12">
//               <li>
//                 Mindset: Interns should have a positive attitude and be willing
//                 to learn. They should be open to new ideas and challenges, and
//                 they should be able to think critically and solve problems.
//               </li>
//               <li>
//                 Curiosity: Interns should be inquisitive and eager to learn new
//                 things. They should be able to ask questions and seek out
//                 information on their own.
//               </li>
//               <li>
//                 Dedication: Interns should be committed to their work and be
//                 willing to put in the extra effort. They should be reliable and
//                 dependable, and they should be able to meet deadlines.
//               </li>
//               <li>
//                 Have basic knowledge: Interns should have a basic understanding
//                 of the field or industry in which they are interning. This
//                 knowledge can be gained through coursework, extracurricular
//                 activities, or personal experience.
//               </li>
//             </ul>
//           </div>
//           <div className="flex flex-col gap-2">
//             <p className="text-xl font-semibold text-blue-500">
//             Requirements
//             </p>
//             <ul className="list-outside flex flex-col gap-2">
//                 <li className="ps-16 flex items-center gap-2">
//                     <div className="w-2 h-2 border border-gray-500 rounded-full bg-white flex-shrink-0"></div>
//                     <span>Bachelor’s degree/Running or a related field and experiences.</span>
//                 </li>
//                 <li className="ps-16 flex items-center gap-2">
//                     <div className="w-2 h-2 border border-gray-500 rounded-full bg-white flex-shrink-0"></div>
//                     <span>Preferred education: Bsc.CSIT, BIT, BCA, BCE, Bed. CSIT, BBA, BBS or similar.</span>
//                 </li>
//                 <li className="ps-16 flex items-center gap-2">
//                     <div className="w-2 h-2 border border-gray-500 rounded-full bg-white flex-shrink-0"></div>
//                     <span>Knowledge on related field tools</span>
//                 </li>
//                 <li className="ps-16 flex items-center gap-2">
//                     <div className="w-2 h-2 border border-gray-500 rounded-full bg-white flex-shrink-0"></div>
//                     <span>Candidates must be able to work 10am-6pm/ min 6hrs per day, Sunday-Friday for twelve weeks</span>
//                 </li>
//                 <li className="ps-16 flex items-center gap-2">
//                     <div className="w-2 h-2 border border-gray-500 rounded-full bg-white flex-shrink-0"></div>
//                     <span>Candidates should not be working professionally elsewhere.</span>
//                 </li>
//                 <li className="ps-16 flex items-center gap-2">
//                     <div className="w-2 h-2 border border-gray-500 rounded-full bg-white flex-shrink-0"></div>
//                     <span>Candidates are encouraged to attach their work along with their resumes.</span>
//                 </li>
//             </ul>
//           </div>
//         </div>

//         <div></div>
//       </div>
//     </div>
//   );
// }

// export default ViewJob;

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
            "Mindset: Interns should have a positive attitude and be willing to learn. They should be open to new ideas and challenges, and they should be able to think critically and solve problems.",
            "Curiosity: Interns should be inquisitive and eager to learn new things. They should be able to ask questions and seek out information on their own.",
            "Dedication: Interns should be committed to their work and be willing to put in the extra effort. They should be reliable and dependable, and they should be able to meet deadlines.",
            "Have basic knowledge: Interns should have a basic understanding of the field or industry in which they are interning. This knowledge can be gained through coursework, extracurricular activities, or personal experience.",
          ].map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "Requirements",
    content: (
      <ul className="list-outside text-gray-500 flex flex-col gap-2">
        {[
          "Bachelor’s degree/Running or a related field and experiences.",
          "Preferred education: Bsc.CSIT, BIT, BCA, BCE, Bed. CSIT, BBA, BBS or similar.",
          "Knowledge on related field tools",
          "Candidates must be able to work 10am-6pm/ min 6hrs per day, Sunday-Friday for twelve weeks",
          "Candidates should not be working professionally elsewhere.",
          "Candidates are encouraged to attach their work along with their resumes.",
        ].map((text, index) => (
          <li key={index} className="ps-16 flex items-center gap-2">
            <div className="w-2 h-2 border border-gray-500 rounded-full bg-white flex-shrink-0"></div>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    ),
  },
];

function ViewJob() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-white py-12 w-full flex flex-col items-center gap-2 bg-gradient-to-r from-custom-blue-start to-custom-blue-end">
        <p className="text-3xl font-medium">Internships</p>
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
            <p className="font-semibold">Note</p>
            <ul className="list-disc pt-4 ps-12 flex flex-col gap-2">
              <li>
                No previous experience is required. Beginners are highly
                encouraged to apply for the position.
              </li>
              <li>
                Candidates must be willing to work with Neem Infosys after the
                completion of the internship.
              </li>
              <li>
                Please make sure your classes and exam time do not clash with
                the Internship duration.
              </li>
            </ul>
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

export default ViewJob;

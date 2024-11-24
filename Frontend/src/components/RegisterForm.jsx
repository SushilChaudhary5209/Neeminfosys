





import React, { useState } from 'react';

const RegisterForm = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      console.log('Selected file:', selectedFile);
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2.5 p-5">
        <div className="flex w-full gap-1.5">
          <label className="relative w-full">
            <input
              required
              placeholder="First Name *"
              type="text"
              className="w-full p-2.5 outline-none border bg-[#eeeeee] border-gray-400 rounded-md"
            />
          </label>
          <label className="relative w-full">
            <input
              required
              placeholder="Last Name *"
              type="text"
              className="w-full p-2.5 outline-none border bg-[#eeeeee] border-gray-400 rounded-lg"
            />
          </label>
        </div>
        <div className='flex w-full gap-1.5'>
          <label className="relative w-full">
            <input
              required
              placeholder="Email *"
              type="email"
              className="w-full p-2.5 outline-none border bg-[#eeeeee] border-gray-400 rounded-lg"
            />
          </label>
          <label className='relative w-full'>
            <input
              required
              placeholder="Phone *"
              type="number"
              className="w-full p-2.5 outline-none border bg-[#eeeeee] border-gray-400 rounded-lg"
            />
          </label>
        </div>

        <div className='flex w-full gap-1.5'>
          <label className="relative w-full">
            <select
              required
              className="w-full p-2.5 outline-none border bg-[#eeeeee] border-gray-400 rounded-lg">
              <option value="" disabled selected hidden>Application Form *</option>
              <option value="application1">Graphic Designer</option>
              <option value="application2">Sales & Marketing</option>
              <option value="application3">Web Developer</option>
              <option value="application4">Accountant</option>
            </select>
          </label>
          <label className='relative w-full'>
            <select
              required
              className="w-full p-2.5 outline-none border bg-[#eeeeee] border-gray-400 rounded-lg">
              <option value="" disabled selected hidden>Experience *</option>
              <option value="0-1">0-1 year</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5+">5+ years</option>
            </select>
          </label>
        </div>

        <label className="w-full p-2.5 outline-none border bg-[#eeeeee] border-gray-400 rounded-lg">
          <input type="file" onChange={handleFileChange} />
        </label>
      </form>
      {selectedFile && <p>File selected: {selectedFile.name}</p>}
    </div>
  );
};

export default RegisterForm;

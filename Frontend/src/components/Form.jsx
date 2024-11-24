// import React from 'react'
// import flag_nepal from '../../public/images/flag-nepal.png';
// import Captcha from '../components/Captcha';
// import Button from '../components/Button';


// function Form() {
//     return (
//         <div>
//             <p className=" font-semibold text-3xl my-2">Let’s Get to know you</p>
//             <form className="flex flex-col gap-4 mb-4">
//                 <input
//                     type="name"
//                     className="rounded-full border border-gray-300 outline-none p-4"
//                     placeholder="Full Name"
//                 />
//                 <input
//                     type="email"
//                     className="rounded-full border border-gray-300 outline-none p-4"
//                     placeholder="Email"
//                 />
//                 <div className='px-4 flex items-center border border-gray-300 rounded-full'>
//                     <div className='flex items-center'>
//                         <img src={flag_nepal} alt="" className='w-6' />
//                         <p>+977</p>
//                     </div>
//                     <input
//                         type=""
//                         className="rounded-full border-none outline-none p-3"
//                         placeholder="Mobile Number"
//                     />
//                 </div>
//                 <div >
//                     <textarea name="" cols={58} rows={3} placeholder='Tell Us About Your Project' id="" className='p-4 border border-gray-300 rounded-lg'></textarea>
//                 </div>
//                 <div className='flex gap-24'>
//                     <Captcha />
//                     <Button text="submit" />
//                 </div>

//             </form>
//         </div>
//     )
// }

// export default Form











import React, { useState } from 'react';
import flag_nepal from '../../public/images/flag-nepal.png';
import Captcha from '../components/Captcha';
import Button from '../components/Button';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        project: '',
        captchaChecked: false,
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCaptchaChange = (isChecked) => {
        setFormData({ ...formData, captchaChecked: isChecked });
        if (isChecked) {
            setErrors((prevErrors) => {
                const { captcha, ...rest } = prevErrors;
                return rest;
            });
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, captcha: 'Captcha is required' }));
        }
    };

    const validate = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Full Name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.captchaChecked) errors.captcha = 'Captcha is required';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted', formData);
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                mobile: '',
                project: '',
                captchaChecked: false,
            });
            setErrors({});
        } else {
            setErrors(validationErrors);
            setIsSubmitted(false);
        }
    };

    return (
        <div>
            <p className="font-semibold text-3xl my-2">Let’s Get to Know You</p>
            {isSubmitted && <p className="text-green-500">Form submitted successfully!</p>}
            <form className="flex flex-col gap-4 mb-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    className="rounded-full border border-gray-300 outline-none p-4"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
                <input
                    type="email"
                    name="email"
                    className="rounded-full border border-gray-300 outline-none p-4"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
                <div className='px-4 flex items-center border border-gray-300 rounded-full'>
                    <div className='flex items-center'>
                        <img src={flag_nepal} alt="" className='w-6' />
                        <p>+977</p>
                    </div>
                    <input
                        type="text"
                        name="mobile"
                        className="rounded-full border-none outline-none p-3"
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <textarea
                        name="project"
                        cols={58}
                        rows={3}
                        placeholder='Tell Us About Your Project'
                        className='p-4 border border-gray-300 rounded-lg'
                        value={formData.project}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className='flex gap-24 items-center'>
                    <Captcha onChange={handleCaptchaChange} />
                    {errors.captcha && <p className="text-red-500">{errors.captcha}</p>}
                    <Button text="Submit" />
                </div>
            </form>
        </div>
    );
}

export default Form;

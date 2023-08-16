'use client';

import { useState } from "react";
import axios from "axios";
import Input from "../components/Input/Input";

const EmailOrPhoneInput = ({ setStep, setEmail }) => {
    const [emailOrPhone, setEmailOrPhone] = useState('');

    const handleChange = (e) => {
        setEmailOrPhone(e.target.value);
    }

    const sendVerificationEmail = () => {
        axios.post(`http://localhost:8080/users/sendOtpByEmail/${emailOrPhone}`).then(() => {
            setStep(2);
            setEmail(emailOrPhone);
        })
    };

    return (
        <div className="flex items-center justify-center mt-10 lg:mt-32 rounded-t-lg flex-col">
            <div className="mb-6 font-medium text-sm">Enter Email or Phone Number</div>
            <Input value={emailOrPhone} handleChange={handleChange} placeholder="Email / Phone" width="300px" required />
            <button className="w-[300px] h-[50px] bg-slate-800 hover:bg-slate-700 text-white rounded-md text-center mt-4 flex justify-center items-center" onClick={sendVerificationEmail}>Continue</button>
        </div>
    )
};

export default EmailOrPhoneInput;
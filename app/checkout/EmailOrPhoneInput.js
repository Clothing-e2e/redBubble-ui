'use client';

import { useState } from "react";
import axios from "axios";
import Input from "../components/Input/Input";
import Image from "next/image";
import Loader from '../icons/loader.png';

const EmailOrPhoneInput = ({ setStep, setEmail }) => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setEmailOrPhone(e.target.value);
    }

    const sendVerificationEmail = () => {
        setIsLoading(true);
        axios.post(`http://localhost:8080/users/sendOtpByEmail/${emailOrPhone}`).then(() => {
            setIsLoading(false);
            setStep(2);
            setEmail(emailOrPhone);
        })
    };

    const isDisabled = () => {
        return emailOrPhone.length === 0 || isLoading;
    }

    return (
        <div className="flex items-center justify-center mt-10 lg:mt-32 rounded-t-lg flex-col">
            <div className="mb-6 font-medium text-sm">Enter Email or Phone Number</div>
            <Input value={emailOrPhone} handleChange={handleChange} placeholder="Email / Phone" width="300px" required />
            <button className={`w-[300px] h-[50px] ${isDisabled() ? 'bg-slate-600 cursor-not-allowed' : 'bg-slate-900 hover:bg-slate-800'} text-white rounded-md text-center mt-4 flex justify-center items-center`} onClick={sendVerificationEmail}>
                {isLoading ? <Image src={Loader} width={30} height={30} alt="Loader" className="animate-spin" /> :  'Continue'}
            </button>
        </div>
    )
};

export default EmailOrPhoneInput;
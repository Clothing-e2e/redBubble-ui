'use client';

import axios from "axios";
import { useState } from "react";
import Input from "../components/Input/Input";

const Otp = ({ setStep, email }) => {
    const [otp, setOtp] = useState('');

    const handleChange = (e) => {
        setOtp(e.target.value);
    }

    const verifyOtp = () => {
        axios.post(`http://localhost:8080/users/${email}/verify/${otp}`).then(() => {
            setStep(3);
        })
    };

    const isDisabled = () => {
        return otp.length < 5;
    }

    return (
        <div className="flex items-center justify-center mt-10 lg:mt-32 rounded-t-lg flex-col">
            <div className="mb-6 font-medium text-sm">Verify One Time Password</div>
            <Input value={otp} handleChange={handleChange} placeholder="OTP" width="300px" required />
            <button className={`w-[300px] h-[50px] ${isDisabled() ? 'bg-slate-600' : 'bg-slate-900 hover:bg-slate-800'} text-white rounded-md text-center mt-4 flex justify-center items-center`} onClick={verifyOtp} disabled={isDisabled()}>Continue</button>
        </div>
    )
};

export default Otp;
'use client';

import axios from "axios";
import { useState } from "react";

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

    return (
        <div className="flex items-center justify-center mt-10 lg:mt-32 rounded-t-lg flex-col">
            <div className="mb-10 font-medium text-sm">Verify One Time Password</div>
            <input type="text" className="w-[300px] h-[50px] border-2 border-slate-800 pl-4 rounded-lg focus:outline-0" placeholder="OTP" value={otp} onChange={handleChange}/>
            <button className="w-[300px] h-[50px] bg-slate-800 hover:bg-slate-700 text-white rounded-md text-center mt-4 flex justify-center items-center" onClick={verifyOtp}>Verify</button>
        </div>
    )
};

export default Otp;
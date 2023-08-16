'use client';

import axios from "axios";
import { useState } from "react";
import Input from "../components/Input/Input";
import Image from "next/image";
import Loader from '../icons/loader.png';

const Otp = ({ setStep, email }) => {
    const [otp, setOtp] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setOtp(e.target.value);
    }

    const verifyOtp = () => {
        setIsLoading(true);
        axios.post(`http://localhost:8080/users/${email}/verify/${otp}`).then(() => {
            setIsLoading(false);
            setStep(3);
        })
    };

    const isDisabled = () => {
        return otp.length < 5 || isLoading;
    }

    return (
        <div className="flex items-center justify-center mt-10 lg:mt-32 rounded-t-lg flex-col">
            <div className="mb-6 font-medium text-sm">Verify One Time Password</div>
            <Input value={otp} handleChange={handleChange} placeholder="OTP" width="300px" required />
            <button className={`w-[300px] h-[50px] ${isDisabled() ? 'bg-slate-600 cursor-not-allowed' : 'bg-slate-900 hover:bg-slate-800'} text-white rounded-md text-center mt-4 flex justify-center items-center`} onClick={verifyOtp} disabled={isDisabled()}>
                {isLoading ? <Image src={Loader} width={30} height={30} alt="Loader" className="animate-spin" /> :  'Continue'}
            </button>
        </div>
    )
};

export default Otp;
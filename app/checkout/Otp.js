'use client';

import axios from 'axios';
import { useState } from 'react';
import Input from '../components/Input/Input';
import utils from '../utils/utils';
import Button from '../components/Button/Button';

const { ensureObject } = utils;

/**
 * @description OTP verification component
 * @param {function} setStep - Sets next step based on verification response
 * @param {email} email - Email added in previous step
 */
const Otp = ({ setStep, email, setUserData }) => {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const verifyOtp = () => {
    setError(false);
    setIsLoading(true);
    axios
      .post(`http://localhost:8080/users/${email}/verify/${otp}`)
      .then((res) => {
        const { verified } = ensureObject(res.data);
        if (verified === false) {
          setError(true);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setUserData(res.data);
          setStep(3);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const isDisabled = () => {
    return otp.length < 5 || isLoading;
  };

  return (
    <div className="flex items-center justify-center mt-10 lg:mt-24 rounded-t-lg flex-col">
      <div className="mb-6 font-medium text-sm">Verify One Time Password</div>
      <Input
        value={otp}
        handleChange={handleChange}
        placeholder="OTP"
        width="300px"
        required
      />
      {error && (
        <div className="text-left w-[300px]">
          <span className="text-red-500 text-xs py-1">
            Incorrect OTP. Please try again.
          </span>
        </div>
      )}
      <Button
        text="Continue"
        isLoading={isLoading}
        disabled={isDisabled()}
        onClick={verifyOtp}
      />
    </div>
  );
};

export default Otp;

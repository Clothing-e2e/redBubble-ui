'use client';

import { useState } from 'react';
import axios from '../axios/api';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

const EmailOrPhoneInput = ({ setStep, setPhone }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const sendVerificationEmail = () => {
    setIsLoading(true);
    axios.post(`/users/sendOtpByPhone/${phoneNumber}`).then(() => {
      setIsLoading(false);
      setStep(2);
      setPhone(phoneNumber);
    });
  };

  const isDisabled = () => {
    return phoneNumber.length === 0 || isLoading;
  };

  return (
    <div className="flex items-center justify-center mt-10 lg:mt-24 rounded-t-lg flex-col">
      <div className="mb-6 font-medium text-sm">Enter Phone Number</div>
      <Input
        value={phoneNumber}
        handleChange={handleChange}
        placeholder="Phone"
        width="300px"
        required
      />
      <Button
        text="Continue"
        onClick={sendVerificationEmail}
        isLoading={isLoading}
        isDisabled={isDisabled()}
      />
    </div>
  );
};

export default EmailOrPhoneInput;

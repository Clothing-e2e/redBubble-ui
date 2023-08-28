'use client';

import { useState } from 'react';
import axios from 'axios';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

const EmailOrPhoneInput = ({ setStep, setEmail }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setEmailOrPhone(e.target.value);
  };

  const sendVerificationEmail = () => {
    setIsLoading(true);
    axios
      .post(`http://62.72.30.200:8080/users/sendOtpByEmail/${emailOrPhone}`)
      .then(() => {
        setIsLoading(false);
        setStep(2);
        setEmail(emailOrPhone);
      });
  };

  const isDisabled = () => {
    return emailOrPhone.length === 0 || isLoading;
  };

  return (
    <div className="flex items-center justify-center mt-10 lg:mt-24 rounded-t-lg flex-col">
      <div className="mb-6 font-medium text-sm">
        Enter Email or Phone Number
      </div>
      <Input
        value={emailOrPhone}
        handleChange={handleChange}
        placeholder="Email / Phone"
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

'use client';

import { useState } from 'react';
import useStore from '../store/store';
import Image from 'next/image';
import Accordian from '../components/Accordian/Accordian';
import Tick from '../icons/tick.png';
import EmailOrPhoneInput from './EmailOrPhoneInput';
import Otp from './Otp';
import Address from './Address';
import PaymentModes from './PaymentModes';
import utils from '../utils/utils';
import Button from '../components/Button/Button';
import { useRouter } from 'next/navigation';

const { isArrayEmpty } = utils;

export default function Checkout() {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState(null);

  const cartItems = useStore((state) => state.cart);

  const totalAmount = cartItems
    .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    .toFixed(2);

  if (isArrayEmpty(cartItems))
    return (
      <div className="flex items-center justify-center h-[calc(100vh-92px)] flex-col px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-5xl mb-4">Cart is Empty!</h1>
          <h1 className="text-sm md:text-md mb-6">
            Please add items to the cart to proceed to checkout.
          </h1>
        </div>
        <Button
          text="Browse all products"
          onClick={() => router.push('/all')}
        />
      </div>
    );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-order px-4 lg:px-20 py-8 mb-24">
      <div className="order-last lg:order-first lg:col-start-1 col-end-2 mt-14 lg:mt-4">
        <div className="flex items-center justify-center h-[69px]">
          <div className="flex flex-col items-center">
            <div className="rounded-full border border-slate-800 w-[30px] h-[30px] flex items-center justify-center mr-2">
              {step > 2 ? (
                <Image
                  src={Tick}
                  width={30}
                  height={30}
                  alt="Verified tick"
                  className="cursor-pointer"
                  onClick={() => setStep(1)}
                />
              ) : (
                1
              )}
            </div>
            <p className="text-sm text-slate-800 mt-2">Verify</p>
          </div>
          <hr className="w-[80px] sm:w-[160px] bg-slate-700 h-[2px]" />
          <div className="flex flex-col items-center">
            <div className="rounded-full border border-slate-800 w-[30px] h-[30px] flex items-center justify-center mr-2">
              {step > 3 ? (
                <Image
                  src={Tick}
                  width={30}
                  height={30}
                  alt="Verified tick"
                  className="cursor-pointer"
                  onClick={() => setStep(3)}
                />
              ) : (
                2
              )}
            </div>
            <p className="text-sm text-slate-800 mt-2">Address</p>
          </div>
          <hr className="w-[80px] sm:w-[160px] bg-slate-700 h-[2px]" />
          <div className="flex flex-col items-center">
            <div className="rounded-full border border-slate-800 w-[30px] h-[30px] flex items-center justify-center mr-2">
              {step > 4 ? (
                <Image
                  src={Tick}
                  width={30}
                  height={30}
                  alt="Verified tick"
                  className="cursor-pointer"
                  onClick={() => setStep(4)}
                />
              ) : (
                3
              )}
            </div>
            <p className="text-sm text-slate-800 mt-2">Payment</p>
          </div>
        </div>
        {
          {
            1: <EmailOrPhoneInput setPhone={setPhone} setStep={setStep} />,
            2: (
              <Otp phone={phone} setStep={setStep} setUserData={setUserData} />
            ),
            3: <Address userData={userData} setStep={setStep} />,
            4: <PaymentModes />,
          }[step]
        }
      </div>
      <div className="order-first lg:order-last lg:col-start-2 overflow-y-scroll">
        <Accordian title="Cart Summary" size="large" isOpen>
          <div className="py-2">
            {cartItems.map((item, index) => (
              <div className="flex gap-2 py-4 hover:bg-slate-50" key={index}>
                <div>
                  <Image
                    src={`http://localhost:8080/api/images/${item.imagesId[0]}`}
                    width={60}
                    height={100}
                    alt="Product Image ̰ß"
                  />
                </div>
                <div className="flex flex-col gap-2 ml-4 grow justify-center">
                  <div className="text-sm">{`${item.heading} - ${item.size}`}</div>
                  <div className="text-xs pt-2 pb-0">
                    <span className="font-medium">Color:</span>
                    {` ${item.color}`}
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <div>
                      <span className="font-medium">Quantity:</span>
                      {` ${item.quantity}`}
                    </div>
                    <div className="font-semibold">{`Rs. ${item.price}`}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-sm flex justify-between pt-6">
            <h1>Subtotal</h1>
            <h1>{`Rs. ${totalAmount}`}</h1>
          </div>
          <div className="text-sm flex justify-between py-2">
            <h1>Shipping charges</h1>
            <h1>Free</h1>
          </div>
          <div className="text-sm flex justify-between my-4 py-3 border-t font-semibold">
            <h1>Total</h1>
            <h1>{`Rs. ${totalAmount}`}</h1>
          </div>
        </Accordian>
      </div>
    </div>
  );
}

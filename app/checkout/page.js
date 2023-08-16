'use client';

import axios from "axios";
import { useState } from "react";
import useStore from "../store/store";
import Image from "next/image";
import Accordian from "../components/Accordian/Accordian";
import Tick from '../icons/tick.png';
import EmailOrPhoneInput from "./EmailOrPhoneInput";
import Otp from './Otp';
import Address from "./Address";
import PaymentModes from "./PaymentModes";

export default function Checkout() {
    const [email, setEmail] = useState('');
    const [step, setStep] = useState(3);

    const cartItems = useStore((state) => state.cart);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-order px-4 lg:px-20 py-8 lg:h-[calc(100vh-200px)]">
            <div className="order-last lg:order-first lg:col-start-1 col-end-2">
                <div className="flex items-center justify-center h-[69px]">
                    <div className="flex flex-col items-center">
                        <div className="rounded-full border border-slate-800 w-[30px] h-[30px] flex items-center justify-center mr-2">
                            {step > 1 ? <Image src={Tick} width={30} height={30} /> : 1}
                        </div>
                        <p className="text-sm text-slate-800">Verify</p>
                    </div>
                    <hr className="w-[80px] sm:w-[160px] bg-slate-700 h-[2px]"/>
                    <div className="flex flex-col items-center">
                        <div className="rounded-full border border-slate-800 w-[30px] h-[30px] flex items-center justify-center mr-2">
                            {step > 3 ? <Image src={Tick} width={30} height={30} /> : 2}
                        </div>
                        <p className="text-sm text-slate-800">Address</p>
                    </div>
                    <hr className="w-[80px] sm:w-[160px] bg-slate-700 h-[2px]"/>
                    <div className="flex flex-col items-center">
                        <div className="rounded-full border border-slate-800 w-[30px] h-[30px] flex items-center justify-center mr-2">
                            {step > 4 ? <Image src={Tick} width={30} height={30} /> : 3}
                        </div>
                        <p className="text-sm text-slate-800">Payment</p>
                    </div>
                </div>
                {{
                    1: <EmailOrPhoneInput setEmail={setEmail} setStep={setStep} />,
                    2: <Otp email={email} setStep={setStep} />,
                    3: <Address email={email} setStep={setStep} />,
                    4: <PaymentModes />
                }[step]}
            </div>
            <div className="order-first lg:order-last lg:col-start-2 overflow-y-scroll">
                <Accordian title="Cart Summary" size="large" isOpen>
                    <div className="p-2 px-4">
                        {cartItems.map((item) => (
                            <div className="flex gap-2 py-4 hover:bg-slate-50">
                                <div><Image src={`http://localhost:8080/images/${item.imagesId[0]}`} width={60} height={100} /></div>
                                <div className="flex flex-col gap-2 ml-4 grow mr-4 justify-center">
                                    <div className="text-sm">{`${item.heading} - ${item.size}`}</div>
                                    <div className="text-xs pt-2 pb-0"><span className="font-medium">Color:</span>{` ${item.color}`}</div>
                                    <div className="flex justify-between items-center text-xs">
                                    <div><span className="font-medium">Quantity:</span>{` ${item.quantity}`}</div>
                                        <div className="font-semibold">{`Rs. ${item.price}`}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-sm flex justify-between pt-6">
                        <h1>Subtotal</h1>
                        <h1>1999</h1>
                    </div>
                    <div className="text-sm flex justify-between py-2">
                        <h1>Shipping charges</h1>
                        <h1>Free</h1>
                    </div>
                    <div className="text-sm flex justify-between my-4 py-3 border-t font-semibold">
                        <h1>Total</h1>
                        <h1>1999</h1>
                    </div>
                 </Accordian>
            </div>
        </div>
    )
}
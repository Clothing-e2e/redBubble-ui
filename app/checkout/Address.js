'use client';

import { useState } from "react";
import Modal from "../components/Modal/Modal";

const Address = ({ setStep, setEmail }) => {
    const [addresses, setAddresses] = useState([
        {
            name: 'Riya Savant',
            email: 'riya.dsav@gmail.com',
            address: 'Bangalore, Karnataka, 560078',
            isSelected: true,
        },
        {
            name: 'Riya Savant',
            email: 'riya.dsav@gmail.com',
            address: 'Bangalore, Karnataka, 560078',
            isSelected: false,
        },
        {
            name: 'Riya Savant',
            email: 'riya.dsav@gmail.com',
            address: 'Bangalore, Karnataka, 560078',
            isSelected: false,
        },
        {
            name: 'Riya Savant',
            email: 'riya.dsav@gmail.com',
            address: 'Bangalore, Karnataka, 560078',
            isSelected: false,
        },
    ]);
    const [showEdit, setShowEdit] = useState(false);

    const handleNext = () => {
        setStep(4);
    }

    const updateAddressSelection = (itemIndex) => {
        setAddresses((prev) => prev.map((item, index) => {
            if(index === itemIndex) {
                return {
                    ...item,
                    isSelected: true,
                }
            }
            return {
                ...item,
                isSelected: false,
            }
        }))
    };

    const handleEdit = (e) => {
        e.stopPropagation();
        setShowEdit(true);
    };

    return (
        <div className="mt-10 flex flex-col items-center">
            <div className="w-[330px] sm:w-[500px]">
                <p>Payment Mode</p>
                <div className="max-h-[340px] overflow-y-scroll">
                    {addresses.map((item, index) => (
                        <div className={`${item.isSelected ? 'border-black border-2' : 'border-slate-300 border'} p-2 rounded-lg mt-4 cursor-pointer`} onClick={() => updateAddressSelection(index)}>
                            <div className="flex justify-between items-center">
                                <p className="font-semibold">{item.name}</p>
                                <button className="text-xs mr-2 underline underline-offset-2" onClick={handleEdit}>Edit</button>
                            </div>
                            <p className="text-sm my-2">{item.address}</p>
                            <p className="text-xs text-slate-600">{item.email}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button className="w-[300px] h-[50px] bg-slate-800 hover:bg-slate-700 text-white rounded-md text-center my-8 flex justify-center items-center" onClick={handleNext}>Continue</button>
            <Modal isOpen={showEdit} onClose={() => setShowEdit(false)} />
        </div>
    )
};

export default Address;
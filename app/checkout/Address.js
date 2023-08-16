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
    const [showModal, setShowModal] = useState({ isOpen: false, isAdd: false });
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
        setShowModal({ isOpen: true, isAdd: false });
    };

    const handleAdd = (e) => {
        e.stopPropagation();
        setShowModal({ isOpen: true, isAdd: true });
    };

    const handleClose = () => {
        setShowModal({ isOpen: false, isAdd: false });
    };

    return (
        <div className="mt-10 flex flex-col items-center">
            <div className="w-[330px] sm:w-[500px]">
                <div className="flex justify-between items-center">
                    <span>Shipping Address</span>
                    <button className="bg-slate-800 hover:bg-slate-700 text-white rounded-full text-center flex justify-center items-center text-xs py-1 px-2" onClick={handleAdd}>Add New</button>
                </div>
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
            <button className="w-[300px] h-[50px] bg-slate-900 hover:bg-slate-800 text-white rounded-md text-center my-8 flex justify-center items-center" onClick={handleNext}>Continue</button>
            <Modal isOpen={showModal.isOpen} onClose={handleClose} isAdd={showModal.isAdd} />
        </div>
    )
};

export default Address;
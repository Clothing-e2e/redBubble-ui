'use client';

import { useState } from 'react';
import Modal from '../components/Modal/Modal';

const addSelectedToAddress = (addresses) => {
  return addresses.map((item, index) => ({
    ...item,
    isSelected: index === 0,
  }));
};

const Address = ({ setStep, userData }) => {
  const [addresses, setAddresses] = useState(
    addSelectedToAddress(userData?.addresses || []),
  );
  const [modalData, setModalData] = useState({});
  const [showModal, setShowModal] = useState({ isOpen: false, isAdd: false });
  const handleNext = () => {
    setStep(4);
  };

  const updateAddressSelection = (itemIndex) => {
    setAddresses((prev) =>
      prev.map((item, index) => {
        if (index === itemIndex) {
          return {
            ...item,
            isSelected: true,
          };
        }
        return {
          ...item,
          isSelected: false,
        };
      }),
    );
  };

  const handleEdit = (e, address) => {
    e.stopPropagation();
    setShowModal({ isOpen: true, isAdd: false });
    setModalData(address);
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    setShowModal({ isOpen: true, isAdd: true });
    setModalData({});
  };

  const handleClose = () => {
    setShowModal({ isOpen: false, isAdd: false });
  };

  const handleUpdateData = () => {};

  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="w-[330px] sm:w-[500px]">
        <div className="flex justify-between items-center">
          <span>Shipping Address</span>
          <button
            className="bg-slate-800 hover:bg-slate-700 text-white rounded-full text-center flex justify-center items-center text-xs py-1 px-2"
            onClick={handleAdd}
          >
            Add New
          </button>
        </div>
        <div className="max-h-[340px] overflow-y-scroll">
          {addresses.map((item, index) => (
            <div
              className={`${
                item.isSelected
                  ? 'border-black border-2'
                  : 'border-slate-300 border'
              } p-2 rounded-lg mt-4 cursor-pointer`}
              onClick={() => updateAddressSelection(index)}
              key={index}
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold">{item.name || 'Test Name'}</p>
                <button
                  className="text-xs mr-2 underline underline-offset-2"
                  onClick={(e) => handleEdit(e, item)}
                >
                  Edit
                </button>
              </div>
              <p className="text-sm my-2">{`${item.houseNumber}, ${item.city}, ${item.state}, ${item.pinCode}`}</p>
              <p className="text-xs text-slate-600">{item.email}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        className="w-[300px] h-[50px] bg-slate-900 hover:bg-slate-800 text-white rounded-md text-center my-8 flex justify-center items-center"
        onClick={handleNext}
      >
        Continue
      </button>
      <Modal
        isOpen={showModal.isOpen}
        onClose={handleClose}
        isAdd={showModal.isAdd}
        modalData={modalData}
        updateData={handleUpdateData}
      />
    </div>
  );
};

export default Address;

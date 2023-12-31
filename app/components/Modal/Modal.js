'use client';

import { useState } from 'react';
import Input from '../Input/Input';

const Modal = ({ isOpen, onClose, isAdd, modalData, updateData, addData }) => {
  console.log('aaa modalData', modalData);
  const [data, setData] = useState(modalData);

  const handleUpdate = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = () => {
    isAdd ? addData(data) : updateData(data);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-70"></div>
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <div className="modal-header flex justify-between items-center pb-3">
                <p className="text-xs text-red-400">
                  Fields marked in * are mandatory
                </p>
                <button
                  onClick={onClose}
                  className="modal-close cursor-pointer z-50"
                >
                  <svg
                    className="fill-current text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 18 18"
                  >
                    <path d="M18 1.5l-1.5-1.5-7.5 7.5-7.5-7.5-1.5 1.5 7.5 7.5-7.5 7.5 1.5 1.5 7.5-7.5 7.5 7.5 1.5-1.5-7.5-7.5z" />
                  </svg>
                </button>
              </div>
              <div className="modal-body">
                <Input
                  name="name"
                  placeholder="Full Name"
                  width="100%"
                  required
                  value={data?.name || ''}
                  handleChange={handleUpdate}
                />
                <Input
                  name="houseNumber"
                  placeholder="Address"
                  width="100%"
                  required
                  value={data?.houseNumber || ''}
                  handleChange={handleUpdate}
                />
                <div className="flex justify-between gap-4">
                  <Input
                    name="city"
                    placeholder="City"
                    width="100%"
                    required
                    value={data?.city || ''}
                    handleChange={handleUpdate}
                  />
                  <Input
                    name="state"
                    placeholder="State"
                    width="100%"
                    required
                    value={data?.state || ''}
                    handleChange={handleUpdate}
                  />
                </div>
                <Input
                  name="pinCode"
                  placeholder="Pincode"
                  width="100%"
                  required
                  value={data?.pinCode || ''}
                  handleChange={handleUpdate}
                />
                <Input
                  name="email"
                  placeholder="Email"
                  width="100%"
                  required
                  value={data?.email || ''}
                  handleChange={handleUpdate}
                />
              </div>
              <div>
                <button
                  className="w-[100%] h-[50px] bg-slate-800 hover:bg-slate-700 text-white rounded-md text-center mt-8 flex justify-center items-center"
                  onClick={onSubmit}
                >
                  {isAdd ? 'Add Address' : 'Edit Address'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

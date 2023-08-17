'use client';

import { useState } from 'react';

const PaymentModes = () => {
  const [modes, setModes] = useState([
    { type: 'Cash on Delivery', isSelected: true },
    { type: 'UPI', isSelected: false },
    { type: 'Card', isSelected: false },
  ]);

  const updateModeSelection = (itemIndex) => {
    setModes((prev) =>
      prev.map((item, index) => {
        if (index === itemIndex) return { ...item, isSelected: true };
        return { ...item, isSelected: false };
      }),
    );
  };

  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="w-[330px] sm:w-[500px]">
        <p>Payment Mode</p>
        <div className="max-h-[340px] overflow-y-scroll">
          {modes.map((item, index) => (
            <div
              className={`${
                item.isSelected
                  ? 'border-black border-2'
                  : 'border-slate-300 border'
              } p-2 rounded-lg mt-4 cursor-pointer`}
              onClick={() => updateModeSelection(index)}
              key={index}
            >
              <p className="text-md my-2">{item.type}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        className="w-[300px] h-[50px] bg-slate-900 hover:bg-slate-800 text-white rounded-md text-center mt-8 flex justify-center items-center"
        onClick={() => null}
      >
        Confirm
      </button>
    </div>
  );
};

export default PaymentModes;

'use client';

import { useState, useRef, useEffect } from "react";

function useOutsideAlerter(ref, cbOnOutsideClick) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            cbOnOutsideClick(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

export default function DropDown() {
    const [isDropDownVisible, setVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('New Arrivals');
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setVisible);

    const selectNewOption = (value) => {
        setSelectedOption(value);
        setVisible(false);
    };

    return (
        <div className="relative" ref={wrapperRef}>
            <button className="absolute left-0 top-0 border border-[#a39f9f] px-0 py-1.5 text-sm z-10 bg-white w-[200px] rounded-3xl" onClick={() => setVisible((value) => !value)}>
                SORT : {<span className="text-xs">{selectedOption}</span>}
            </button>
            {
                isDropDownVisible && (
                    <div className="w-[200px] bg-white absolute left-0 top-7 rounded-2xl z-0 border text-xs">
                        <div className="p-4 pt-6 cursor-pointer hover:bg-slate-50" onClick={() => selectNewOption('New Arrivals')}>New Arrivals</div>
                        <div className="p-4 cursor-pointer hover:bg-slate-50" onClick={() => selectNewOption('Price (Low to High)')}>Price (Low to High)</div>
                        <div className="p-4 pb-6 cursor-pointer hover:bg-slate-50" onClick={() => selectNewOption('Price (High to Low)')}>Price (High to Low)</div>
                    </div>
                )
            }
        </div>
    )
}
'use client';

import Link from "next/link";

export default function Sizes({ data, selection = '', onChange }) {
    return (
        <>
            { data?.sizeSet?.map((item, index) => {
                const { quantity } = item;
                const isCurrentSelection = selection === item.name;
                return (
                    <div
                        className={`rounded-full w-[23px] h-[23px] sm:w-[38px] sm:h-[38px] text-xs sm:text-sm flex justify-center items-center border border-slate-600 ${quantity !== 0 ? 'cursor-pointer hover:bg-slate-50' : 'cursor-not-allowed'} ${isCurrentSelection ? 'bg-slate-600 text-white hover:bg-slate-500' : ''}`}
                        key={index}
                        onClick={() => onChange(item.name)}
                    >
                        {item.name}
                    </div>
                )
            })}
        </>
    )
}
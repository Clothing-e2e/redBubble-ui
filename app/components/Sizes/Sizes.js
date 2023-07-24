'use client';
import Link from "next/link";
import { useContext } from "react";
import { GlobalContext } from "@/app/Context";

export default function Sizes({ data }) {
    const { setData, data: contextData } = useContext(GlobalContext);
    const { selectedSize = '' } = contextData;

    return (
        <>
            { data.sizeSet.map((item, index) => {
                const { quantity } = item;
                const isSelected = selectedSize === item.name;
                return (
                    <Link href='/product' onClick={() => setData({ selectedData: data, selectedSize: item.name })}>
                        <div 
                            className={`rounded-full w-[22px] h-[22px] sm:w-[38px] sm:h-[38px] text-x sm:text-sm flex justify-center items-center border border-slate-600 ${quantity !== 0 ? 'cursor-pointer hover:bg-slate-50' : 'cursor-not-allowed'} ${isSelected ? 'bg-slate-600 text-white border-0' : ''}`}
                            key={index}
                        >
                            {item.name}
                        </div>
                    </Link>
                )
            })}
        </>
    )
}
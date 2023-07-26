'use client';

import Link from "next/link";

export default function Sizes({ data }) {
    return (
        <>
            { data?.sizeSet?.map((item, index) => {
                const { quantity } = item;
                return (
                    <Link href={`/${data.id}`}>
                        <div 
                            className={`rounded-full w-[23px] h-[23px] sm:w-[38px] sm:h-[38px] text-xs sm:text-sm flex justify-center items-center border border-slate-600 ${quantity !== 0 ? 'cursor-pointer hover:bg-slate-50' : 'cursor-not-allowed'}`}
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
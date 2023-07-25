'use client';

import Image from "next/image";
import { useState } from "react";

export default function Carousel({ images }) {
    const [imgIndex, setImgIndex] = useState(0);

    return (
        <div className="flex flex-col gap-4 max-w-[400px]">
            <div>
                <Image src={`http://localhost:8080/images/${images[imgIndex]}`} width={400} height={400} className="mt-5" />
            </div>
            <div className="flex gap-3 overflow-x-scroll mt-1 no-scrollbar">
                {images.map((imgId, index) => (
                    <Image src={`http://localhost:8080/images/${images[index]}`} width={70} height={10} onClick={() => setImgIndex(index)} className={`cursor-pointer ${index === imgIndex ? 'border-black border-2' : ''}`} />
                ))}
            </div>
        </div>
    )
}
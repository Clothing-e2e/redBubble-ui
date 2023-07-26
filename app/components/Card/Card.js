'use client';

import Image from 'next/image';
import Link from 'next/link';
import Sizes from '../Sizes/Sizes';
import { useRouter } from 'next/navigation'

export default function Card({ data }) {
    const { imagesId } = data;
    const firstImageId = imagesId[0];
    const router = useRouter();

    return (
        <div className="w-[150px] h-[230px] sm:w-[276px] sm:h-[423px] flex flex-col gap-2 text-center m-4 mb-32">
            <Link href={`/${data.id}`}>
                <Image src={`http://localhost:8080/images/${firstImageId}`} width={276} height={322} alt='Product image' />
            </Link>
            <p className='text-sm'>{data.heading}</p>
            <p className='text-xs'>{`Rs. ${data.price}`}</p>
            <div className='flex justify-center gap-2'>
                <Sizes data={data} onChange={(size) => router.push(`/${data.id}?size=${size}`)} />
            </div>
        </div>
    )
}
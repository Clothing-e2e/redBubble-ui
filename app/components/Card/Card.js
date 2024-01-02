'use client';

import Image from 'next/image';
import Link from 'next/link';
import Sizes from '../Sizes/Sizes';
import { useRouter } from 'next/navigation';
import utils from '@/app/utils/utils';

const { ensureArray, ensureObject } = utils;

export default function Card({ data, category }) {
  const { imagesId } = ensureObject(data);
  const firstImageId = ensureArray(imagesId)[0];
  const router = useRouter();

  return (
    <div className="w-[150px] h-[230px] sm:w-[276px] sm:h-[423px] flex flex-col gap-2 text-center m-4 mb-32">
      <Link href={`/${category}/product?id=${data.id}`}>
        <Image
          src={`http://localhost:8080/api/images/${firstImageId}`}
          width={276}
          height={322}
          alt="Product image"
        />
      </Link>
      <p className="text-sm">{data.heading}</p>
      <p className="text-xs">{`Rs. ${data.price}`}</p>
      <div className="flex justify-center gap-2">
        <Sizes
          data={data}
          onChange={(size) =>
            router.push(`/${category}/product?size=${size}&id=${data.id}`)
          }
        />
      </div>
    </div>
  );
}

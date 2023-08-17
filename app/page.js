import Image from 'next/image';
import Banner from './icons/banner.png';
import Shirt from './icons/shirt.webp';
import TShirt from './icons/tshirt.webp';
import Jeans from './icons/jeans.webp';
import Hoodies from './icons/hoodies.webp';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-[100vw]">
      <Link href={`/all`}>
        <Image src={Banner} alt="Homepage banner" />
      </Link>
      <div className="py-8 px-4">
        <div className="flex flex-col justify-center items-center">
          <div className="text-xl lg:text-2xl text-center pt-10 pb-2">
            CATEGORIES
          </div>
          <hr width="10%" className="bg-slate-500 mb-10 h-[2px]" />
        </div>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          <div className="w-[150px] h-[230px] sm:w-[276px] sm:h-[423px] flex flex-col gap-4 text-center mb-10">
            <Link href={`/shirts`}>
              <Image src={Shirt} width={276} height={322} alt="Product image" />
            </Link>
            <p className="text-sm">Shirts</p>
          </div>
          <div className="w-[150px] h-[230px] sm:w-[276px] sm:h-[423px] flex flex-col gap-4 text-center mb-10">
            <Link href={`/tshirts`}>
              <Image
                src={TShirt}
                width={276}
                height={322}
                alt="Product image"
              />
            </Link>
            <p className="text-sm">T-Shirts</p>
          </div>
          <div className="w-[150px] h-[230px] sm:w-[276px] sm:h-[423px] flex flex-col gap-4 text-center mb-10">
            <Link href={`/jeans`}>
              <Image src={Jeans} width={276} height={322} alt="Product image" />
            </Link>
            <p className="text-sm">Jeans</p>
          </div>
          <div className="w-[150px] h-[230px] sm:w-[276px] sm:h-[423px] flex flex-col gap-4 text-center mb-10">
            <Link href={`/hoodies`}>
              <Image
                src={Hoodies}
                width={276}
                height={322}
                alt="Product image"
              />
            </Link>
            <p className="text-sm">Hoodies</p>
          </div>
        </div>
        <div className="flex justify-center py-4 sm:py-10">
          <Link href={`/all`}>
            <button className="border-4 border-slate-700 px-6 py-3 rounded-full text-sm sm:text-lg hover:bg-slate-700 hover:text-white">
              VIEW ALL
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useRouter } from 'next/navigation';
import useStore from '../../store/store';
import Image from 'next/image';
import Minus from '../../icons/minus.png';
import Add from '../../icons/add.png';
import Sizes from '../../components/Sizes/Sizes';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

function Actions({ data }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const addToCart = useStore((state) => state.addToCart);
  const [count, setCount] = useState(1);
  const [size, setSize] = useState(
    searchParams.get('size') || data.sizeSet[0].name,
  );

  /**
   * @description Adds to cart with required item details
   */
  const handleAdd = () => {
    addToCart({
      id: data.id,
      heading: data.heading,
      imagesId: data.imagesId,
      price: data.price,
      color: data.color,
      size,
      quantity: count,
    });
  };

  const addQuantity = () => {
    setCount((prev) => prev + 1);
  };

  const subtractQuantity = () => {
    setCount((prev) => {
      if (prev > 1) return prev - 1;
      return prev;
    });
  };

  const handleCheckout = () => {
    router.push('/checkout');
  };

  return (
    <>
      <p className="text-lg pt-4 sm:pt-6 pb-2 text-slate-700">Size</p>
      <div className="flex flex-wrap gap-3 mt-2">
        <Sizes data={data} selection={size} onChange={setSize} />
      </div>
      <p className="text-lg pt-8 sm:pt-12 pb-2 text-slate-700">Quantity</p>
      <div className="flex flex-wrap gap-5 mt-2 items-center">
        <div
          className="cursor-pointer w-[20px] h-[20px] flex items-center justify-center"
          onClick={subtractQuantity}
        >
          <Image src={Minus} width={18} height={2} alt="subtract-quantity" />
        </div>
        <p className="text-2xl font-sans">{count}</p>
        <div className="cursor-pointer" onClick={addQuantity}>
          <Image src={Add} width={18} height={18} alt="add-quantity" />
        </div>
      </div>
      <button
        className="block text-center w-[100%] sm:w-[450px] lg:w-[100%] bg-white text-black py-3 mt-16 rounded-md border hover:bg-slate-50"
        onClick={handleAdd}
      >
        ADD TO CART
      </button>
      <button
        className="block text-center w-[100%] sm:w-[450px] lg:w-[100%] bg-slate-800 text-white py-3 mt-4 rounded-md hover:bg-slate-700"
        onClick={handleCheckout}
      >
        CHECKOUT
      </button>
    </>
  );
}

export default Actions;

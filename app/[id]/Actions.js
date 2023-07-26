'use client';

import useStore from "../store/store";

function Actions({ data, size, quantity }) {
    const addToCart = useStore((state) => state.addToCart);

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
            quantity,
        });
    };

    return (
        <>
            <button className="block text-center w-[100%] sm:w-[450px] lg:w-[100%] bg-white text-black py-3 mt-16 rounded-md border hover:bg-slate-50" onClick={handleAdd}>ADD TO CART</button>
            <button className="block text-center w-[100%] sm:w-[450px] lg:w-[100%] bg-slate-800 text-white py-3 mt-4 rounded-md hover:bg-slate-700">CHECKOUT</button>
        </>
    )
}

export default Actions;
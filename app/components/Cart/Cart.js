'use client';

import useStore from "../../store/store";
import Wrapper from "../Sidebar/Wrapper";
import Image from "next/image";
import Counter from "../Counter/Counter";

/**
 * @description Cart sidebar
 * @returns
 */
function Cart() {
    const isCartVisible = useStore((state) => state.isCartVisible);
    const hideCart = useStore((state) => state.hideCart);
    const cartItems = useStore((state) => state.cart);
    const updateCart = useStore((state) => state.updateCart);

    const subTotal = cartItems.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);

    return (
        <Wrapper showLayover={true} isOpen={isCartVisible} onClose={hideCart} title="CART">
            <div className="p-2 px-4 overflow-y-scroll h-[calc(100vh-238px)]">
                {cartItems.map((item) => (
                    <div className="flex gap-2 py-4 hover:bg-slate-50">
                        <div><Image src={`http://localhost:8080/images/${item.imagesId[0]}`} width={100} height={100} /></div>
                        <div className="flex flex-col gap-2 ml-4 grow mr-4 justify-center">
                            <div className="text-sm">{item.heading}</div>
                            <div className="text-xs pt-2 pb-0"><span className="font-medium">Color:</span>{` ${item.color}`}</div>
                            <div className="text-xs pb-2 pt-0"><span className="font-medium">Size:</span>{` ${item.size}`}</div>
                            <div className="flex justify-between items-center">
                                <Counter initialCount={Number(item.quantity)} id={item.id} onChange={updateCart} />
                                <div className="text-xs font-semibold">{`Rs. ${item.price}`}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='absolute bottom-0 right-0 w-[100%] bg-white p-4 border-t'>
                <div className="py-4 px-2">
                    <div className="flex justify-between mx-2">
                        <p className="text-xs">SUBTOTAL</p>
                        <p className="text-xs">{`Rs. ${subTotal}`}</p>
                    </div>
                </div>
                <div className='py-4 mx-2 my-1 text-sm bg-slate-800 hover:bg-slate-700 cursor-pointer text-white rounded-md text-center'>PROCEED TO CHECKOUT</div>
                <div className="text-center pt-1 text-xs text-slate-500">Shipping & taxes calculated at checkout.</div>
            </div>
        </Wrapper>
    )
}

export default Cart;
'use client';

import { useRouter } from 'next/navigation';
import useStore from '../../store/store';
import Wrapper from '../Sidebar/Wrapper';
import Image from 'next/image';
import Counter from '../Counter/Counter';
import utils from '@/app/utils/utils';
import EmptyCart from '../../icons/emptyCart.png';

const { isArrayEmpty } = utils;

/**
 * @description Cart sidebar
 * @returns
 */
function Cart() {
  const router = useRouter();
  const isCartVisible = useStore((state) => state.isCartVisible);
  const hideCart = useStore((state) => state.hideCart);
  const cartItems = useStore((state) => state.cart);
  const updateCart = useStore((state) => state.updateCart);

  const handleCheckout = () => {
    router.push('/checkout');
    hideCart();
  };

  const subTotal = cartItems
    .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    .toFixed(2);
  return (
    <Wrapper
      showLayover={true}
      isOpen={isCartVisible}
      onClose={hideCart}
      title="CART"
    >
      {isArrayEmpty(cartItems) ? (
        <div className="flex items-center w-[100%] h-[calc(100vh-77px)]">
          <Image src={EmptyCart} width={350} height={350} alt="Empty Cart" />
        </div>
      ) : (
        <>
          <div className="p-2 px-4 overflow-y-scroll h-[calc(100vh-238px)]">
            {cartItems.map((item, index) => (
              <div className="flex gap-2 py-4 hover:bg-slate-50" key={index}>
                <div>
                  <Image
                    src={`http://62.72.30.200:8080/images/${item.imagesId[0]}`}
                    width={100}
                    height={100}
                    alt="Product Image"
                  />
                </div>
                <div className="flex flex-col gap-2 ml-4 grow mr-4 justify-center">
                  <div className="text-sm">{item.heading}</div>
                  <div className="text-xs pt-2 pb-0">
                    <span className="font-medium">Color:</span>
                    {` ${item.color}`}
                  </div>
                  <div className="text-xs pb-2 pt-0">
                    <span className="font-medium">Size:</span>
                    {` ${item.size}`}
                  </div>
                  <div className="flex justify-between items-center">
                    <Counter
                      initialCount={Number(item.quantity)}
                      data={item}
                      onChange={updateCart}
                    />
                    <div className="text-xs font-semibold">{`Rs. ${item.price}`}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 right-0 w-[100%] bg-white p-4 border-t">
            <div className="py-4 px-2">
              <div className="flex justify-between mx-2">
                <p className="text-xs">SUBTOTAL</p>
                <p className="text-xs">{`Rs. ${subTotal}`}</p>
              </div>
            </div>
            <div
              className="py-4 mx-2 my-1 text-sm bg-slate-800 hover:bg-slate-700 cursor-pointer text-white rounded-md text-center"
              onClick={handleCheckout}
            >
              PROCEED TO CHECKOUT
            </div>
            <div className="text-center pt-1 text-xs text-slate-500">
              Shipping & taxes calculated at checkout.
            </div>
          </div>
        </>
      )}
    </Wrapper>
  );
}

export default Cart;

'use client';

import { useSearchParams, useRouter } from 'next/navigation';

const Order = () => {
  const router = useRouter();
  const search = useSearchParams();

  if (!search.has('error')) {
    router.push('/');
  }

  return search.get('error') === 'false' ? (
    <div className="h-[500px] flex justify-center items-center flex-col">
      <h1 className="text-3xl">Your payment was successful!</h1>
      {search.has('orderId') && (
        <p className="text-lg mt-4">{`Order ID: ${search.get('orderId')}`}</p>
      )}
    </div>
  ) : (
    <div className="h-[500px] flex justify-center items-center flex-col">
      <h1 className="text-3xl">An error occurred while making the payment!</h1>
      <p className="text-md mt-4">
        Please try again later. If the error continues, please contact support.
      </p>
    </div>
  );
};

export default Order;

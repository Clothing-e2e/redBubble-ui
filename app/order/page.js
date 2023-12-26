'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import Button from '../components/Button/Button';

const Order = () => {
  const router = useRouter();
  const search = useSearchParams();

  if (!search.has('error')) {
    router.push('/');
  }

  return search.get('error') === 'false' ? (
    <div className="h-[500px] flex justify-center items-center flex-col">
      <h1 className="text-3xl mb-4">Your payment was successful!</h1>
      {search.has('orderId') && (
        <p className="text-lg mb-4">{`Order ID: ${search.get('orderId')}`}</p>
      )}
      <Button text="Return to homepage" onClick={() => router.push('/')} />
    </div>
  ) : (
    <div className="h-[500px] flex justify-center items-center flex-col">
      <h1 className="text-3xl">An error occurred while making the payment!</h1>
      <p className="text-md mt-4 mb-4">
        Please try again later. If the error continues, please contact support.
      </p>
      <Button text="Return to homepage" onClick={() => router.push('/')} />
    </div>
  );
};

export default Order;

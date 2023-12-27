'use client';

import axios from 'axios';
import { useState } from 'react';
import Modal from '../components/Modal/Modal';
import { useRouter } from 'next/navigation';
import utils from '../utils/utils';
import Loader from '../components/Loader';
import useStore from '../store/store';

const { ensureArray } = utils;
const addSelectedToAddress = (addresses) => {
  return addresses.map((item, index) => ({
    ...item,
    isSelected: index === 0,
  }));
};

const Address = ({ userData }) => {
  const clearCart = useStore((state) => state.clearCart);
  const [addresses, setAddresses] = useState(
    addSelectedToAddress(userData?.addresses || []),
  );
  const [modalData, setModalData] = useState({});
  const [showModal, setShowModal] = useState({ isOpen: false, isAdd: false });
  const [paymentStatus, setPaymentStatus] = useState('pending');

  const router = useRouter();

  const makePayment = async () => {
    const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY;
    console.log(key);

    const data = await axios.post('/api/orders', {
      userId: '64c95ee9a104506d4ba06551',
      addressId: '3dacf8c0-dfde-4bf0-a0d6-2b72e2ff240e',
      amount: 2.0,
      orderDetailsList: [
        {
          styleId: '64b5a0aaec6a046dabff5fc2',
          quantity: 2,
          size: 'M',
        },
      ],
    });
    const order = data.data;
    const options = {
      key: key,
      name: userData.email,
      currency: order.currency,
      amount: order.amount,
      order_id: order.pgOrderId,
      description: 'Understanding RazorPay Integration',
      handler: async function (response) {
        setPaymentStatus('verifying');

        const res = await axios.put(`/api/orders/${order.id}`, {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        });

        const paymentRes = res.data;

        if (paymentRes.error === null) {
          clearCart();
          router.push(`/order?error=false&orderId=${paymentRes.orderId}`);
        } else {
          router.push(`/order?error=true`);
        }
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const updateAddressSelection = (itemIndex) => {
    setAddresses((prev) =>
      prev.map((item, index) => {
        if (index === itemIndex) {
          return {
            ...item,
            isSelected: true,
          };
        }
        return {
          ...item,
          isSelected: false,
        };
      }),
    );
  };

  const handleEdit = (e, address) => {
    e.stopPropagation();
    setShowModal({ isOpen: true, isAdd: false });
    setModalData(address);
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    setShowModal({ isOpen: true, isAdd: true });
    setModalData({
      name: '',
      houseNumber: '',
      pinCode: '',
      city: '',
      state: '',
      email: '',
    });
  };

  const handleClose = () => {
    setShowModal({ isOpen: false, isAdd: false });
  };

  const handleUpdateData = (updatedData) => {
    const payload = updatedData;
    delete payload.isSelected;
    axios
      .put(`/api/users/${userData?.id}/addresses/${payload.id}`, payload)
      .then((res) => {
        setAddresses(addSelectedToAddress(res?.data?.addresses || []));
        setShowModal({ isOpen: false, isAdd: false });
      });
  };

  const handleAddData = (data) => {
    delete data.isSelected;
    const payload = {
      ...userData,
      addresses: [...ensureArray(userData.addresses), data],
    };
    axios.put(`/api/users/${userData?.id}`, payload).then((res) => {
      setAddresses(addSelectedToAddress(res?.data?.addresses || []));
      setShowModal({ isOpen: false, isAdd: false });
    });
  };

  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="w-[330px] sm:w-[500px]">
        <div className="flex justify-between items-center">
          <span>Shipping Address</span>
          <button
            className="bg-slate-800 hover:bg-slate-700 text-white rounded-full text-center flex justify-center items-center text-xs py-1 px-2"
            onClick={handleAdd}
          >
            Add New
          </button>
        </div>
        <div className="max-h-[340px] overflow-y-scroll">
          {addresses.map((item, index) => (
            <div
              className={`${
                item.isSelected
                  ? 'border-black border-2'
                  : 'border-slate-300 border'
              } p-2 rounded-lg mt-4 cursor-pointer`}
              onClick={() => updateAddressSelection(index)}
              key={index}
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold">{item.name || 'Test Name'}</p>
                <button
                  className="text-xs mr-2 underline underline-offset-2"
                  onClick={(e) => handleEdit(e, item)}
                >
                  Edit
                </button>
              </div>
              <p className="text-sm my-2">{`${item.houseNumber}, ${item.city}, ${item.state}, ${item.pinCode}`}</p>
              <p className="text-xs text-slate-600">{item.email}</p>
            </div>
          ))}
        </div>
      </div>
      {addresses.length !== 0 && (
        <button
          className={`w-[300px] h-[50px] text-white rounded-md text-center my-8 flex justify-center items-center ${
            paymentStatus === 'verifying'
              ? 'bg-slate-600 cursor-not-allowed'
              : 'bg-slate-900 hover:bg-slate-800'
          }`}
          onClick={makePayment}
        >
          {paymentStatus === 'verifying' && <Loader />}
          {paymentStatus === 'verifying' ? (
            <p className="ml-4">Verifying Payment</p>
          ) : (
            'Make Payment'
          )}
        </button>
      )}
      {showModal.isOpen && (
        <Modal
          isOpen={showModal.isOpen}
          onClose={handleClose}
          isAdd={showModal.isAdd}
          modalData={modalData}
          updateData={handleUpdateData}
          addData={handleAddData}
        />
      )}
    </div>
  );
};

export default Address;

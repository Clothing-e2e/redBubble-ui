'use client';

import Breadcrumb from "../components/Breadcrumb/Breadcrumb"
import Image from "next/image"
import VectorRight from '../icons/vector_right.png';
import VectorLeft from '../icons/vector_left.png';
import Minus from '../icons/minus.png';
import Add from '../icons/add.png';
import Sizes from "../components/Sizes/Sizes";
import { useState, useContext } from "react";
import { GlobalContext } from "../Context";

export default function Product() {
  const { data } = useContext(GlobalContext);
  const { selectedData, selectedSize } = data;
  const [imgIndex, setImgIndex] = useState(0);
  const images = selectedData.imagesId;

  const showPrevImg = () => {
    setImgIndex((index) => index - 1);
  }

  const showNextImg = () => {
    setImgIndex((index) => index + 1);
  }

  const disablePrev = () => {
    return imgIndex === 0;
  }

  const disableNext = () => {
    return imgIndex === images.length - 1;
  }

    return (
      <div className="px-5 md:px-8 lg:px-20 py-8">
        <Breadcrumb list={[{ title: 'All T-shirts', link: '/' }, { title: 'Test', link: '/product' }]}/>
        <div className="details flex flex-col lg:flex-row justify-center">

          {/* Image */}
          <div className="px-4 md:px-8 xl:px-20 pt-20 flex justify-center">
            <div className={`absolute left-20 top-[42%] sm:static flex items-center mr-4 2xl:mr-16 ${ disablePrev() ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={disablePrev() ? () => {} : showPrevImg}><Image src={VectorLeft} width={30} height={50}/></div>
            <Image src={`http://localhost:8080/images/${images[imgIndex]}`} width={400} height={400}/>
            <div className={`absolute right-20 top-[42%] sm:static flex items-center ml-4 2xl:ml-16 ${ disableNext() ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={disableNext() ? () => {} : showNextImg}><Image src={VectorRight} width={30} height={50}/></div>
          </div>

          {/* Description */}
          <div className="px-4 md:px-8 2xl:px-20 pt-20 flex flex-col justify-center items-start sm:items-center lg:items-start">
            <p className="text-3xl">{selectedData.heading}</p>
            <p className="text-xl pt-10 pb-2 text-slate-800">{`Rs. ${selectedData.price}`}</p>
            <p className="text-sm pb-6 text-slate-700">Tax included. Shipping calculated at checkout</p>
            <hr />
            <p className="text-lg pt-6 pb-2 text-slate-700">Size</p>
            <div className="flex flex-wrap gap-3 mt-2"><Sizes data={selectedData} /></div>
            <p className="text-lg pt-12 pb-2 text-slate-700">Quantity</p>
            <div className="flex flex-wrap gap-5 mt-2 items-center">
              <div><Image src={Minus} width={30} height={2} alt="subtract-quantity"/></div>
              <p className="text-2xl font-sans">1</p>
              <div><Image src={Add} width={28} height={28} alt="add-quantity"/></div>
            </div>
            <button className="block text-center w-[100%] sm:w-[450px] lg:w-[100%] bg-white text-black py-3 mt-16 rounded-md border hover:bg-slate-50">ADD TO CART</button>
            <button className="block text-center w-[100%] sm:w-[450px] lg:w-[100%] bg-slate-800 text-white py-3 mt-4 rounded-md hover:bg-slate-700">CHECKOUT</button>
          </div>
        </div>
      </div>
    )
  }
  
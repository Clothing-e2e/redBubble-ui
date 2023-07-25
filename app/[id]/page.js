import Breadcrumb from "../components/Breadcrumb/Breadcrumb"
import Image from "next/image"
import Minus from '../icons/minus.png';
import Add from '../icons/add.png';
import Sizes from "../components/Sizes/Sizes";
import Carousel from "../components/Carousel/Carousel";

export default async function Product({ params }) {
  const res = await fetch(`http://localhost:8080/style-details/${params.id}`);
  const data = await res.json();
  console.log(data);
  const images = data.imagesId;

    return (
      <div className="px-5 md:px-8 lg:px-20 py-8 mb-10 lg:mb-36">
        <div className="details flex flex-col lg:flex-row justify-center">

          {/* Image */}
          <div className="md:px-8 xl:px-20 flex flex-col items-center justify-center">
            <div>
              <Breadcrumb list={[{ title: 'All T-shirts', link: '/' }, { title: 'Test', link: '/product' }]}/>
              <Carousel images={images} />
            </div>
          </div>

          {/* Description */}
          <div className="px-2 md:px-8 2xl:px-20 mt-8 sm:mt-8 flex flex-col justify-center items-start sm:items-center lg:items-start">
            <p className="text-2xl sm:text-3xl">{data.heading}</p>
            <p className="text-lg sm:text-xl pt-10 pb-2 text-slate-800">{`Rs. ${data.price}`}</p>
            <p className="text-xs sm:text-sm pb-4 sm:pb-6 text-slate-700">Tax included. Shipping calculated at checkout</p>
            <hr className="h-2 w-full"/>
            <p className="text-lg pt-4 sm:pt-6 pb-2 text-slate-700">Size</p>
            <div className="flex flex-wrap gap-3 mt-2"><Sizes data={data} /></div>
            <p className="text-lg pt-8 sm:pt-12 pb-2 text-slate-700">Quantity</p>
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
  
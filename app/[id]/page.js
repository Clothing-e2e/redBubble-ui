import Breadcrumb from "../components/Breadcrumb/Breadcrumb"
import Carousel from "../components/Carousel/Carousel";
import Actions from "./Actions";

export default async function Product({ params }) {
  const res = await fetch(`http://localhost:8080/style-details/${params.id}`);
  const data = await res.json();
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
            <Actions data={data} quantity={1} size="S" />
          </div>
        </div>
      </div>
    )
  }
  
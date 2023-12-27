import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Carousel from '../../components/Carousel/Carousel';
import Actions from './Actions';
import utils from '../../utils/utils';

const { ensureObject, ensureArray, capitalizeFirst } = utils;

export default async function Product({ params }) {
  const category = params.category;
  const title = category === 'all' ? 'All' : `All ${capitalizeFirst(category)}`;
  const res = await fetch(`/api/style-details/${params.id}`);
  const data = await res.json();
  const parsedData = ensureObject(data);
  const images = ensureArray(parsedData.imagesId);

  return (
    <div className="px-5 md:px-8 lg:px-20 py-8 mb-10 lg:mb-36">
      <div className="details flex flex-col lg:flex-row justify-center">
        {/* Image */}
        <div className="md:px-8 xl:px-20 flex flex-col items-center justify-center">
          <div>
            <Breadcrumb
              list={[
                { title, link: `/${category}` },
                { title: parsedData.heading, link: `/${parsedData.id}` },
              ]}
            />
            <Carousel images={images} />
          </div>
        </div>
        <div className="px-2 md:px-8 2xl:px-20 mt-8 sm:mt-14 flex flex-col items-start sm:items-center lg:items-start">
          <p className="text-2xl sm:text-3xl">{parsedData.heading}</p>
          <p className="text-lg sm:text-xl pt-10 pb-2 text-slate-800">{`Rs. ${parsedData.price}`}</p>
          <p className="text-xs sm:text-sm pb-4 sm:pb-6 text-slate-700">
            Tax included. Shipping calculated at checkout
          </p>
          <hr className="h-2 w-full" />
          <Actions data={data} quantity={1} size="S" />
        </div>
      </div>
    </div>
  );
}

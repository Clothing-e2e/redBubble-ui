'use client';

import { useState, useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Carousel from '../../components/Carousel/Carousel';
import Actions from './Actions';
import utils from '../../utils/utils';
import axios from '../../axios/api';
import { useSearchParams } from 'next/navigation';
import Loader from '@/app/components/Loader';

const { ensureObject, capitalizeFirst } = utils;

export default function Product({ params }) {
  const [data, setData] = useState({});
  const search = useSearchParams();
  const category = params.category;
  const title = category === 'all' ? 'All' : `All ${capitalizeFirst(category)}`;

  useEffect(() => {
    axios.get(`/style-details/${search.get('id')}`).then((res) => {
      console.log('aaa here', res);
      setData(res.data);
    });
  }, []);

  return Object.keys(ensureObject(data)).length !== 0 ? (
    <div className="px-5 md:px-8 lg:px-20 py-8 mb-10 lg:mb-36">
      <div className="details flex flex-col lg:flex-row justify-center">
        {/* Image */}
        <div className="md:px-8 xl:px-20 flex flex-col items-center justify-center">
          <div>
            <Breadcrumb
              list={[
                { title, link: `/${category}` },
                {
                  title: ensureObject(data).heading,
                  link: `/${ensureObject(data).id}`,
                },
              ]}
            />
            <Carousel images={ensureObject(data).imagesId} />
          </div>
        </div>
        <div className="px-2 md:px-8 2xl:px-20 mt-8 sm:mt-14 flex flex-col items-start sm:items-center lg:items-start">
          <p className="text-2xl sm:text-3xl">{ensureObject(data).heading}</p>
          <p className="text-lg sm:text-xl pt-10 pb-2 text-slate-800">{`Rs. ${
            ensureObject(data).price
          }`}</p>
          <p className="text-xs sm:text-sm pb-4 sm:pb-6 text-slate-700">
            Tax included. Shipping calculated at checkout
          </p>
          <hr className="h-2 w-full" />
          <Actions data={ensureObject(data)} quantity={1} size="S" />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-[300px] w-[100%]">
      <Loader />
    </div>
  );
}

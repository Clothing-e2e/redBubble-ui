'use client';

import axios from '../axios/api';
import Card from '../components/Card/Card';
import useStore from '../store/store';
import { useState, useEffect } from 'react';
import utils from '../utils/utils';
import Button from '../components/Button/Button';
import { useRouter } from 'next/navigation';

const { isArrayEmpty } = utils;

const CATEGORY = {
  tshirts: 'tshirt',
  shirts: 'shirt',
  hoodies: 'hoodie',
  jeans: 'jeans',
};

export default function Content({ category }) {
  const router = useRouter();
  const [pageData, setPageData] = useState({ content: [] });
  const [isLoading, setIsLoading] = useState(true);
  const filters = useStore((state) => state.filters);
  const size = useStore((state) => state.size);
  const page = useStore((state) => state.page);
  const sort = useStore((state) => state.sort);

  useEffect(() => {
    const bodyData = { category: [], ...filters };
    if (category !== 'all') {
      bodyData.category = [
        ...new Set([...bodyData.category, CATEGORY[category]]),
      ];
    } else {
      bodyData.category = [...new Set([...bodyData.category])];
    }

    setIsLoading(true);
    axios
      .post(
        `/style-details/getStyles?page=${page}&size=${size}&sort=${sort}`,
        bodyData,
        { headers: { 'Content-Type': 'application/json' } },
      )
      .then((res) => {
        setPageData(res.data);
        setIsLoading(false);
      });
  }, [filters, sort, page, size, category]);

  if (isLoading)
    return (
      <div className="w-full flex justify-center h-[calc(100vh-154px)] items-center">
        <svg
          aria-hidden="true"
          className="w-14 h-14 md:w-16 md:h-16 mr-2 text-gray-200 animate-spin fill-slate-700"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    );

  return isArrayEmpty(pageData.content) ? (
    <div className="flex items-center justify-center h-[calc(100vh-154px)] flex-col px-4">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-5xl mb-4">No Items Found!</h1>
        <h1 className="text-sm md:text-md mb-8">
          We could not find any products for the selected filters. Please try
          changing the filters or browse all products.
        </h1>
      </div>
      <Button text="Browse all products" onClick={() => router.push('/all')} />
    </div>
  ) : (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center">
      {pageData.content.map((item, index) => (
        <Card data={item} key={index} category={category} />
      ))}
    </div>
  );
}

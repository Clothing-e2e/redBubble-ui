'use client';

import Accordian from "../Accordian/Accordian";
import config from "./config";
import { useRouter } from "next/navigation";
import useStore from "@/app/store/store";

const { SIDEBAR_CATEGORIES } = config;

export default function Shop() {
    const setFilters = useStore((state) => state.setFilters);
    const router = useRouter();

    const handleClick = (filter) => {
        setFilters({ category: filter });
        router.push('/product');
    }

    return (
        <Accordian title="SHOP" size="large">
          <div className='px-2'>
          {SIDEBAR_CATEGORIES.map((item) => (
            <Accordian title={item.category} isNested>
              <div className='px-2 border-l border-slate-500'>
                {item.subCategories.map((subCategory) => (
                  <p className='text-xs pl-1 py-1.5 cursor-pointer' onClick={() => handleClick(subCategory.filter)}>{subCategory.name}</p>
                ))}
              </div>
            </Accordian>
          ))}
          </div>
        </Accordian>
    )
}
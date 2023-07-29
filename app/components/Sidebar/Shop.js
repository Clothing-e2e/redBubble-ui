'use client';

import Accordian from "../Accordian/Accordian";
import config from "./config";
import { useRouter } from "next/navigation";
import useStore from "@/app/store/store";

const { SIDEBAR_CATEGORIES } = config;

export default function Shop({ onClose }) {
    const router = useRouter();
    const clearAllFilters = useStore((state) => state.clearAllFilters);

    const handleClick = (link) => {
      clearAllFilters();
      router.push(link);
      onClose();
    }

    return (
      <Accordian title="SHOP" size="large">
        <div className='px-2'>
        {SIDEBAR_CATEGORIES.map((item) => (
          <p className='text-xs pl-1 py-1.5 cursor-pointer' onClick={() => handleClick(item.link)}>{item.name}</p>
        ))}
        </div>
      </Accordian>
    )
}
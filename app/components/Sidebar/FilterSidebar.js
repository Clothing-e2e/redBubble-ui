'use client';

import { useState } from "react";
import Wrapper from "./Wrapper";
import Accordian from "../Accordian/Accordian";
import CheckboxGroup from "../Checkbox/CheckboxGroup";

function FilterSidebar({ isOpen, onClose }) {
  const [productTypes, setProductTypes] = useState([
    { id: 1, checked: false, name: 'T-shirts', value: 'tshirts' },
    { id: 2, checked: false, name: 'Shirts', value: 'shirts' },
    { id: 3, checked: false, name: 'Jeans', value: 'jeans' },
    { id: 4, checked: false, name: 'Sweaters', value: 'sweaters' },
    { id: 5, checked: false, name: 'Pants', value: 'pants' },
  ]);

  const [colors, setColors] = useState([
    { id: 1, checked: false, name: 'White', value: 'white', color: 'bg-white border-2' },
    { id: 2, checked: false, name: 'Black', value: 'black', color: 'bg-black' },
    { id: 3, checked: false, name: 'Red', value: 'red', color: 'bg-red-600' },
    { id: 4, checked: false, name: 'Yellow', value: 'yellow', color: 'bg-yellow-400' },
    { id: 5, checked: false, name: 'Green', value: 'green', color: 'bg-green-500' },
  ]);

  const [sizes, setSizes] = useState([
    { id: 1, checked: false, name: 'XS', value: 'XS' },
    { id: 2, checked: false, name: 'S', value: 'S' },
    { id: 3, checked: false, name: 'M', value: 'M' },
    { id: 4, checked: false, name: 'L', value: 'L' },
    { id: 5, checked: false, name: 'XL', value: 'XL' },
    { id: 5, checked: false, name: 'XXL', value: 'XXL' },
  ]);

  const [fittings, setFittings] = useState([
    { id: 1, checked: false, name: 'Slim Fit', value: 'slimFit' },
    { id: 2, checked: false, name: 'Baggy Fit', value: 'baggyFit' },
  ]);

  const [price, setPrice] = useState([
    { id: 1, checked: false, name: 'Rs. 199 to Rs. 2000', value: { min: 199, max: 2000 } },
    { id: 2, checked: false, name: 'Rs. 2000 to Rs. 5000', value: { min: 2000, max: 5000 } },
    { id: 3, checked: false, name: 'Rs. 5000 to Rs. 10000', value: { min: 5000, max: 10000 } },
    { id: 4, checked: false, name: 'Rs. 10000+', value: { min: 10000, max: 100000 } },
  ]);

  const handleChange = (id, setMethod) => {
    setMethod((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            checked: !item.checked,
          }
        }
        return item;
      })
    })
  }

  return (
    <Wrapper isOpen={isOpen} onClose={onClose} showLayover>
      <div className="px-3 overflow-y-scroll h-[calc(100vh-116px)]">
        <Accordian title="PRODUCT TYPE">
          <CheckboxGroup data={productTypes} onChange={(id) => handleChange(id, setProductTypes)}/>
        </Accordian >
        <Accordian title="COLORS">
          <CheckboxGroup data={colors} onChange={(id) => handleChange(id, setColors)} isColors />
        </Accordian>
        <Accordian title="SIZE">
          <CheckboxGroup data={sizes} onChange={(id) => handleChange(id, setSizes)}/>
        </Accordian>
        <Accordian title="PRICE">
          <CheckboxGroup data={price} onChange={(id) => handleChange(id, setPrice)}/>
        </Accordian>
        <Accordian title="FITTINGS">
          <CheckboxGroup data={fittings} onChange={(id) => handleChange(id, setFittings)}/>
        </Accordian>
      </div>
      <div className='absolute bottom-0 right-0 flex w-[100%] text-center'>
        <div className='w-[50%] py-4 text-sm border-r bg-slate-50 hover:bg-slate-200 cursor-pointer'>CLEAR</div>
        <div className='w-[50%] py-4 text-sm bg-slate-50 hover:bg-slate-200 cursor-pointer'>APPLY</div>
      </div>
    </Wrapper>
  )
}

export default FilterSidebar;
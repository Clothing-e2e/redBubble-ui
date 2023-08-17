'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Add from '../../icons/add.png';
import Remove from '../../icons/minus.png';

const Counter = ({ initialCount = 0, onChange = null, data = null }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  const handleIncrement = () => {
    if (onChange) {
      onChange(data.id, count + 1, data.size);
      setCount((value) => value + 1);
    } else {
      setCount((value) => value + 1);
    }
  };
  const handleDecrement = () => {
    if (onChange) {
      onChange(data.id, count - 1, data.size);
      setCount((value) => value - 1);
    } else {
      setCount((value) => value - 1);
    }
  };

  return (
    <div className="flex gap-4 text-sm items-center">
      <div
        onClick={handleDecrement}
        className="cursor-pointer h-2 flex items-center"
      >
        <Image src={Remove} width={10} height={2} />
      </div>
      <div className="font-sans">{count}</div>
      <div onClick={handleIncrement} className="cursor-pointer">
        <Image src={Add} width={10} height={10} />
      </div>
    </div>
  );
};

export default Counter;

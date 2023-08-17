import Image from 'next/image';
import LoaderImg from '../../icons/loader.png';

const Loader = () => (
  <Image
    src={LoaderImg}
    width={30}
    height={30}
    alt="Loader"
    className="animate-spin"
  />
);

/**
 * @description Button component
 * @param {string} text - Button text
 * @param {function} onClick - onClick handler for button
 * @param {boolean} isLoading - Button loading state
 * @param {boolean} isDisabled - Button disabled state
 */
const Button = ({ text, onClick, isLoading = false, isDisabled = false }) => {
  return (
    <button
      className={`
                w-[300px] 
                h-[50px] 
                ${
                  isDisabled
                    ? 'bg-slate-600 cursor-not-allowed'
                    : 'bg-slate-900 hover:bg-slate-800'
                } 
                text-white 
                rounded-md 
                text-center 
                mt-4 
                flex 
                justify-center 
                items-center
            `}
      onClick={onClick}
    >
      {isLoading ? <Loader /> : text}
    </button>
  );
};

export default Button;

import Close from '../../icons/Close.png';
import Image from 'next/image';

export default function Sidebar({ isOpen, close }) {
    return (
        <div className={`top-0 left-0 w-[300px] bg-white shadow text-black h-[100vh] absolute z-40 ease-in-out duration-300 ${
            isOpen ? "translate-x-0 " : "-translate-x-full"
          } flex flex-col overflow-y-scroll`}>
             <div className='flex cursor-pointer justify-end p-6' onClick={close}>
                <Image src={Close} alt='Close Sidebar button' width={15} height={15} />
             </div>
             <div>
                {/* <hr /> */}
                <h1 className='p-4 pb-6 pt-6 hover:backdrop-brightness-95 flex'>HOME</h1>
                <hr />
                <h1 className='p-4 pb-6 pt-6 hover:backdrop-brightness-95 flex'>NEW ARRIVALS</h1>
                <hr />
                <h1 className='p-4 pb-6 pt-6 hover:backdrop-brightness-95 flex'>BEST SELLERS</h1>
                <hr />
                <h1 className='p-4 pb-6 pt-6 hover:backdrop-brightness-95 flex'>SHOP</h1>
                <hr />
                <h1 className='p-4 pb-6 pt-6 hover:backdrop-brightness-95 flex'>TRACK ORDER</h1>
                <hr />
                <h1 className='p-4 pb-6 pt-6 hover:backdrop-brightness-95 flex'>RETURN REQUEST</h1>
                <hr />
             </div>
        </div>);
}
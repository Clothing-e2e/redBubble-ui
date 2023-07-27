import Wrapper from './Wrapper';
import Accordian from '../Accordian/Accordian';

export default function Sidebar({ isOpen, close }) {
  return (
    <Wrapper onClose={close} isOpen={isOpen} direction="left" showLayover>
      <div className='px-4 divide-y overflow-y-auto h-[calc(100vh-77px)]'>
        <h1 className='p-4 pb-6 pt-6 hover:backdrop-brightness-90 flex text-sm cursor-pointer'>HOME</h1>
        <h1 className='p-4 pb-6 pt-6 hover:backdrop-brightness-95 flex text-sm cursor-pointer'>NEW ARRIVALS</h1>
        <h1 className='p-4 pb-6 pt-6 hover:backdrop-brightness-95 flex text-sm cursor-pointer'>BEST SELLERS</h1>
        <Accordian title="SHOP" size="large">
          <div className='px-2'>
            <Accordian title='Mens' isNested>
              <div className='px-2 border-l border-slate-500'>
                <p className='text-xs pl-1 py-1.5'>T-shirts</p>
                <p className='text-xs pl-1 py-1.5'>Shirts</p>
                <p className='text-xs pl-1 py-1.5'>Jeans</p>
                <p className='text-xs pl-1 py-1.5'>Sweatshirts</p>
              </div>
            </Accordian>
            <Accordian title='Womens' isNested>
            <div className='px-2 border-l border-slate-500'>
                <p className='text-xs pl-1 py-1.5'>T-shirts</p>
                <p className='text-xs pl-1 py-1.5'>Kurtis</p>
                <p className='text-xs pl-1 py-1.5'>Jeans</p>
                <p className='text-xs pl-1 py-1.5'>Sweatshirts</p>
              </div>
            </Accordian>
          </div>
        </Accordian>
        <h1 className='p-4 pb-6 pt-6 hover:backdrop-brightness-95 flex text-sm cursor-pointer'>TRACK ORDER</h1>
        <h1 className='p-4 pb-6 pt-6 hover:backdrop-brightness-95 flex text-sm cursor-pointer'>RETURN REQUEST</h1>
      </div>
    </Wrapper>
  );
}
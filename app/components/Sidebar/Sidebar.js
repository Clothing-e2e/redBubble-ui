import Wrapper from './Wrapper';

export default function Sidebar({ isOpen, close }) {
  return (
    <Wrapper onClose={close} isOpen={isOpen} direction="left" showLayover>
      <div className='px-4'>
        <h1 className='p-4 pb-6 pt-6 hover:backdrop-brightness-90 flex text-sm cursor-pointer'>HOME</h1>
        <hr />
        <h1 className='p-4 pb-6 pt-6 hover:backdrop-brightness-95 flex text-sm cursor-pointer'>NEW ARRIVALS</h1>
        <hr />
        <h1 className='p-4 pb-6 pt-6 hover:backdrop-brightness-95 flex text-sm cursor-pointer'>BEST SELLERS</h1>
        <hr />
        <h1 className='p-4 pb-6 pt-6 hover:backdrop-brightness-95 flex text-sm cursor-pointer'>SHOP</h1>
        <hr />
        <h1 className='p-4 pb-6 pt-6 hover:backdrop-brightness-95 flex text-sm cursor-pointer'>TRACK ORDER</h1>
        <hr />
        <h1 className='p-4 pb-6 pt-6 hover:backdrop-brightness-95 flex text-sm cursor-pointer'>RETURN REQUEST</h1>
        <hr />
      </div>
    </Wrapper>
  );
}
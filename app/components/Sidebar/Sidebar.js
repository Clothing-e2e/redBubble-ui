import Wrapper from './Wrapper';
import Shop from './Shop';
import Link from 'next/link';

export default function Sidebar({ isOpen, close }) {
  return (
    <Wrapper onClose={close} isOpen={isOpen} direction="left" showLayover>
      <div className="px-4 divide-y overflow-y-auto h-[calc(100vh-77px)]">
        <Link href="/" onClick={close}>
          <h1 className="p-4 pb-6 pt-6 hover:backdrop-brightness-90 flex text-sm cursor-pointer">
            HOME
          </h1>
        </Link>
        <h1 className="p-4 pb-6 pt-6 hover:backdrop-brightness-95 flex text-sm cursor-pointer">
          NEW ARRIVALS
        </h1>
        <Shop onClose={close} />
        <h1 className="p-4 pb-6 pt-6 hover:backdrop-brightness-95 flex text-sm cursor-pointer">
          TRACK ORDER
        </h1>
        <h1 className="p-4 pb-6 pt-6 hover:backdrop-brightness-95 flex text-sm cursor-pointer">
          RETURN REQUEST
        </h1>
      </div>
    </Wrapper>
  );
}

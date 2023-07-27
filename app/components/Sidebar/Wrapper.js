import Close from '../../icons/Close.png';
import Image from 'next/image';

function Wrapper({ children, direction = 'right', isOpen, onClose, showLayover = true, title = null }) {
  const classNames = {
      left: `fixed top-0 left-0 w-full sm:w-1/2 lg:w-1/4 bg-white shadow text-black h-[100vh] z-40 ease-in-out duration-300 ${
          isOpen ? "translate-x-0 " : "-translate-x-full"
      } flex flex-col overflow-y-scroll`,
      right: `fixed inset-y-0 right-0 z-50 w-full sm:w-1/2 lg:w-1/4 bg-white shadow-lg transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
      }`
  };
  return (
    <>
      {isOpen && showLayover && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-slate-500 opacity-50 z-40"
            onClick={onClose}
          />
      )}
      <div className={classNames[direction]}>
          <div className={`flex justify-between items-center py-6 mb-1 px-2 ${title && 'border-b'} mx-4`}>
              <div className={`text-xl ${!title && 'invisible'}`}>{title}</div>
              <div className='cursor-pointer' onClick={onClose}><Image src={Close} alt='Close Sidebar button' width={12} height={12} /></div>
          </div>
          {children}
      </div>
    </>
  );
}

export default Wrapper;
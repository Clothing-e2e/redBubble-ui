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

export default Loader;

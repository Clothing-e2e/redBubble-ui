import Link from 'next/link';

export default function Breadcrumb({ list = [] }) {
  return list.map((item, index) => {
    if (index === list.length - 1) {
      return (
        <span className="text-sm" key={index}>
          {item.title}
        </span>
      );
    }
    return (
      <Link href={item.link} key={index}>
        <span className="text-sm hover:font-medium">{item.title}</span>
        <span className="px-4">{index !== list.length - 1 ? '/' : ''}</span>
      </Link>
    );
  });
}

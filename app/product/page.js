import Breadcrumb from "../components/Breadcrumb/Breadcrumb"

export default function Product() {
    return (
      <div className="px-20 py-8">
        <Breadcrumb list={[{ title: 'All T-shirts', link: '/' }, { title: 'Test', link: '/product' }]}/>
      </div>
    )
  }
  
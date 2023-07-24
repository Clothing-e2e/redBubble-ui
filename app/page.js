import axios from "axios";
import Card from "./components/Card/Card"

export default async function Home() {
  const res = await axios.get('http://localhost:8080/style-details?page=0&sort=name%2Casc&category=shirt&color=white');
  const data = await res.data;

  return (
    <div className="px-4 md:px-8 lg:px-20 pt-8">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center">
        {data.content.map((item, index) => <Card data={item} key={index} />)}
      </div>
    </div>
  )
}
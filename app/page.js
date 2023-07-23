'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card/Card"

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/style-details?page=0&sort=name%2Casc&category=shirt&color=white')
    .then((res) => setData(res.data.content));
  }, []);

  return (
    <div className="p-20 pt-8">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center">
        {data.map((item, index) => <Card data={item} key={index} />)}
      </div>
    </div>
  )
}
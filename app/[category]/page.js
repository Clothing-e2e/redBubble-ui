import DropDown from "../components/DropDown/DropDown";
import Filter from "../components/Filters/Filters";
import Content from "./Content";

export default function Category({ params }) {
  return (
    <div className="px-4 md:px-8 lg:px-20 flex flex-col">
      <div className="gap-3 px-5 sticky top-20 bg-white w-full py-4 flex justify-between">
        <DropDown />
        <Filter />
      </div>
      <Content category={params.category} />
    </div>
  )
}
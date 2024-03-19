import { useContext } from "react";
import { tags } from "../../data/data";
import { BrandsContext } from "../../contexts/BrandsContext";

export function FilteringTags() {
  const { filterByTags } = useContext(BrandsContext);

  return <div className="bg-slate-50 absolute top-[110%] left-0 px-2 py-2 border-2">
    {tags.map((tag, index) => <button key={index} className="w-full bg-white block mt-2 px-2 border-2" onClick={() => filterByTags(tag)}>{tag}</button>)}
  </div>
}
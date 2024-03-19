import { useContext, useState } from "react";
import { BrandsContext } from "../../contexts/BrandsContext";
import { AdjustmentsHorizontalIcon, AdjustmentsVerticalIcon, CubeTransparentIcon, InboxStackIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import { FilteringTags } from "./FilteringTags";

export function Tools() {
  const { allBrands } = useContext(BrandsContext);
  const [isTagsDisplayed, setIsTagsDisplayed] = useState(false);

  return <div className="flex items-center gap-4 p-4 flex-wrap lg:flex-nowrap">

    <button className="flex items-center gap-2 max-content h-10 px-2 border-2 rounded-md hover:bg-slate-200" onClick={allBrands}>
      <CubeTransparentIcon className="h-6 w-6" />
      <p>Remove filters</p>
    </button>

    <div className="h-10 border-2 rounded-md leading-9 hover:bg-slate-200 relative">
      <button className="w-full px-2" onClick={() => setIsTagsDisplayed(prev => !prev)}>Tags</button>
      {isTagsDisplayed && <FilteringTags />}
    </div>

    <button className="h-10 px-2 border-2 rounded-md leading-9 text-slate-300 hover:bg-slate-200">
      Desk
    </button>

    <button className="flex items-center gap-2 max-content h-10 px-2 border-2 rounded-md text-slate-300 hover:bg-slate-200">
      <AdjustmentsVerticalIcon className="h-6 w-6" />
      <p>Sort</p>
    </button>

    <button className="flex items-center gap-2 max-content h-10 px-2 border-2 rounded-md text-slate-300 hover:bg-slate-200">
      <AdjustmentsHorizontalIcon className="h-6 w-6" />
      <p>Filter</p>
    </button>

    <button className="flex items-center gap-2 max-content h-10 px-2 border-2 rounded-md lg:ml-auto text-slate-300 hover:bg-slate-200">
      <VideoCameraIcon className="h-6 w-6" />
      <p>Meeting</p>
    </button>

    <button className="flex items-center gap-2 max-w-content h-10 px-2 border-2 rounded-md text-slate-300 hover:bg-slate-200">
      <InboxStackIcon className="h-6 w-6" />
      <p>Import/Export</p>
    </button>
  </div>
}
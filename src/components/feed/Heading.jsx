import { useContext, useEffect, useState } from "react";
import { Cog6ToothIcon, DocumentDuplicateIcon, MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";

import { BrandsContext } from "../../contexts/BrandsContext";

export function Heading() {
  return <div className="flex flex-wrap md:flex-nowrap gap-4 p-4 border-b-2 items-center">
    <h2 className="font-bold text-xl">Products</h2>
    <Searchbar />
    <DocumentDuplicateIcon className="h-8 w-8 p-1 border-2 rounded-md" />
    <Cog6ToothIcon className="h-8 w-8 p-1 border-2 rounded-md" />
  </div>
}

function Searchbar() {
  const [search, setSearch] = useState("");
  const { searchBrands } = useContext(BrandsContext);

  useEffect(function () {
    searchBrands(search)
  }, [search])

  return <div className="relative md:ml-auto">
    <MagnifyingGlassCircleIcon className="absolute left-2 h-4 w-4 top-1/2 translate-y-[-50%]" />
    <input type="text" value={search} onChange={e => setSearch(e.target.value)} className="text-slate-500 border-2 rounded-md pl-8 py-1 focus:outline-none" placeholder="search for" />
  </div>
}
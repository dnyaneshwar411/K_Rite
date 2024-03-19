import { useContext } from "react"
import { BrandsContext } from "../../contexts/BrandsContext"
import { Categories } from "./Categories"
import { UserImages } from "./UserImages"
import { Tags } from "./Tags"
import { NextMeeting } from "./NextMeeting"

export function Brands() {
  const { displayedBrands, toggleSelected } = useContext(BrandsContext)
  return <>
    {
      displayedBrands.map(brand => <tr key={brand.id} className={`${brand.selected ? "bg-slate-100" : ""}`}>
        <td className="cursor-default">
          <div className="flex items-center">
            <input type="checkbox" className="cursor-pointer" checked={brand.selected} onChange={() => toggleSelected(brand.id)} />&nbsp;
            <img src={brand.logo} className="w-6 h-6 ml-4 mr-1 rounded-md object-cover" alt="" />
            {brand.name}
          </div>
        </td>
        <td className="whitespace-no-wrap">{brand.description}</td>
        <td className="relative"><UserImages images={brand.members} /></td>
        <td><Categories categories={brand.categories} /></td>
        <td className="overflow-hidden"><Tags tags={brand.tags} /></td>
        <td><NextMeeting timing={brand.scheduledMeeting} /></td>
        <td></td>
      </tr >)
    }
  </>
}
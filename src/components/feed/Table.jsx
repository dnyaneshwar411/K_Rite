import { useContext } from "react"
import { BrandsContext } from "../../contexts/BrandsContext"
import { Brands } from "./Brands"

export function Table() {
  const { totalLength } = useContext(BrandsContext)

  return <table className="block xl:table overflow-x-auto select-none">
    <thead>
      <tr>
        <th>Brand</th>
        <th>Description</th>
        <th>Members</th>
        <th>Categories</th>
        <th>Tags</th>
        <th>Next Meeting</th>
        <th>+</th>
      </tr>
    </thead>
    <tbody>
      <Brands />
      <tr className="text-right">
        <td>{totalLength} count</td>
        <td>+ Add calculation</td>
        <td>+ Add calculation</td>
        <td>+ Add calculation</td>
        <td>+ Add calculation</td>
      </tr>
    </tbody>
  </table>
}
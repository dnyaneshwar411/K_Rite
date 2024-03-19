import { files } from "../../data/data";
import { Entries } from "./Entries";

export function Folders() {
  return <div className="grow overflow-y-auto my-4 px-2">
    <div className="flex text-slate-500 items-center font-semibold">
      <h2 className="uppercase">Folders</h2>
      <button className="ml-auto text-2xl">&#43;</button>
    </div>
    <Entries {...files} />
  </div>
}
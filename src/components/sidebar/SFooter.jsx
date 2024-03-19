import { QuestionMarkCircleIcon, UserPlusIcon } from "@heroicons/react/24/outline";

export function SFooter() {
  return <div className="absolue bottom-2 ">
    <div className="flex items-center gap-2 py-2 pl-2">
      <UserPlusIcon className="w-6 h-6 " />
      <p>Invite Members</p>
    </div>
    <div className="flex items-center gap-2 py-2 pl-2">
      <QuestionMarkCircleIcon className="w-6 h-6 " />
      <p>Help and first steps</p>
    </div>
    <div className="flex items-center bg-slate-200 rounded-xl pr-2 py-1">
      <div className="text-sm m-2 p-1 px-2 bg-white rounded-md">7</div>
      <p>days left on trial</p>
      <button className="bg-black ml-auto text-white p-2 text-sm rounded-xl">Add billing</button>
    </div>
  </div>
}
import { CodeBracketIcon, CommandLineIcon, PencilIcon, PlusCircleIcon, SpeakerWaveIcon } from "@heroicons/react/24/outline";

export function Teams() {
  return <div className="py-2 border-2 rounded-xl">
    <div className="px-2">
      <button className="w-full flex items-center gap-2 px-2 py-1 my-1 rounded-xl hover:bg-slate-200">
        <PencilIcon className="w-6 h-6" />
        <p className="font-semibold mr-auto">Design team</p>
        <div className="bg-slate-100 p-1 flex items-center rounded-md">
          <CommandLineIcon className="w-5 h-5" />&nbsp;<span> + 1</span>
        </div>
      </button>

      <button className="w-full flex items-center gap-2 px-2 py-1 my-1 rounded-xl hover:bg-slate-200">
        <SpeakerWaveIcon className="w-6 h-6" />
        <p className="font-semibold mr-auto">Marketing team</p>
        <div className="bg-slate-100 p-1 flex items-center rounded-md">
          <CommandLineIcon className="w-5 h-5" />&nbsp;<span> + 2</span>
        </div>
      </button>

      <button className="w-full flex items-center gap-2 px-2 py-1 my-1 rounded-xl hover:bg-slate-200">
        <CodeBracketIcon className="w-6 h-6" />
        <p className="font-semibold mr-auto">Development team</p>
        <div className="bg-slate-100 p-1 flex items-center rounded-md">
          <CommandLineIcon className="w-5 h-5" />&nbsp;<span> + 3</span>
        </div>
      </button>
    </div>
    <button className="w-full flex items-center gap-2 text-slate-500 border-t-2 px-4 pt-3 pb-2">
      <PlusCircleIcon className="w-6 h-6" />
      <p>Create a team</p>
    </button>
  </div>
}
import { FolderIcon } from "@heroicons/react/24/outline";
import { FolderOpenIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import { Entries } from "./Entries";

export function Entry({ name, children }) {
  const [isOpen, setIsOpen] = useState(false);
  function toggleOpen() {
    setIsOpen(prev => !prev);
  }

  return <div>
    <button className="w-full font-semibold flex items-center gap-1 py-1 pl-2 pr-1 rounded-md hover:bg-slate-100">
      {children && isOpen && <FolderIcon className="h-4 w-4" />}
      {children && !isOpen && <FolderOpenIcon className="h-4 w-4" />}
      {name}
      {children && <span className="ml-auto text-2xl text-slate-500" onClick={toggleOpen}>
        {isOpen ? <>&#8722;</> : <>&#43;</>}
      </span>}
    </button>
    {isOpen && <div className="pl-4">
      {children && <Entries children={children} />}
    </div>}
  </div>
}
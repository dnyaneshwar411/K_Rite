import { PencilIcon, SpeakerWaveIcon, CodeBracketIcon, CommandLineIcon, PlusCircleIcon, UserPlusIcon, QuestionMarkCircleIcon, Bars3Icon, XMarkIcon, FolderIcon } from "@heroicons/react/24/outline";
import { FolderOpenIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { files } from "../data/data";
import { Profile } from "./sidebar/Profile";
import { Teams } from "./sidebar/Teams";
import { Folders } from "./sidebar/Folders";
import { SFooter } from "./sidebar/SFooter";

const menuStyle = "bg-slate-200 w-10 h-10 p-2 fixed left-5 bottom-8 cursor-pointer rounded-md z-20";

export default function Sidebar() {
  const [isToggled, setIsToggled] = useState(false);

  function toggleSidebar() {
    setIsToggled(prev => !prev);
  }

  return <>
    <span onClick={toggleSidebar} className="lg:hidden">
      {isToggled ?
        <XMarkIcon className={menuStyle} /> :
        <Bars3Icon className={menuStyle} />
      }
    </span>
    <div className={`lg:min-w-80 flex flex-col absolute ${isToggled ? "left-4" : "left-[-100%]"} top-4 lg:static border-2 rounded-xl p-3 h-screen z-10 bg-white duration-300  ease-in`}>
      <Profile />
      <Teams />
      <Folders />
      <SFooter />
    </div>
  </>
};
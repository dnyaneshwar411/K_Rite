import { useContext, useState } from "react";
import { BrandsContext } from "../../contexts/BrandsContext";
import { TrashIcon, WrenchScrewdriverIcon, XMarkIcon } from "@heroicons/react/24/outline";

export function Actions() {
  const { selectedLength, deleteSelected } = useContext(BrandsContext);
  const [isDisplayed, setIsDisplayed] = useState(true)

  if (selectedLength === 0) {
    return;
  }

  return <div className="max-w-content text-[12px] fixed bottom-10 translate-x-[-50%] left-1/2 flex items-center gap-2 md:gap-4 py-2 px-4 border-2 rounded-md z-10">
    {isDisplayed &&
      <>
        <div className="w-max-content">
          <span className="text-white bg-black px-3 py-2 rounded-md">{selectedLength}</span>&nbsp;
          selected
        </div>
        {/* <div className="flex items-center p-2 border-2 rounded-md cursor-pointer"><ArchiveBoxArrowDownIcon className="h-4 w-4" /> Archive</div> */}
        <button className="flex items-center p-2 border-2 rounded-md" onClick={deleteSelected}><TrashIcon className="h-4 w-4 text-red-500" /> Delete</button>
        {/* <div className="flex items-center p-2 border-2 rounded-md cursor-pointer"> More</div> */}
        <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={() => setIsDisplayed(false)} />
      </>
    }
    {!isDisplayed &&
      <span onClick={() => setIsDisplayed(true)}>
        <WrenchScrewdriverIcon className="h-6 w-6 cursor-pointer" />
      </span>
    }
  </div>
}
export function Profile() {
  return <div className="flex items-center gap-2 mb-4">
    <div className="bg-black w-10 h-10 rounded-md"></div>
    <div className="mr-auto">
      <p className="text-slate-300 text-sm">INC</p>
      <p className="text-bold">InnovateHub</p>
    </div>
    <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/C597/production/_131938505_ind3bc40c5f1c10d4248e6bf848ae7033c8814005e9-1.jpg" alt="person image" className="w-10 h-10 rounded-full object-cover" />
  </div>
}
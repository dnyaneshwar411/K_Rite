export function Tags({ tags }) {
  return <>
    {tags.map((tag, index) => <span key={index} className="bg-slate-50 px-2 py-1 rounded-md border-2 mr-2">{tag}</span>)}
  </>
}
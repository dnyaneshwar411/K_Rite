import { Entry } from "./Entry";

export function Entries({ children }) {
  return <div>
    {children.map((folder, index) => <div key={index}>
      <Entry {...folder} />
    </div>)}
  </div>
}
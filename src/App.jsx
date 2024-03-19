import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import { BrandsProvider } from "./contexts/BrandsContext";

export default function App({ }) {

  return (
    <main className="lg:flex lg:gap-4 p-4 items-start relative">
      <Sidebar />
      <BrandsProvider>
        <Feed />
      </BrandsProvider>
    </main>
  )
}
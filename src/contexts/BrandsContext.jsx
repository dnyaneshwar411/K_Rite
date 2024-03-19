import { createContext, useState } from "react";
import { brands } from "../data/data";

export const BrandsContext = createContext();

export function BrandsProvider({ children }) {
  const [displayedBrands, setDisplayedBrands] = useState(brands);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const totalLength = displayedBrands.length;
  const selectedLength = selectedBrands.length;

  function toggleSelected(id) {
    setDisplayedBrands(prev => prev.map(item => item.id === id ? { ...item, selected: !item.selected } : item));
    editSelectedList(id);
  }

  function editSelectedList(id) {
    setSelectedBrands(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id])
  }

  function deleteSelected() {
    setDisplayedBrands(prev => prev.filter(brand => !selectedBrands.includes(brand.id)));
    setSelectedBrands([])
  }

  function searchBrands(str) {
    if (str.length === 0) setDisplayedBrands(brands)
    setDisplayedBrands(prev => brands.filter(brand => brand.name.toLowerCase().includes(str.toLowerCase())))
  }

  function allBrands() {
    setDisplayedBrands(brands);
    setSelectedBrands([]);
  }

  function filterByTags(tag) {
    setDisplayedBrands(prev => brands.filter(brand => brand.tags.includes(tag)));
  }

  return <BrandsContext.Provider value={{ displayedBrands, toggleSelected, totalLength, selectedLength, deleteSelected, searchBrands, allBrands, filterByTags }}>
    {children}
  </BrandsContext.Provider>
}
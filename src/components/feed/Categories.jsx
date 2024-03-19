export function Categories({ categories }) {
  return <>
    {categories.map((category, index) => <span key={index} className={`${category.color} ${category.bgColor} px-2 py-1 rounded-md text-sm`}>{category.title}</span>)}
  </>
}
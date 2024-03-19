export function UserImages({ images }) {
  return <div className="">
    {images.map((image, index) => <img key={index} src={image} className={`w-7 h-7 border-2 border-black rounded-2xl absolute top-1/2 translate-y-[-50%]`} style={{ left: `${(index * 15) + 10}px` }} />)}
  </div>
}
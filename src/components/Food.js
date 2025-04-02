export default function Food({food}){
  return(
        <img className="h-40 w-40" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+food?.imageId} />
  )
}
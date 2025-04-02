export default function ButtonHead({food}){
    return(
      <img className="h-50 w-50" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+food?.imageId} />
    )
  }
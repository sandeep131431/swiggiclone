import { useSelector } from "react-redux"


export default function Checkout(){
    const item= useSelector(state =>state.cartslice.item);
    console.log(item);
    return (
        <>
        <div>
           {
            item.map((val)=>{
              return ( <>
                <div className="flex mt-[2vw] ml-[13vw] mb-[1vw] font-normal">
                    <div className="w-[70%] text-xl">
                        <p className="text-xl font-bold mb-2">{val?.card?.info?.name}</p>
                        <p className="text-xl font-medium">{"₹" + ("defaultPrice" in val?.card?.info ? (val.card.info.defaultPrice / 100) : (val?.card?.info?.price / 100))}</p>
                        <span className="text-green-600 font-medium">{val?.card?.info?.ratings?.aggregatedRating?.rating}</span>
                        <span>{"("+val?.card?.info?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
                        <p className="text-[1vw] mt-2">{val?.card?.info?.description}</p>
                    </div>
                    <div className="w-[30%] p-3  relative">
                        <img className="h-40 w-40 rounded-2xl object-cover" src={"https://media-assets.swiggy.com/"+val?.card?.info?.imageId}></img>
                    </div>
                </div>
                <hr className="w-[70%] ml-[13vw]"></hr>
                </>)
            })
           }
        </div>
        </>
    )
}
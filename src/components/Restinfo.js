import { useState } from "react";
import {addItems,IncrimentItems,DecrementItems} from "../Store/CardSlicer"
import { useDispatch } from "react-redux";

export default function Restinfo({val}){
    const [count,setcount]=useState(0);
    const dispatch  = useDispatch();

    function handleaddItems(){
         setcount(1);
         dispatch(addItems(val));
    }
    function handleaddIncrement(){
        setcount(count+1);
        dispatch(IncrimentItems(val));
    }
    function handleaddDecrement(){
        setcount(count-1);
        dispatch(DecrementItems(val));
    }
    return (
        <>
        <div className="flex mt-[1vw] mb-[1vw] font-normal">
            <div className="w-[70%] text-xl">
                <p className="text-xl font-bold mb-2">{val?.card?.info?.name}</p>
                <p className="text-xl font-medium">{"₹" + ("defaultPrice" in val?.card?.info ? (val.card.info.defaultPrice / 100) : (val?.card?.info?.price / 100))}</p>
                <span className="text-green-600 font-medium">{val?.card?.info?.ratings?.aggregatedRating?.rating}</span>
                <span>{"("+val?.card?.info?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
                <p className="text-[1vw] mt-2">{val?.card?.info?.description}</p>
            </div>
            <div className="w-[30%] p-3  relative">
                <img className="h-40 w-40 rounded-2xl object-cover" src={"https://media-assets.swiggy.com/"+val?.card?.info?.imageId}></img>
                {(count==0)? <button className=" absolute text-green-600 bottom-2 left-10 border-1 bg-white border-gray-500 pl-5 pr-5 rounded-[5px] " onClick={()=>handleaddItems()}>ADD</button>:
                <div className="flex gap-2 bg-white justify-center absolute items-center border-1 bottom-2 left-10">
                  <button className=" w-[1.6vw] bg-green-400" onClick={()=>handleaddDecrement()}>-</button>
                  <span >{count}</span>
                  <button className=" w-[1.6vw] bg-green-400" onClick={()=>handleaddIncrement()}>+</button>
                </div>}
            </div>
        </div>
        <hr className="w-[85%]"></hr>
        </>
    )
}
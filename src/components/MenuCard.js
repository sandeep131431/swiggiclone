import { useState } from "react";
import Restinfo from "./Restinfo";

export default function MenuCard({menuitems,foodselected}){
     const [isopen,setisopen]=useState(true);
    if("Categories" in menuitems){
      return(
        <div className="w-full">
           <p>{menuitems.title}</p>
           {
            menuitems.categories.map((item)=><MenuCard key={item?.title} val={item}></MenuCard>)
           }
        </div>
      )
    }
    if(!isopen){
      return (
        <>
        <div className="w-[80%] flex justify-between">
         <p className="text-3xl mt-2">{menuitems.title}</p>
        <button onClick={()=>setisopen(!isopen)}>{isopen?'˄':"˅"}</button>
        </div>
        <div className="h-5 bg-gray-200 w-[85%] mt-4"></div>
        </>
      )
    }
   
    if(foodselected==='veg'){
      return(
        <div className="w-full">
          <div className="w-[80%] flex justify-between">
          <p className="text-3xl mt-2">{menuitems.title}</p>
          <button onClick={()=>setisopen(!isopen)}>{isopen?'˄':"˅"}</button>
          </div>
           {
             menuitems?.itemCards?.filter((food)=>"isVeg" in food?.card?.info).map((val)=><Restinfo key={val?.itemCards?.card?.info?.id} val={val}></Restinfo>)
           }
           <div className="h-5 bg-gray-200 w-[85%] mt-4"></div>
          </div>
      )
    }
    if(foodselected==='nonveg'){
      return(
        <div className="w-full">
          <div className="w-[80%] flex justify-between">
          <p className="text-3xl mt-2">{menuitems.title}</p>
          <button onClick={()=>setisopen(!isopen)}>{isopen?'˄':"˅"}</button>
          </div>
           {
             menuitems?.itemCards?.filter((food)=>!("isVeg" in food?.card?.info)).map((val)=><Restinfo key={val?.itemCards?.card?.info?.id} val={val}></Restinfo>)
           }
           <div className="h-5 bg-gray-200 w-[85%] mt-4"></div>
          </div>
      )
    }

    return (
          <div className="w-full">
          <div className="w-[80%] flex justify-between">
          <p className="text-3xl mt-2">{menuitems.title}</p>
          <button onClick={()=>setisopen(!isopen)}>{isopen?'˄':"˅"}</button>
          </div>
           {
             menuitems?.itemCards?.map((val)=><Restinfo key={val?.itemCards?.card?.info?.id} val={val}></Restinfo>)
           }
           <div className="h-5 bg-gray-200 w-[85%] mt-4"></div>
          </div>
    )
}
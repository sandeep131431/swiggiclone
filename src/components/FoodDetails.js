import imageGridCards from "../utils/FoodData";
import Food from "./Food";

export default function FoodDetails(){
   return(
    <>
    <h1 className="ml-50 mt-20 text-2xl font-bold">Best FastFood Here</h1>
    <div className="w-[80%] container mx-[10vw] flex flex-wrap mt-5 gap-3 pl-10">
        {imageGridCards.map((code)=><Food key={code.id} food={code}></Food>)}
    </div>
    
    </>
   )
}
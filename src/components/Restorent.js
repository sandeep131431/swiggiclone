import restaurants  from "../utils/RestorentData";
import Rest from "./Rest";

export default function Restorent(){
  return (
    <>
    <h1 className="ml-50 mt-20 text-2xl font-bold">Discover best restaurants on Dineout</h1>
    <div className=" w-[90%] container mx-50 flex flex-nowrap overflow-x-auto mt-5 gap-5" >
        {
         restaurants.map((data)=><Rest key={data?.info?.id} resto = {data} ></Rest>)   
        }
    </div>

    </>
  )
}
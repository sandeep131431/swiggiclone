import { useEffect, useState } from "react";
import NewRest from "./NewRest";
import Semar from "./Semar";
import imageGridCards from "../utils/FoodData";
import ButtonHead from "./ButtonHead";
import PageHeader from "./PageHeader";


export default function NewPage(){

    const [RestData, setRestData] = useState([]);
    
    async function fetchData() {
       const procy = "https://cors-anywhere.herokuapp.com/" ;
       const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
       
       const response  = await fetch(procy+swiggyAPI);
       const data = await response.json();
       setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(()=>{
        fetchData();
    },[])

    if(!RestData.length){
        return(
            <Semar></Semar>
        )
    }

    return (
        <>
        <PageHeader></PageHeader>
        
        <h1 className="text-3xl font-bold ml-20 mt-[1vw]">What's on your mind?</h1>
        <div className="flex w-[90%] bg-amber-10 m-auto mt-3  overflow-x-scroll scrollbar-hide"  >
            {
                imageGridCards.map((value)=><ButtonHead key={value?.id} food={value}></ButtonHead>)
            }
        </div>

       <h1 className="text-3xl font-bold ml-20 mt-[3vw]">Restaurants with online food delivery in Delhi</h1>
       <div className="w-[95%] flex flex-wrap mx-20 mt-13 gap-9">
        { 
          RestData.map((value)=><NewRest key={value?.info?.id} value={value}></NewRest>)
        }
        
       </div>
       </>
    )
}
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";
import PageHeader from "./PageHeader";


export default function Restmenu() {
    let { id } = useParams();
    const [data, setData] = useState([]);
    const [selected,setselected]= useState(null);

    async function fetchData() {
            let procy = "https://cors-anywhere.herokuapp.com/";
            let res = await fetch(procy+`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.22540&lng=84.86840&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
            let json = await res.json();
            const temp = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const fildata = temp.filter((item)=>'title' in item?.card?.card);
            setData(fildata);
    }
 
    useEffect(() => {
        fetchData();
    },[]);
    
    return (
        <div>
         <PageHeader></PageHeader>
        <button className={` pl-3 pr-3 text-xl ml-[23vw] p-1 mt-10 mb-1 rounded-xl ${selected==='veg'?"bg-green-500":"bg-gray-200"}`} onClick={()=>setselected(selected==='veg'?null:'veg')}>Veg</button>
        <button className={` pl-3 pr-3 text-xl ml-[1vw] p-1 mt-10 mb-1 rounded-xl ${selected==='nonveg'?"bg-red-500":"bg-gray-200"}`} onClick={()=>setselected(selected==='nonveg'?null:'nonveg')}>NonVeg</button>
       
       <div className="w-[80%] ml-[20vw]  text-2xl font-bold">
        {
         data.map((item)=><MenuCard key={item?.card?.card?.title} menuitems={item?.card?.card} foodselected = {selected}></MenuCard>)
        } 
       </div>
       </div>
    );
}

import { Link } from "react-router";
import NewPage from "./NewPage";

function Header(){
  return (
    <header className="bg-[#ff5200]">
        <div className="flex justify-between container mx-auto py-10">
            <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"/>
            <div className="text-[16px] flex gap-10 items-center text-white font-bold">
                <a href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate</a>
                <a target="blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                <a className=" border rounded-2xl p-3 text-white" target="blank" href="#">Get the App</a>
                <a target="blank" className=" rounded-2xl p-3 text-white bg-black">Sign in</a>
            </div>
        </div>

        <div className="relative mt-20">
        <img className="absolute left-0 h-112 w-60" src="http://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"/>
        <img  className="absolute right-0 h-112 w-60"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"/>
         <div className="text-[48px] w-[40%] container mx-auto text-center mt-10 flex text-white leading-12">
          Order food. Discover best restaurants. Swiggy it!
         </div>
        <div className="w-[50%] container mx-auto text-center mt-10 flex gap-5" >
           
         <input className="bg-white px-4 py-5 w-[60%] rounded-2xl" type="text" placeholder="Uttarakhand india"></input>
         <input className="bg-white px-4 py-5 w-[90%] rounded-2xl" type="text" placeholder="Search for restaurant, item or more"></input>
        </div>
        </div>


        <div>
  <div className="w-[75%] ml-65 mt-20 flex gap-4">
    <Link className="w-[320px] h-[300px] block" to={"restorent"}>
      <img className="w-full h-full object-cover" 
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"/>
    </Link>
    <img className="w-[320px] h-[300px] object-cover" 
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"/>
    <img className="w-[320px] h-[300px] object-cover" 
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"/>
    <img className="w-[320px] h-[300px] object-cover" 
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"/>
  </div>
</div>

    </header>
  )  
}

export default Header;
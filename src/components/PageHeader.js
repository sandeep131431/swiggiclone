import { useSelector } from "react-redux"
import { Link } from "react-router"

export default function PageHeader(){
    const counter = useSelector(state=>state.cartslice.item)
    return(
        <div className=" bg-gray-400  w-[100%] h-20 flex justify-center gap-200 items-center sticky top-0 z-20">
            <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"/>
            <div className="font-medium text-black text-2xl flex gap-10">
                <a>Swiggy Corporate</a><a>Search</a><a>Offers</a><a>Sign In</a> <Link to="/checkout">Cart {counter.length}</Link>    
            </div>
        </div>
    )
}
export default function Rest({resto}){
    return (
        <>
        <div className="flex-none relative h-60 bg-cyan-200 rounded-xl">
          <img className="h-40 w-80 rounded-xl"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+resto?.info?.mediaFiles[0]?.url}/>
          <div className="absolute bottom-20 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
          <p className="absolute bottom-20 left-2 font-bold z-10 text-white">{resto?.info?.name}</p>
          <p className="absolute bottom-20 right-2 font-bold z-10 text-white">{resto?.info?.rating.value}</p>
          <button className="bg-green-500 ml-4 rounded-2xl p-3 mt-3 w-[90%]">BUY FROM OUR HOTEL</button>
          <div></div>
        </div>

        </>
    )
}
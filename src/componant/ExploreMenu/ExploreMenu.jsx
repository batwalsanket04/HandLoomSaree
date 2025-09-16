import React from 'react'
import menuimg from '../../assets/hero3.jpg'

const ExploreMenu = ({category,setCategory}) => {

 const ExploreMenu=[
    {   
        menuName:"Jari",
        Menuimg:menuimg
    },
    {   
        menuName:"All-Over",
        Menuimg:menuimg
    },
    {   
        menuName:"Muniya",
        Menuimg:menuimg
    },
    {   
        menuName:"Butti",
        Menuimg:menuimg
    },
    {   
        menuName:"Pickock",
        Menuimg:menuimg
    },
    {   
        menuName:"Lehenga",
        Menuimg:menuimg
    },
    {   
        menuName:"Dupatta",
        Menuimg:menuimg
    },
     {   
        menuName:"Piece",
        Menuimg:menuimg
    }



 ]
  return (
    
        <div className='w-[99%] m-auto'>
             <h1 className="text-2xl text-justify p-3 w-full  sm:text-2xl sm:mt-[50px]  md:text-6xl md:mt-[20px] lg:text-4xl xl:text-5xl xl:mt-20 font-bold text-pink-600 drop-shadow-lg 
              2xl:text-7xl ">
    Explore our collection
  </h1>
  <p className="  text-base sm:text-lg max-w-[100%] mx-auto sm:mx-0 mb-6 leading-relaxed text-justify p-3 text-gray-700">
   Explore our collection of crafted pieces made to match your style and story.
  </p>   
 <div className="explore-list flex flex-wrap cursor-pointer items-center text-center overflow-scroll justify-between gap-6 p-4">
  {ExploreMenu.map((val, index) => (
    <div
      key={index}
      onClick={() => setCategory(val.menuName)}  
      className={`w-[150px] text-center 
        sm:w-1/5 sm:max-w-1/2 md:min-w-1/5 md:max-w-1/5 lg:min-w-1/10 xl:max-w-1/10 
        bg-white shadow-md rounded-2xl overflow-hidden transition duration-300
        ${category === val.menuName ? "border-2 border-pink-600 shadow-lg" : " "} 
      `}
    >
      <img
        src={val.Menuimg}
        alt={val.menuName}
        className="w-full h-25 object-cover"
      />
      <div className="p-4 text-center">
        <p className="font-semibold text-lg">{val.menuName}</p>
      </div>
    </div>
  ))}
</div>


        </div>
      
   
  )
}

export default ExploreMenu

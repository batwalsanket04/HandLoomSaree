 import React, { createContext, useEffect, useState } from 'react'
 import { SareeList2 } from '../assets/assets'
 
 export const context=createContext(null)

 const StoreContext = ({children}) => {

  const [cartItem,setCartItem]=useState({});

  const addToCart=(itemId)=>
  {
    if(!cartItem[itemId]){
      setCartItem((prev)=>({...prev,[itemId]:1}))
    }else
    {
      setCartItem((prev=>({...prev,[itemId]:prev[itemId]+1})))
    }
  }

  const removeFromCart=(itemId)=>
  {
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

    const contextValue={
      SareeList2,cartItem,setCartItem,addToCart,removeFromCart
    }
  
  useEffect(()=>{
    console.log(cartItem);
  },[cartItem])

   return (
     <div>
        <context.Provider value={contextValue}>
              {children}
        </context.Provider>
       
     </div>
   )
 }
 
 export default StoreContext
 
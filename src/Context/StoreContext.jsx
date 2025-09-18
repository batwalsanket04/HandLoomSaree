 import React, { createContext } from 'react'
 import { SareeList2 } from '../assets/assets'
 
 export const context=createContext(null)

 const StoreContext = (props) => {

    const contextValue={
      SareeList2,
    }

   return (
     <div>
        <context.Provider value={contextValue}>
              {props.children}
        </context.Provider>
       
     </div>
   )
 }
 
 export default StoreContext
 
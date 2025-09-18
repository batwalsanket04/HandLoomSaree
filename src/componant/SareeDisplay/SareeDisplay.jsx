import React, { useContext } from 'react'
import {context} from '../../Context/StoreContext'

const SareeDisplay = ({category}) => {
 const {SareeList2}=useContext(context)
  return (

    <div className=''>
      <h2>Top Saree's Near You</h2>
      <div>
        {
          SareeList2.map((val,index)=>{
            
          })
        }
      </div>
    </div>
  )
}

export default SareeDisplay

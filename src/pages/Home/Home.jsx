import React, { useState } from 'react'
import Header from '../../componant/Header/Header'
import ExploreMenu from '../../componant/ExploreMenu/ExploreMenu'

const Home = () => {
  const [category,setCategory]=useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  )
}

export default Home

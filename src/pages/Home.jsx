import React from 'react'
import Carousel from '../Component/Carousel'
import About from './About'
import TrendingProducts from '../Component/TrendingProducts'

function Home() {
  return (

    <div>
      <Carousel />
      <About/>
      <TrendingProducts/>
    </div>

  )
}

export default Home
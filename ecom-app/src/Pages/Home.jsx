import React from 'react'
import Header from '../Components/Header'
import Carousel from '../Components/Carousel'
import WayfairProductList from './Test'
import BestSellingItems from './BestSellingItems'

const Home = () => {
  return (
    <div>
        <Header/>
        <Carousel/>
        <BestSellingItems/>
        {/* <WayfairProductList/> */}
    </div>
  )
}

export default Home
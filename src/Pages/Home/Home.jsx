import React, { lazy, Suspense, useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
 const FoodDisplay = lazy(()=> import ( '../../components/FoodDisplay/FoodDisplay') )
import AppDownload from '../../components/AppDownload/AppDownload'
import Loader from '../../components/Loader/Loader'

const Home = () => {
  const [category,setCategory]=useState('All');
  return (
    <div>
      <Header/>
      <Suspense fallback={<Loader/>}></Suspense>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
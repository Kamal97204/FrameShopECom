import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeroBanner from './components/views/home/HeroBanner'
import FeaturedFramesCarousel from './components/views/home/FeaturedFramesCarousel'
import CustomFramingServiceCard from './components/views/home/CustomFramingServiceCard'
import TestimonialsSection from './components/views/home/TestimonialsSection'
import FrameSelectionHelper from './components/views/home/FrameSelectionHelper'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroBanner/>
      <FeaturedFramesCarousel/>
      <CustomFramingServiceCard/>
      <TestimonialsSection/>
      <FrameSelectionHelper/>
        </>
  )
}

export default App

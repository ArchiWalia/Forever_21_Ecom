import React from 'react'
import Navbar from './component/navbar/Navbar'
import Express from './component/express/Express'
import Hero from './component/hero/Hero'
import Collection from './component/collection/Collection'
import Recommend from './component/recomended/Recommend'
import Video from './component/video/Video'
import Shopping from './component/shopping/Shopping'
import Footer from './component/footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Express />
      <Hero />
      <Collection />
      <Recommend />
      <Video/>
      <Shopping />
      <Footer />

    </div>
  )
}

export default App

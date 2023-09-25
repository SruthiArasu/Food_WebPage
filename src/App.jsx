import react from 'react'
import Navbar from './component/nav'
import Hero from './component/head'
import HeadlineCards from './component/shopCards'
import Food from './component/Menu_Items'
import category from './component/category'

function App() {
  
  return (
      <div>
        <Navbar/>
        <Hero />
        <HeadlineCards />
        <Food />
        <category />
      </div>
        
  )
}

export default App

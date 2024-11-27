import React from 'react'
import Banner from './Components/Banner'
import Header from './Components/Header'
import Middle from './Components/middle'

const App = () => {
  return (
   <div className='bg-[#015845] min-h-screen px-14'>
    <Header/>
    <Banner/>
    <Middle/>
   </div>
  )
}

export default App
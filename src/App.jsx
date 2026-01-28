import React, { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import Dashboard from './Components/Dashboard'


const App = () => {
  const [activeModule,setActiveModule]= useState("patients")
  return (
    <div className='app-container'>

      <Sidebar setActiveModule={setActiveModule}/>

      <div className="main-content">

        <Navbar/>

        <div className="dashborad-container">

          <Dashboard activeModule={activeModule}/>

          
        </div>
      </div>
    </div>
  )
}

export default App

import React from 'react'
import "../Stylesheets/Sidebar.css"

const Sidebar = ({setActiveModule}) => {
  return (
    <div className='sidebar'>
        <button onClick={()=>setActiveModule("patients")}>Patients</button>
        <button onClick={()=>setActiveModule("appointments")}>Appointments</button>
        <button onClick={()=>setActiveModule("doctors")}>Doctors</button>
        <button onClick={()=>setActiveModule("medicine-shop")}>Buy Medicine</button>
        <button onClick={()=>setActiveModule("inventory")}>Inventory</button>
        <button onClick={()=>setActiveModule("Purchase History")}>Purchase History</button>
    </div>
  )
}

export default Sidebar

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_DOCTOR } from '../Redux/Constants'
import "../Stylesheets/DoctorForm.css";

const DoctorForm = () => {
    const dispacth= useDispatch()
    const [form,setForm]= useState({
        name:"", speciality:"", phone:"", email:"",startTime :"08-00",endTime :"10-00",fee:""
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(form.startTime >= form.endTime){ alert("End time must be after start time ") 
            return }
        dispacth({ type:ADD_DOCTOR , payload:{id :Date.now(),...form}})
        setForm({
        name:"", speciality:"", phone:"", email:"",startTime :"08:00",endTime :"10:00" })
        alert("Doctor added Successfully")
    } 

  return (
    <form className='doctor-form' onSubmit={handleSubmit}>
        <h2>Add Doctor</h2>
        <div className="form-group">
            <label>Doctor Name</label>
            <input type="text" placeholder='Doctor name' value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} required/>
        </div>

        <div className="form-group">
            <label>Speciality</label>
            <select value={form.speciality} onChange={(e)=>setForm({...form,speciality:e.target.value})} required>
                <option value="">--Select Speciality--</option>
                <option value="Cardiology">Cardiology</option>
                <option value="dermatology">dermatology</option>
                <option value="neurologistic">neurologistic</option>
                <option value="Orthology">Orthology</option>
                <option value="General">Genaral</option>
            </select>
        </div>

        <div className="form-group">
            <label>Phone</label>
            <input type="tel" placeholder='Phone-number' value={form.value} onChange={(e)=>setForm({...form,phone:e.target.value})} required />
        </div>

        <div className="form-group">
            <label>Email</label>
            <input type="text" placeholder='Email' value={form.value} onChange={(e)=>setForm({...form,email:e.target.value})} required/>
        </div>

        <div className="form-group">
            <label>Working hours start</label>
            <input type="time" value={form.startTime} onChange={(e)=>setForm({...form,startTime : e.target.value})} required />
        </div>

        <div className="form-group">
            <label>Working hours end</label>
            <input type="time" value={form.endTime} onChange={(e)=>setForm({...form,endTime : e.target.value})} required />
        </div>

        
      <div className="form-group">
        <label>Consultation Fee (₹)</label>
        <input type="number" placeholder="Consultation Fee" value={form.fee} onChange={(e) => setForm({ ...form, fee: Number(e.target.value) })} required min="0"/>
      </div>

        <button type='submit'>Add Doctor</button>
    </form>
  )
}

export default DoctorForm

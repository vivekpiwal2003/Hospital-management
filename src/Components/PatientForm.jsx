import React, { useState } from 'react'
import "../Stylesheets/App.css"
import { useDispatch } from 'react-redux'
import "../Stylesheets/PatientForm.css"
import { addPatient } from '../Redux/action'

const PatientForm = () => {
  const[form,setForm]= useState({name :"",age:"",gender:""})
  const dispacth= useDispatch();


  const handleSumbit=(e)=>{
    e.preventDefault();
    dispacth(addPatient({id : Date.now(),...form}));
    setForm({name :"",age:"",gender:""});}
  return (
    <form className='patient-form' onSubmit={handleSumbit}>
      <input type="text" placeholder='Name' value={form.name}  onChange={(e)=>setForm({...form, name:e.target.value})} required/>
      <input type="number" placeholder='Age' value={form.age}  onChange={(e)=>setForm({...form, age:e.target.value})} required/>
      <select value={form.gender} onChange={(e)=>setForm({...form, gender : e.target.value})} required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <button type='sumbit'>Add Patient</button>
    </form>
  )
}

export default PatientForm

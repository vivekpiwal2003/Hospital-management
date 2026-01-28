import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_APPOINTMENT } from '../Redux/Constants'
import BillGeneration from "./BillGeneration";
import "../Stylesheets/AppointmentList.css"


const AppointmentList = ({doctorfilter = null}) => {

    const dispacth= useDispatch()
    const appointments= useSelector((state)=>state.appointments)
    const patients= useSelector((state)=>state.patients)
    const doctors= useSelector((state)=>state.doctors)
    const[cancelConfirm,setCancelConfirm] =useState(null)
    const [billAppointment, setBillAppointment] = useState(null);


    const filteredAppointments= doctorfilter ? appointments.filter((apt)=> 
        apt.doctorId===doctorfilter) : appointments 

    const handleCancel=(id)=>{
        dispacth({type : DELETE_APPOINTMENT ,payload :id})
        setCancelConfirm(null)
        alert("Appointment cancelled Scuccesfully")}

    const getPatientname=(patientId)=>{
        const patient = patients.find((p)=>p.id===patientId)
        return patient? patient.name : "unknown" }

    const getDoctorname=(doctorId)=>{
        const doctor = doctors.find((d)=>d.id ===doctorId)
        return doctor ? doctors.name :"unknown"}

    const formatDate =(date)=>{return new Date(date).toLocaleDateString("en-IN")}

  return (
    
   <div className="appointment-list">
    <h2>{doctorfilter ?"Doctor's Appointments": "All Appointments"}</h2>
    {filteredAppointments.length === 0?(
        <p className='no-data'>{doctorfilter? "No appointments for this doctor" : "No appiontments booked yet"}</p>
    ):(
        <div className="appointment-cards">
            {filteredAppointments.map((apt)=>(

                <div className="appointment-card" key={apt.id}>
                    <div className="card-header">
                        <div className="patient-doctor">

                            <div className="info-group">
                                <label>Patient</label>
                                <p>{getPatientname(apt.patientId)}</p>
                            </div>
                            <div className="info-group">
                                 <label>Doctor</label>
                                <p>Dr. {getDoctorname(apt.doctorId)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="card-body">
                        <div className="appointment-details">
                            <div className="detail-item">
                                <span className='label'>Date :</span>
                                <span className='value'>{formatDate(apt.date)}</span>
                            </div>
                            <div className="detail-item">
                                <span className='label'>Time :</span>
                                <span className='value'>{apt.time}</span>
                            </div>
                            <div className="detail-item full-width">
                                <span className='label'>Reason :</span>
                                <span className='value'>{apt.reason}</span>
                            </div>
                        </div>
                    </div>

                    <div className="card-footer">
                        {cancelConfirm==apt.id?(
                            <div className="confirm-cancel">
                                <p>Are you sure</p>
                                <button className='btn-cancel' onClick={()=>handleCancel(apt.id)}> Yes,cancel</button>
                                <button className='btn-cancel-confirm' onClick={()=>setCancelConfirm(null)}> No,keep</button>
                            </div> ):(
                                <div className="actions-buttons">
                                    {!apt.visited ? (
                                    <button className="btn-generate-bill" onClick={()=>setBillAppointment(apt)}>Generate Bill</button>
                                    ) : (
                                        <span className="visited-badge">✓ Visited</span>)}
                                    <button className="btn-delete" onClick={() => setCancelConfirm(apt.id)}>Cancel</button>
                                </div>
                            )}
                    </div>
                </div>
            ))}
        </div>
    )}
    {billAppointment && (
    <BillGeneration appointment={billAppointment} onClose={() => setBillAppointment(null)}/>)}
   </div>
  )
}

export default AppointmentList

import React from 'react'
import "../Stylesheets/Patientslist.css"
import { DELTE_PATIENT } from '../Redux/Constants'
import { useDispatch, useSelector } from 'react-redux'

const PatientsList = () => {
  const dispacth= useDispatch()
  const patients= useSelector((state)=>state.patients)
  const handleDelete =(id)=>{ dispacth({ type : DELTE_PATIENT , payload : id})}
  return (
    <div className="patient-list">
      <h2>Patients Lists</h2>
      { patients.length ===0 ?(<p>No Patients Added yet</p>):
       ( <table><thead><tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Action</th>
                      </tr>
                </thead>
                <tbody>{patients.map((patient)=>(
                  <tr key={patient.id}>
                    <td>{patient.id}</td>
                    <td>{patient.name}</td>
                    <td>{patient.age}</td>
                    <td>{patient.gender}</td>
                    <td><button className='delete-btn' onClick={()=>handleDelete(patient.id)}>Delete</button></td>
                  </tr>
                ))}
                </tbody>
        </table>)
      }
    </div>
  )
}

export default PatientsList

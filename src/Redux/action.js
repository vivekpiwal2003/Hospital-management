import { ADD_PATIENT, DELTE_PATIENT } from "./Constants"

export const addPatient =(patient)=>({
    type: ADD_PATIENT,
    payload : patient
})
export const deletePatient=(id)=>({
    type:DELTE_PATIENT,
    payload:id
})
import { ADD_APPOINTMENT, ADD_BILL, ADD_DOCTOR, ADD_MEDICINE, ADD_PATIENT, ADD_PURCHASE_HISTORY, DELETE_APPOINTMENT, DELETE_BILL, DELETE_DOCTOR, DELETE_MEDICINE, DELTE_PATIENT, UPDATE_APPOINTMENT, UPDATE_MEDICINE,PURCHASE_HISTORY } from "./Constants";
import { intialState } from "./initialState";

 export  function reducerfn(state=intialState,action){
        switch(action.type){
            
            case ADD_PATIENT:
                const added = [...state.patients,action.payload];
                localStorage.setItem("patients",JSON.stringify(added));
                return {...state,patients:added};
            
            case DELTE_PATIENT :
                const filteredPatients =state.patients.filter((p)=>p.id !== action.payload);
                const filteredAppointmentsByPatient= state.appointments.filter((a)=> a.patientId !== action.payload)
                localStorage.setItem("patients",JSON.stringify(filteredPatients ));
                localStorage.setItem("appointments",JSON.stringify(filteredAppointmentsByPatient))
                return {...state,patients:filteredPatients,appointments:filteredAppointmentsByPatient};



            case ADD_APPOINTMENT : 
            const appointmentAdded =[...state.appointments,action.payload]
            localStorage.setItem("appointments",JSON.stringify(appointmentAdded))
            return{...state,appointments:appointmentAdded} 
            
            
            case UPDATE_APPOINTMENT:
            const updatedAppointments = state.appointments.map((a) => 
                         a.id === action.payload.id ? action.payload : a);
            localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
            return { ...state, appointments: updatedAppointments };

            
            
            case DELETE_APPOINTMENT : 
            const appointmentFiltered = state.appointments.filter((a)=>a.id==action.payload)
            localStorage.setItem("appointments",JSON.stringify(appointmentFiltered))
            return{...state,appointments:appointmentFiltered}
            
            
            case ADD_DOCTOR : 
            const doctorAdded =[...state.doctors,action.payload]
            localStorage.setItem("doctors",JSON.stringify(doctorAdded))
            return{...state,doctors:doctorAdded}  
             
            
            case DELETE_DOCTOR : 
            const doctorFiltered =state.doctors.filter((d)=>d.id == action.payload)
            localStorage.setItem("doctors",JSON.stringify(doctorFiltered))
            return{...state,doctors:doctorFiltered}  
                
            
            case ADD_MEDICINE : 
            const medicineAdded =[...state.medicines,action.payload]
            localStorage.setItem("medicines",JSON.stringify(medicineAdded))
            return{...state,medicines:medicineAdded}  
             

            
            case DELETE_MEDICINE : 
            const medicineFiltered =state.medicines.filter((m)=>m.id == action.payload)
            localStorage.setItem("doctors",JSON.stringify(medicineFiltered))
            return{...state,medicines:medicineFiltered}  
                

            
            case UPDATE_MEDICINE : 
            const updatedMedicines = state.medicines.map((m)=>m.id == action.payload.id ? action.payload : m )
            localStorage.setItem("medicines",JSON.stringify(updatedMedicines))
            return{...state,medicines:updatedMedicines}
            
            case ADD_BILL : 
            const billAdded =[...state.bills,action.payload]
            localStorage.setItem("bills",JSON.stringify(billAdded))
            return{...state,bills:billAdded}  
             
            
            case DELETE_BILL : 
            const billFiltered =state.bills.filter((b)=>b.id == action.payload)
            localStorage.setItem("bills",JSON.stringify(billFiltered))
            return{...state,bills:billFiltered}  

            
            case ADD_PURCHASE_HISTORY : 
            const historyAdded =[...state.purchaseHistroy,action.payload]
            localStorage.setItem("purchaseHistory",JSON.stringify(historyAdded))
            return{...state,purchaseHistroy:historyAdded}  
             


                

            

            default : return state ;

        }
 }
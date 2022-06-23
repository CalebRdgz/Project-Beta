import React, {useState} from "react";


function TechnicianForm(){
    const[technician, setTech] = useState({
        technician: "",
        employee_number: "",
        
    });

     // handles the change of the name and employee number

    const handleChange = (event) => {
        setTech({...technician, [event.target.name]: event.target.value});
    }

    // handles the submit 

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {...technician}
        console.log(data, "work pls");
        const technicianUrl= 'http://localhost:8080/api/technicians/'
        const fetchConfig ={
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(technicianUrl, fetchConfig);
        if (response.ok) {
            const newTechnician = await response.json();
            console.log(newTechnician)
            setTech({
                technician: "",
                employee_number: ""
            })
        } else {
            console.log(technician)
        }
    }
    return (
        <div className="my-5 container">
            <div className = "row">
                <div className='offset-3 col-6'>
                    <div className = "shadow p-4 mt-4">
                        <h1> Create A New Technician! </h1>
                        <form onSubmit={handleSubmit} id ="create-technician-form">
                            <div className="form-floating mb-3">
                                <input onChange={handleChange} type= "text" name= "technician" id ="technician" value={technician.technician} className="form-control"/>
                                    <label htmlFor='technician'>Technician's Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleChange} type= "text" name= "employee_number" id ="employee_number" value={technician.employee_number} className="form-control"/>
                                    <label htmlFor='technician'>Employee Number</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnicianForm;
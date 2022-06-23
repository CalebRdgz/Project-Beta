function AppointmentList(appointments) {
    const completed = async (event) => {
        console.log(event.currentTarget.id)
        const value = event.currentTarget.id;
        const url = `http://localhost:8080/api/appointments/completed/${value}/`
        const fetchConfig = {
            method: "put",
            headers: {
                "Content-Type": "application/json" 
            }
        }
        const response = await fetch(url, fetchConfig);
        if (response.ok){
            console.log("Success")
        }
        else {
            console.log("Failed")
        }
    }
    const canceled = async (event) => {
        console.log(event.currentTarget.id)
        const value = event.currentTarget.id;
        const url = `http://localhost:8080/api/appointments/cancelled/${value}/`
        const fetchConfig = {
            method: "put",
            headers: {
                "Content-Type": "application/json" 
            }
        }
        const response = await fetch(url, fetchConfig);
        if (response.ok){
            console.log("Cancelled")
        }
        else {
            console.log("Failed")
        }
    }
    

    return (
        <table className="my-5 table table-striped">
            <thead>
                <tr>
                    <th>Vip</th>
                    <th>Vin</th>
                    <th>Customer Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                    <th>Status</th>
                    
                </tr>
            </thead>
            <tbody>
                {appointments.appointments.map(appointment => {
                    return (
                        <tr key={appointment.href}>
                            <td>{appointment.vip}</td>
                            <td>{appointment.vin}</td>
                            <td>{appointment.customer}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.time}</td>
                            <td>{appointment.technician.technician}</td>
                            <td>{appointment.reason}</td>
                            <td>{appointment.status.name}</td>
                            <td><button type="button" class="btn btn-success" onClick={completed} id={appointment.id} key ={appointment.id}>Completed</button></td>
                            <td><button type="button" class="btn btn-danger" onClick={canceled} id={appointment.id} key ={appointment.id}>Cancelled</button></td>
                        </tr> 
                    )
                })}
            </tbody>
        </table>
    )
}
export default AppointmentList;



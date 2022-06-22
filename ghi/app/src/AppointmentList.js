function AppointmentList(props) {
    console.log(props)
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
                {props.appointments.map(appointment => {
                    return (
                        <tr key={appointment.href}>
                            <td>{JSON.stringify(appointment.vip).toUpperCase()}</td>
                            <td>{appointment.vin}</td>
                            <td>{appointment.customer}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.time}</td>
                            <td>{appointment.technician.technician}</td>
                            <td>{appointment.reason}</td>
                            <td>{appointment.status.name}</td>
                        </tr> 
                    )
                })}
            </tbody>
        </table>
    )
}
export default AppointmentList;



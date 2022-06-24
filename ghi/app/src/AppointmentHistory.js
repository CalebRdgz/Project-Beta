import React, { useEffect, useState } from 'react';

function AppointmentHistoryList(history) {
    let [searchBar, setSearchBar] = useState("");
    useEffect(() => {

    }, [])


    console.log(history);
    return (
        
        <div>
            <div className='row' style={{paddingTop: '70px', paddingBottom: '20px'}}>
                <div className="container">
                <h1>Service History</h1>
                    <div className='row' style={{paddingTop: '40px', paddingBottom: '10px'}}>
                        <form id = 'form_search_history' name='form_search_history' method='get' action ='' className="form-inline">
                            <div className='form-group'>
                                <div className='form-group'>
                                    <input onChange={e=> setSearchBar(e.target.value)} className='form-control' placeholder='Please enter a vin' type='text'/>
                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
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
                    {history.history &&
                    history.history
                    .filter(appointment => appointment.vin.includes(searchBar))
                    .map(appointment => {
                        return (
                            <tr key = {appointment.href}>
                                <td>{appointment.vip}</td>
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
        </div>
    )
}

export default AppointmentHistoryList;
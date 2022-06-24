import React, { useState, useEffect } from 'react'

export default function Sales({sales}) {
    console.log(sales)

    let [salesPersons, setSalesPersons] = useState([])
    let [personData, setPersonData] = useState('')
    
    useEffect(() => {
        fetch('http://localhost:8090/api/salespersons/')
        .then(res => res.json())
        .then(res => setSalesPersons(res.data))
    }, [])

    const handleChange = (event) => {
        setPersonData(event.target.value)
    }
    return (
        <div>
            <div className='row' style={{paddingTop: '70px', paddiingBottom: '20px'}}>
            <form>
                <select default="" onChange={(event)=>handleChange(event)} id="sales_person">
                    <option value="">Select a Sales Rep</option>
                    {sales?.sale
                    .map(({sales_person}) => {
                        return (
                        <option key={sales_person.id} value={sales_person.name}>{sales_person.name}</option>)})} 
                </select>
            </form>
            </div>
        <div className='row' style={{paddingTop: '30px', paddiingBottom: '20px'}}>
        <table className="table table-striped">
        <thead>
            <tr>
                <th>Sales Rep</th>
                <th>Customer</th>
                <th>Car Vin</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {sales.sale?.filter(({sales_person}) => (sales_person.name===personData) || !personData).map(saler => {
                return (
                    <tr key={saler.href}>
                        <td>{saler.sales_person.name}</td>
                        <td>{saler.customer.name}</td>
                        <td>{saler.vin}</td>
                        <td>{saler.price}</td>
                    </tr>
                )
            })} 
        </tbody>
    </table>
    </div>
    </div>
    )
}

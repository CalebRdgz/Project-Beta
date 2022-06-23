import React, {useState} from 'react';


function CustomerForm() {
    const[customer, setCustomer] = useState({
        name: "",
        address: "",
        phone_number: "",
    })

    const handleChange = (event) => {
        setCustomer({...customer, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {...customer}
        const customerUrl = 'http://localhost:8090/api/customers/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(customerUrl, fetchConfig)
        if (response.ok) {
            const newCustomer = await response.json()
            console.log(newCustomer)
            setCustomer({
                name: '',
                address: '',
                phone_number: '',
            })
        }
    }
    return (
        <div className="my-5 constainer">
            <div className = "row">
                <div className='offset-3 col-6'>
                    <div className = "shadow p-4 mt-4">
                        <h1> Create A New Customer! </h1>
                        <form onSubmit={handleSubmit} id ="create-customer-form">
                            <div className="form-floating mb-3">
                                <input onChange={handleChange} type= "text" name= "name" id ="name" value={customer.name} className="form-control"/>
                                    <label htmlFor='customer'>Customer's Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleChange} type= "text" name= "address" id ="address" value={customer.address} className="form-control"/>
                                    <label htmlFor='customer'>Customer's Address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleChange} type= "text" name= "phone_number" id ="phone_number" value={customer.phone_number} className="form-control"/>
                                    <label htmlFor='customer'>Customer's Phone Number</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerForm
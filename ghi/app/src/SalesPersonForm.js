import React from 'react';

class SalesPersonForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            employee_number: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeEmployeeNumber = this.handleChangeEmployeeNumber.bind(this)
    }

    handleChangeName(event) {
        const value = event.target.value
        this.setState({ name: value })
    }
    handleChangeEmployeeNumber(event) {
        const value = event.target.value
        this.setState({ employee_number: value })
    }

    async handleSubmit(event) {
        event.preventDefault()
        const data = {...this.state}
        console.log(this.state)
        const salesPersonUrl = 'http://localhost:8090/api/salespersons/'
        const fetchOptions = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(salesPersonUrl, fetchOptions)
        if (response.ok) {
            this.setState({
                name: '',
                employee_number: '',
            })
        }
    }
    render() {
    return (
        <div className="my-5 container">
            <div className = "row">
                <div className='offset-3 col-6'>
                    <div className = "shadow p-4 mt-4">
                        <h1> Create A New Sales Person! </h1>
                        <form onSubmit={this.handleSubmit} id ="create-salesperson-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeName} type= "text" name= "name" id ="name" value={this.state.name} className="form-control"/>
                                    <label htmlFor='name'>Sales Person's Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeEmployeeNumber} value={this.state.employee_number} type= "text" name= "employee_number" id ="employee_number" className="form-control"/>
                                    <label htmlFor='employee_number'>Employee Number</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )}
}

export default SalesPersonForm

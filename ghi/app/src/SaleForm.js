import React from 'react';

class SaleForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sales_person: '',
            sales_persons: [],
            customer: '',
            customers: [],
            vin: '',
            vins: [],
            price: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeSalesPerson = this.handleChangeSalesPerson.bind(this);
        this.handleChangeCustomer = this.handleChangeCustomer.bind(this);
        this.handleChangeVin = this.handleChangeVin.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
    }
    async componentDidMount() {
        Promise.all([
            fetch('http://localhost:8090/api/salespersons/'),
            fetch('http://localhost:8090/api/customers/'),
            fetch('http://localhost:8090/api/automobilevos/')
        ])
            .then (([res1, res2, res3] ) => {
                return Promise.all([res1.json(), res2.json(), res3.json()])
            })
            .then (([res1, res2, res3]) => {
                this.setState({vins: res3.automobiles})
                this.setState({sales_persons: res1.sales_person})
                this.setState({customers: res2.customer})
            })
    }
    async handleSubmit(event) {
        event.preventDefault()
        const data = {...this.state}
        console.log(data)
        delete data.sales_persons
        delete data.customers
        delete data.vins
        const salesUrl = 'http://localhost:8090/api/sales/'
        const fetchOptions = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(salesUrl, fetchOptions)
        if (response.ok) {
            this.setState({
                sales_person: '',
                customer: '',
                vin: '',
                price: '',
            })
        }
    }
    handleChangeSalesPerson(event) {
        const value = event.target.value
        this.setState({ sales_person: value })
    }
    handleChangeCustomer(event) {
        const value = event.target.value
        this.setState({ customer: value })
    }
    handleChangeVin(event) {
        const value = event.target.value
        this.setState({ vin: value })
    }
    handleChangePrice(event) {
        const value = event.target.value
        this.setState({ price: value })
    }

    render() {
        return (
            <div className="my-5 constainer">
            <div className = "row">
                <div className='offset-3 col-6'>
                    <div className = "shadow p-4 mt-4">
                        <h1> Create A New Customer! </h1>
                        <form onSubmit={this.handleSubmit} id ="create-customer-form">
                            <div className="mb-3">
                                <select onChange={this.handleChangeSalesPerson} required name="sales_person" id="sales_person" className="form-select">
                                <option value="">Choose A Sales Rep</option>
                                {this.state.sales_persons.map(sales_person => {
                                    return (
                                        <option key={sales_person.id} value={sales_person.name}>{sales_person.name}</option>
                                    )
                                })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <select onChange={this.handleChangeCustomer} required name="customer" id="customer" className="form-select">
                                <option value="">Choose A Customer</option>
                                {this.state.customers.map(customer => {
                                    return (
                                        <option key={customer.id} value={customer.name}>{customer.name}</option>
                                    )
                                })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <select onChange={this.handleChangeVin} required name="vin" id="vin" className="form-select">
                                <option value="">Choose An Automobile</option>
                                {this.state.vins.map(automobile => {
                                    return (
                                        <option key={automobile.id} value={automobile.id}>{automobile.vin}</option>
                                    )
                                })}
                                </select>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangePrice} type= "text" name= "price" id ="price" value={this.state.price} className="form-control"/>
                                    <label htmlFor='price'>Price</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default SaleForm
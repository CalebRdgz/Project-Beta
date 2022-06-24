import React from 'react';
import { renderMatches } from 'react-router-dom';

class ManufacturerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: '', hasSignedUp: false}
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChangeName(event) {
        const value = event.target.value
        this.setState({ name: value })
    }
    async handleSubmit(event) {
        event.preventDefault()
        const data = {...this.state}
        delete data.hasSignedUp;
        console.log(data)
        const manufacturerUrl = 'http://localhost:8100/api/manufacturers/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: { 'content-type': 'application/json' }
        }
        const response = await fetch(manufacturerUrl, fetchConfig)
        if (response.ok) {
            const newManufacturer = await response.json()
            console.log(newManufacturer)
            this.setState({
                name: '',
                hasSignedUp: true,
            })
        }
    }
    render() {
        let messageClasses = 'alert alert-success d-none mb-0';
        let formClasses = '';
        if (this.state.hasSignedUp) {
            messageClasses = 'alert alert-success mb-0';
            formClasses = 'd-none';
          }
        return(
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">Create a new Manufacturer!</h1>
                <form className= {formClasses} onSubmit={this.handleSubmit} id='create-manufacturer-form'>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleChangeName} name='name' requiredtype='text' id='name' className='form-control' />
                        <label htmlFor='name'>Name</label>
                    </div>
                    <button className="btn btn-primary">Add Manufacturer</button>
                </form>
                <div className={messageClasses} id="success-message">
                    Congratulations! Your manufacturer has been created!
                </div>
            </div>
        )
    }
}



export default ManufacturerForm
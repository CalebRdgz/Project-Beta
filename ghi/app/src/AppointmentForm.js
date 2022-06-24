import React from "react";


class AppointmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: "",
            date: "",
            time: "",
            reason: "",
            technician: "",
            vin: "",
            technicians: [],
            hasSignedUp: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handleReasonChange = this.handleReasonChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleTechnicianChange = this.handleTechnicianChange.bind(this);
        this.handleVinChange = this.handleVinChange.bind(this);
        




    }


    componentDidMount() {
        Promise.all([fetch("http://localhost:8080/api/technicians/")])

            .then (([res1]) => {
                return Promise.all([res1.json()])
            })
            .then (([res1]) => {
                this.setState({technicians: res1.technician})
                
                
            })
    }
   
    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.technicians;
        delete data.hasSignedUp;

        const appointmentUrl = 'http://localhost:8080/api/appointments/'
        const fetchOptions = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const appointmentResponse = await fetch(appointmentUrl, fetchOptions);
        if (appointmentResponse.ok){
            this.setState({
                customer: "",
                date: "",
                time: "",
                reason: "",
                technician: "",
                vin: "",
                hasSignedUp: true,
            });
        }
    }
    handleCustomerChange(event) {
        const value = event.target.value;
        this.setState({ customer: value });
    }
    handleReasonChange(event) {
        const value = event.target.value;
        this.setState({ reason: value });
    }
    handleDateChange(event) {
        const value = event.target.value;
        this.setState({ date: value });
    }
    handleTimeChange(event) {
        const value = event.target.value;
        this.setState({ time: value });
    }
    handleTechnicianChange(event) {
        const value = event.target.value;
        this.setState({ technician: value });
    }
    handleVinChange(event) {
        const value = event.target.value;
        this.setState({ vin: value });
    }
    



    render() {
        let messageClasses = 'alert alert-success d-none mb-0';
        let formClasses = '';
        if (this.state.hasSignedUp) {
            messageClasses = 'alert alert-success mb-0';
            formClasses = 'd-none';
          }
        return (
            <div className="my-5 container">
            <div className = "row">
                <div className='offset-3 col-6'>
                    <div className = "shadow p-4 mt-4">
                        <h1> Create A New Service Appointment! </h1>
                        <form className= {formClasses}onSubmit={this.handleSubmit} id ="create-appointment-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleCustomerChange} type= "text" name= "customer" id ="customer"  className="form-control"/>
                                    <label htmlFor='customer'>Customer's Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleReasonChange} type= "text" name= "reason" id ="reason"  className="form-control"/>
                                    <label htmlFor='reason'>Reason</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleDateChange} type= "date" name= "date" id ="date"  className="form-control"/>
                                    <label htmlFor='technician'>Date</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleTimeChange} type= "time" name= "time" id ="time" className="form-control"/>
                                    <label htmlFor='time'>Time</label>
                            </div>
                            <div className="mb-3">
                                <select onChange={this.handleTechnicianChange} required name="technician" id="technician" className="form-select">
                                <option value="">Choose A Technician</option>
                                {this.state.technicians.map(technician => {
                                    return (
                                        <option key={technician.id} value={technician.id}>{technician.technician}</option>
                                    )
                                })}
                                </select>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleVinChange} type= "text" name= "vin" id ="vin" className="form-control"/>
                                    <label htmlFor='time'>Vin</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                        <div className={messageClasses} id="success-message">
                            Congratulations! Your appointment has been booked!
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
    
    

export default AppointmentForm;
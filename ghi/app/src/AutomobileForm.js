import React from "react";

class AutomobileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            color: "",
            year: "",
            vin: "",
            model_id: "",
            model_ids: [],
            hasSignedUp: false,
            
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleVinChange = this.handleVinChange.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);
        

    }

    async componentDidMount(){
        const url ='http://localhost:8100/api/models/'
        const response = await fetch(url);

        //updating state here

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            this.setState({model_ids: data.models})
        }
    }
        


    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        console.log(data);
        delete data.model_ids;
        delete data.hasSignedUp;
        const autoUrl = 'http://localhost:8100/api/automobiles/'
        const fetchOptions = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const autoResponse = await fetch(autoUrl, fetchOptions);
        if (autoResponse.ok){
            this.setState({
                color: "",
                year: "",
                vin: "",
                model_id: "",
                hasSignedUp: true,
                
            });
        }
    }

    handleColorChange(event) {
        const value = event.target.value;
        this.setState({ color: value });
    }
    handleYearChange(event) {
        const value = event.target.value;
        this.setState({ year: value });
    }
    handleVinChange(event) {
        const value = event.target.value;
        this.setState({ vin: value });
    }
    handleModelChange(event) {
        const value = event.target.value;
        this.setState({ model_id: value });
    }
    
    render() {
        let messageClasses = 'alert alert-success d-none mb-0';
        let formClasses = '';
        if (this.state.hasSignedUp) {
            messageClasses = 'alert alert-success mb-0';
            formClasses = 'd-none';
          }
        return(
            <div className="my-5 container">
            <div className = "row">
                <div className='offset-3 col-6'>
                    <div className = "shadow p-4 mt-4">
                        <h1> Create A New automobile </h1>
                        <form className= {formClasses} onSubmit={this.handleSubmit} id ="create-appointment-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleColorChange} type= "text" name= "color" id ="color"  className="form-control"/>
                                    <label htmlFor='reason'>Color</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleVinChange} type= "text" name= "vin" id ="vin"  className="form-control"/>
                                    <label htmlFor='reason'>Vin</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleYearChange} type= "text" name= "year" id ="year"  className="form-control"/>
                                    <label htmlFor='reason'>Year</label>
                            </div>
                            <div className="mb-3">
                                <select onChange={this.handleModelChange} required name="model" id="model" className="form-select" multiple={false}>
                                <option value="">Choose A Model</option>
                                {this.state.model_ids.map(model => {
                                    return (
                                        <option key = {model.id} value = {model.id}>{model.name}</option>
                                    )
                                })}
                                </select>
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
export default AutomobileForm;
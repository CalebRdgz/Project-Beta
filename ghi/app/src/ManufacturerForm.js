import React from 'react';

class ManufacturerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: ''}
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
}

export default ManufacturerForm
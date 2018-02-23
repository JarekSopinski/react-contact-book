import React, { Component } from 'react';

class AddContactForm extends Component {

    state = {
        newName: '',
        newPhone: '',
        newEmail: '',
        newCategory: '',
    }; // newly submitted values are being kept here

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    }; // pass new values to this component's state

    /*
    Above function can also be written like this (longer, but easier to understand):

    handleChange = event => {
    const name = event.target.name
    const value = event.target.value

    const patch = {}
    patch[name] = value

    this.setState(patch)
  }
     */

    handleSubmit = event => {
        event.preventDefault(); // prevent reloading after submitting
        //console.log(this.state) // see submitted values
        this.props.addContact(this.state)
    };

    render() {

        const { newName, newPhone, newEmail, newCategory } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>

                <span>Name:&nbsp;</span>
                <input
                    name="newName"
                    value={newName}
                    onChange={this.handleChange}
                />
                <br></br>

                <span>Phone:&nbsp;</span>
                <input
                    name="newPhone"
                    value={newPhone}
                    onChange={this.handleChange}/>
                <br></br>

                <span>E-mail:&nbsp;</span>
                <input
                    name="newEmail"
                    value={newEmail}
                    onChange={this.handleChange}/>
                <br></br>

                <span>Categories:&nbsp;</span>
                <input
                    name="newCategory"
                    value={newCategory}
                    onChange={this.handleChange}/>
                <br></br>

                <button>Add new contact</button>
            </form>
        )
    }

}

export default AddContactForm
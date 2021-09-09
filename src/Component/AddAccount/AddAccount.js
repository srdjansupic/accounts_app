import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class AddAccount extends Component {

    state = {
        newAccount: { id: "", name: "", lastname: "", phone: "", email: "" }
    }

    changeValues = (e) => {
        let id = e.target.id;
        let newAccountCopy = { ...this.state.newAccount };
        newAccountCopy[id] = e.target.value;
        this.setState({
            newAccount: newAccountCopy
        })
        console.log(this.props);
    }

    addNew = (e) => {
        e.preventDefault();
        this.props.addNewAccount(this.state.newAccount);
        this.props.history.push("/");
    }

    render() {
        return (
            <form action="">
                <input type="text" onChange={this.changeValues} id="id" placeholder="Id" /><br />
                <input type="text" onChange={this.changeValues} id="name" placeholder="Name" /><br />
                <input type="text" onChange={this.changeValues} id="lastname" placeholder="Lastname" /><br />
                <input type="text" onChange={this.changeValues} id="phone" placeholder="phone" /><br />
                <input type="text" onChange={this.changeValues} id="email" placeholder="email" /><br />
                <button id="btn-save" type="submit" onClick={this.addNew}>Save</button>
            </form>
        )
    }
}

export default withRouter(AddAccount);
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class EditAccount extends Component {

    state = {
        account: { id: "", name: "", lastname: "", phone: "", email: "" }
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        const accauntsForEdit = this.props.editaccounts.filter(acc => acc.id == this.props.match.params.id)[0];
        console.log(accauntsForEdit);
        this.setState({
            account: accauntsForEdit
        })
    }
    changeAcc = (e) => {
        const allAcc = { ...this.state.account };
        allAcc[e.target.id] = e.target.value;
        this.setState({
            account: allAcc
        })
    }

    editAcc = (e) => {
        e.preventDefault();
        this.props.editAcc(this.state.account);
        this.props.history.push("/");
    }

    render() {
        return (
            <form action="">
                
                <input onChange={this.changeAcc} type="text" id="name" value={this.state.account.name} /><br />
                <input onChange={this.changeAcc} type="text" id="lastname" value={this.state.account.lastname} /><br />
                <input onChange={this.changeAcc} type="text" id="phone" value={this.state.account.phone} /><br />
                <input onChange={this.changeAcc} type="text" id="email" value={this.state.account.email} /><br />
                <button id="btn-edit" onClick={this.editAcc} type="submit">Edit</button>
            </form>
        )
    }
}

export default withRouter(EditAccount);
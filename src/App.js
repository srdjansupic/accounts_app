import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import AccountList from "./Component/Account/AccountList";
import AddAccount from "./Component/AddAccount/AddAccount";
import EditDelete from "./Component/EditDelete/EditDelete";
import EditAccount from "./Component/EditDelete/EditAccount";

class App extends Component {

    state = {
        accounts: [
           
        ]
    }

    addNewAccount = (acc) => {
        let copyState = [...this.state.accounts, acc];
        this.setState({
            accounts: copyState
        })
    }

    deleteAcc = (index) => {
        this.setState({
            accounts: this.state.accounts.splice(1, index)
        })
    }

    editAcc = (acc) => {
        const copyAcc = [...this.state.accounts];
        let accountPosition =copyAcc.map(accc=> accc.id).indexOf(acc.id)
        copyAcc[accountPosition] = acc;
        this.setState({
            accounts:copyAcc
        })
    }

    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Route path="/" exact>
                    <AccountList accountsList={this.state.accounts} />
                </Route>
                <Route path="/add-account">
                    <AddAccount addNewAccount={this.addNewAccount} />
                </Route>
                <Route path="/edit-delete">
                    <EditDelete deleteAcc={this.deleteAcc} account={this.state.accounts} />
                </Route>
                <Route path="/edit/:id">
                    <EditAccount editAcc={this.editAcc} editaccounts={this.state.accounts} />
                </Route>
            </BrowserRouter>
        )
    }
}

export default App;
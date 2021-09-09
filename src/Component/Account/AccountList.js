import React from "react";
import Account from "./Account";

const AccountList = ({accountsList})=>{

    const allPerson = accountsList.map(account=>{
        return(
            <Account account={account}  key={account.id}/>
        )
    })

   
        return(
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {allPerson}
                </tbody>
            </table>
        )
    
}

export default AccountList;
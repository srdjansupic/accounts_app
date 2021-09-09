import React from "react";
import Account from "../Account/Account";

const EditDelete=({account,deleteAcc})=>{

    const allPerson = account.map((account,index)=>{
        return(
            <Account account={account} key={account.id} deleteAcc={deleteAcc} index={index} edit={true}/>
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
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {allPerson}
                </tbody>
            </table>
   )
}

export default EditDelete;
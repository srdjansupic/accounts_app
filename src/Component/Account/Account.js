import React from "react";
import { Link } from "react-router-dom";

const Account =({account,edit,index,deleteAcc})=>{

    

 const actionBtns = edit ? (
     <>
     <td><Link to={"/edit/"+account.id} id="edit" >Edit</Link></td>
     <td><button id="delete" onClick={()=>{deleteAcc(index+1)}}>Delete</button></td>
     </>
 ) : null;

    return(
        <tr>
            <td>{account.id}</td>
            <td>{account.name}</td>
            <td>{account.lastname}</td>
            <td>{account.phone}</td>
            <td>{account.email}</td>
            {actionBtns}
        </tr>
    )
}

export default Account;
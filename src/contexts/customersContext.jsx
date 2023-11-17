import React, { useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import customerService from "services/customers";

const Context = React.createContext(null)

    
const ProviderWrapper = (props) => {

    const [ customersList, setCustomersList] = useState([])

    const hook = () => {
        customerService
            .getAll()
            .then(initialsCustomers => {
                setCustomersList(initialsCustomers)
            })
    }

    useEffect(hook, [])

    
    const exposedValue = {
        customersList
    }
    
    return (
        <Context.Provider value={exposedValue}>
            { props.children }
        </Context.Provider> 
        )   
}
    
export {    
    Context,
    ProviderWrapper,    
}
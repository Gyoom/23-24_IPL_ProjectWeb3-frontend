import React, { useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import employeeService from "services/employees";
import customerService from "services/customers";


const Context = React.createContext(null)

    
const ProviderWrapper = (props) => {

    const [ authenticatedUser, setAuthenticatedUser] = useState(null)
    const [ userIsEmployee, setUserIsEmployee] = useState([])

    const hook = () => {
       // TODO check existing user in localhost
    }

    useEffect(hook, [])


    const login = (email, mdp, isEmployee) => {
        var user;
        if (isEmployee)
            user = employeeService.getByEmail(email);
        else
            user = customerService.getByEmail(email);

        if (!user)
            return "email inconnu" 
        else if (user.mdp != mdp)
            return "mdp  incorrect"
        else
        {
            setAuthenticatedUser(user)
            setUserIsEmployee(isEmployee)

            // TODO save in localhost
        } 

        return redirect("/")   
    }

    const register = (email, mdp, isEmployee) => {
        var user;
        if (isEmployee)
            user = employeeService.getByEmail(email);
        else
            user = customerService.getByEmail(email);

        if (!user)
            return "email inconnu" 
        else if (user.mdp != mdp)
            return "mdp  incorrect"
        else
        {
            setAuthenticatedUser(user)
            setUserIsEmployee(isEmployee)

            // TODO save in localhost
        } 

        return redirect("/")   
    }

    const logout = () => {
        setAuthenticatedUser(null)
        setUserIsEmployee(false)
        return redirect("/")
    }

    
    const exposedValue = {
        authenticatedUser,
        userIsEmployee,
        login,
        register,
        logout

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
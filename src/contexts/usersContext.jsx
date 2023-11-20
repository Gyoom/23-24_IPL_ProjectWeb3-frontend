import React, { useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import employeeService from "services/employees";
import customerService from "services/customers";


const Context = React.createContext(null)

    
const ProviderWrapper = (props) => {

    const [ authenticatedUser, setAuthenticatedUser] = useState(JSON.parse(localStorage.getItem("authenticatedUser")))
    const [ userIsEmployee, setUserIsEmployee] = useState(JSON.parse(localStorage.getItem("userIsEmployee")))

    const [ customersList, setCustomersList] = useState([])
    const [ EmployeesList, setEmployeesList] = useState([])

    const hook = () => {
        customerService
            .getAll()
            .then(initialsCustomers => {
                setCustomersList(initialsCustomers)
            })

        employeeService
            .getAll()
            .then(initialsEmployees => {
                setEmployeesList(initialsEmployees)
            })
    }

    useEffect(hook, [])

    const login = async (email, password, isEmployee) => {
        var service;
        var logged = false
        if (isEmployee === true)
            service = employeeService
        else 
            service = customerService
        
        await service.getByEmail(email)
                .then(returnedUser => {
                    if (returnedUser.password === password)
                    {
                        setAuthenticatedUser(returnedUser)
                        localStorage.setItem("authenticatedUser", JSON.stringify(returnedUser))
                        setUserIsEmployee(isEmployee === true)
                        localStorage.setItem("userIsEmployee", JSON.stringify(isEmployee === true))
                        logged = true
                    } 
                    else
                        logged = false
                        
                })
                .catch(error => {
                    console.log(error)
                })
        return logged
    

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
        setAuthenticatedUser([])
        setUserIsEmployee(false)
        localStorage.setItem("authenticatedUser", JSON.stringify([]))
        localStorage.setItem("userIsEmployee", JSON.stringify(false))
        return redirect("/")
    }

    
    const exposedValue = {
        authenticatedUser,
        userIsEmployee,
        customersList,
        EmployeesList,
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
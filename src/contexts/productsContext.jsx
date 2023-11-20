import React, { useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import productService from "services/products";

const Context = React.createContext(null)

    
const ProviderWrapper = (props) => {

    const [ productsList, setProductsList] = useState([])
    const [ productsCommand, setProductsCommand] = useState([])

    const hook = () => {
        productService
            .getAll()
            .then(initialsProducts => {
                setProductsList(initialsProducts)
            })
    }

    useEffect(hook, [])

    const createNewProduct = (product) => 
    {
        const existingProduct = persons.find(p => p.name == product.name)
        if (existingProduct)
            return "ce priduit existe déjà"
        // todo check

        productService.create({ ...product })
            .then(returnedProduct => {
              setPersons(persons.concat(returnedProduct))
              return redirect("/");
            })
    }

    const addProductToCommand = (id) => {
        var product = productsList.find(p => p.id == id)
        if (!product)
            return "product id unknown"

        setProductsCommand(productsCommand.concat(product))
        return redirect("/productList")
    }

    const removeProductToCommand = (id) => {
        setProductsCommand(productsCommand.filter(p => p.id !== id))
        return redirect("/command")
    }

    
    const exposedValue = {
        productsList,
        productsCommand,
        createNewProduct,
        addProductToCommand,
        removeProductToCommand
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
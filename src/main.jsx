import React from 'react'
import ReactDOM from 'react-dom/client'
import AppLoader from './App/AppLoader'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <AppLoader />
    </Router>
)

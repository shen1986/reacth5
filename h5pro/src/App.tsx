import React from 'react'
import NavigationLayout from './containers/navigationLayout'
import { HashRouter   as Router } from 'react-router-dom'
import 'normalize.css'
import './styles/index.less'

function App() {
    return (
        <Router basename="/" >
            <NavigationLayout />
        </Router>
    )
}

export default App;

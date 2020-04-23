import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import NavigationLayout from './containers/NavigationLayout'
import { Provider } from 'react-redux'
import store from '@/config/dva'

import './styles/index.less'

function App() {
    return (
        <Provider store={store}>
            <Router basename="/">
                <NavigationLayout />
            </Router>
        </Provider>
    )
}

export default App;

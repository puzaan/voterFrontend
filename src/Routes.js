import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import {SignIn, SignUp} from './view'
const Routes = () => {
    return (
        <Switch>
            <Route
                exact
                path="/"
                component={SignIn}
            />

<Route
                
                path="/register"
                component={SignUp}
            />
            
        </Switch>


    )
}

export default Routes

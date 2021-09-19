import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { SignIn, SignUp, adminSignIn, dashboard } from './view'
import Navbar from './component/Navbar';
const Routes = () => {
    return (
        
        <Switch>
            <Route
                exact
                path="/user"
                component={SignIn}
            />
            <Route
                exact
                path="/"
                component={adminSignIn}
            />

<Route
                
                path="/register"
                component={SignUp}
            />
            
            <Route

                path="/dashboard"
                component={dashboard}
            />
            
        </Switch>

    


    )
}

export default Routes

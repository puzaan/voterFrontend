import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { SignIn, SignUp, adminSignIn, dashboard, Kaadders, booth, assignedPlace, addPlace  } from './view'
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
            <Route

                path="/userlist"
                component={Kaadders}
            />
            <Route

                path="/booth"
                component={booth}
            />
            <Route

                path="/assignedist"
                component={assignedPlace}
            />
            <Route
                path="/assign/:id"
                component={addPlace}
            />
            
        </Switch>

    


    )
}

export default Routes

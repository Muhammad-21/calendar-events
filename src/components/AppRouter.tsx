import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { privateRoutes, publicRoutes, RouteNames } from '../routes';

export default function AppRouter() {
    const auth = false;
    return (
        auth
            ?
            <Switch>
                {privateRoutes.map(route => 
                    <Route path={route.path} exact={route.exact} component={route.component}
                        key={route.path}
                    />)}
                <Redirect to={RouteNames.EVENT}/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route => 
                    <Route path={route.path} exact={route.exact} component={route.component}
                        key={route.path}
                    />)}
                <Redirect to={RouteNames.LOGIN}/>
            </Switch>
    )
}

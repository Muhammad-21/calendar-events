import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { useTypeSeceltor } from '../hooks/useTypedSelector';
import { privateRoutes, publicRoutes, RouteNames } from '../routes';

export default function AppRouter() {
    const {isAuth} = useTypeSeceltor(state => state.auth)
    return (
        isAuth
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

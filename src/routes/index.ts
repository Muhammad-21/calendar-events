import React from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";
export interface iRoute {
    path:string;
    component:React.ComponentType;
    exact?:boolean;
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT =  '/',
}

export const publicRoutes : iRoute[] = [
    {path:RouteNames.LOGIN, exact:true, component:Login}
]

export const privateRoutes : iRoute[] = [
    {path:RouteNames.EVENT, exact:true, component:Event}
]

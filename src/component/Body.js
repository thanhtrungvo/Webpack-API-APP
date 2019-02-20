import React from 'react'
import {Route, Switch} from 'react-router-dom'
import * as linkto from '../routes_menus/linkto'
var showRoute = (routes)=>{
    var result = null;
    if(routes.length>0){
        result = routes.map((route, index)=>{
            return(
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
            />
            )
        })
    }
    return result;
}
class Body extends React.Component{
    render(){
        return(
            <div className="container mt-3" >
                <div className="row">
                    <Switch>
                        {showRoute(linkto.routes)}
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Body;
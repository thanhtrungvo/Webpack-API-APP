import {Route, Switch} from 'react-router-dom';
import React from 'react';

import {routes} from './routes'


class Body extends React.Component{
    showBody = (routes)=>{
        var result = null;
        if(routes.length > 0){
            result = routes.map((route, index)=>{
                return(
                <Route key={index} path={route.path} exact={route.exact} component={route.component} />
                )
            })
        }
        return result;
    }
    render(){
        return(
            <Switch>
               {this.showBody(routes)}
            </Switch>
        )
    }
}

export default Body;
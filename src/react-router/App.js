import React from 'react'
import Menu from './Menu'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LinkHome from './component/LinkHome';
import LinkSoMot from './component/LinkSoMot';
import LinkSoHai from './component/LinkSoHai';
import LinkSoBa from './component/LinkSoBa';
import Body from './Body'

class App extends React.Component{
    render(){
        return(
                <Router>
                <React.Fragment>
                    <Menu></Menu>
                    <div className="container" >
                        <div className="row" >
                            <Body></Body>
                        </div>
                    </div>
                </React.Fragment>
                </Router>
                
        )
    }
}

export default App;
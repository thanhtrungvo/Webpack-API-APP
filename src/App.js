import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Menu from './component/Menu'
import Body from './component/Body'
class App extends React.Component{
    render(){
        return(
            <Router>
                <React.Fragment>
                    <Menu/>
                    <Body/>
                </React.Fragment>
            </Router>
        )
    }
}


export default App;
import React from 'react';

import Menu from './Menu'
import Body from './Body';
class App extends React.Component{
    render(){
        return(
        <div>
            <Menu></Menu>
            <Body></Body>
        </div>
        )
    }
}

export default App;
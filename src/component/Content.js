import React from 'react';
import './App.css'


class Content extends React.Component{
    render(){
        return(
        <div>
            <div className="trung" >
                "devDependencies": 
                    "@babel/core": "^7.3.3", <br/>
                    "@babel/preset-env": "^7.3.1",<br/>
                    "babel-loader": "^8.0.5",<br/>
                    =>>>> Loader --------------------------------- <br/><br/>

                    "@babel/preset-react": "^7.0.0",<br/>
                    "@babel/plugin-proposal-class-properties": "^7.3.3",
                    =>>>> React ---------------------------------- <br/> <br/>

                    "css-loader": "^2.1.0",<br/>
                    "mini-css-extract-plugin": "^0.5.0",<br/>
                    ===> Load and separate CSS file ----------------------<br/><br/>

                    "webpack": "^4.29.4",<br/>
                    "webpack-cli": "^3.2.3"<br/>
                    "webpack-dev-server": "^3.1.14" <br/>
                    ===> WEBPACK ----------------------------------------- <br/> <br/>
                ,
                <br></br>
                <br></br>
                "dependencies": 
                    "react": "^16.8.2",<br/>
                    "react-dom": "^16.8.2"<br/>
                
            </div>
        </div>
        )
    }
}

export default Content;
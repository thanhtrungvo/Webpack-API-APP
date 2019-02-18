import React from 'react';
import Content from './Content';

class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isDisplay : false
        }
    }
    setDisplay = ()=>{
        this.setState({
            isDisplay : !this.state.isDisplay
        })
    }
    render(){
        var display = this.state.isDisplay ? <Content/> : ''

        return(
            <div className="container">
                <button className="btn btn-info py-2 my-5" onClick = {()=>this.setDisplay()}>
                    clik to See
                </button>
                <button className="btn btn-success py-2 my-5" onClick = {()=>this.setDisplay()}>
                    clik to See
                </button>
                <button className="btn btn-danger py-2 my-5" onClick = {()=>this.setDisplay()}>
                    clik to See
                </button>
                {display}
            </div>
        )
    }
}

export default Body;
import React from 'react'
import {Prompt} from 'react-router-dom'
class LinkSoMot extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isPrompt: true
        }
    }
    render(){
        return( 
            <div>
               <div className="alert alert-primary">
                    Đây là link số 1
                </div> 
                {/* <button className="btn btn-info">Allow</button>
                <button className="btn btn-danger">Not Allow</button> */}
                <Prompt 
                    when={true}
                    message={ location=>(`Bạn có chắc muốn đi đến ${location.pathname}`)} />
            </div>
        )
    }
}

export default LinkSoMot;
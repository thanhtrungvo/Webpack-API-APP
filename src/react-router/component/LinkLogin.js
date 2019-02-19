import  React from 'react'
import {Redirect} from 'react-router-dom'
class LinkLogin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            txtUsername:'',
            txtPassword:''
        }
    }
    onChange = (e)=>{
        var target = e.target;
        var name = target.name;
        var value = target.type==="checkbox" ?target.checked : target.value;

        this.setState({
            [name]: value
        })
    }
    onLogin = (e)=>{
        e.preventDefault();
       var {txtUsername, txtPassword} = this.state;
       if(txtUsername==='admin' && txtPassword==='admin'){
           localStorage.setItem("user",JSON.stringify({
               txtUsername:'admin',
               txtPassword:'admin'
           }) )
       }
    }
    render(){
        var {txtUsername, txtPassword}= this.state;
        var loginUser = localStorage.getItem("user");
        

        if(loginUser!==null){
            var location = this.props.location;
            return(
                <Redirect to={{
                        pathname: '/product',
                        state: {
                            from: location
                        }
                    }} 
                />
            )
        }
        return(
            <div className="container">
                <form onSubmit={(e)=>{this.onLogin(e)}} >
                    <h2>Đăng nhập để xem thông tin</h2>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label >User Name</label>
                            <input type="text" className="form-control" value={txtUsername} placeholder="Username" name="txtUsername" onChange={(e)=>this.onChange(e)}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Password</label>
                            <input type="password" className="form-control" value={txtPassword} placeholder="Password" name="txtPassword" onChange={(e)=>this.onChange(e)} />
                        </div>
                    </div>

                    <button className="btn btn-info" type="submit">Login</button>
                    {/* {this.consoleLog()} */}
                </form>
            </div>
        )
    }
}

export default LinkLogin;
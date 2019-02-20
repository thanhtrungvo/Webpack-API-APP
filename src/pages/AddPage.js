import React from 'react'
import {Link} from 'react-router-dom'
import * as actions from '../actions/actions'
import {connect} from 'react-redux'
class AddEditPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: null,
            txtName:'',
            txtPrice:'',
            checkAvai : true
        }
    }
    componentDidMount(){
        var id = this.props.match.params.id;
        if(id){
            this.props.onEditProduct(id);
        }
    }
    componentWillReceiveProps(nextProps){
        var id = this.props.match.params.id;
        if(id && nextProps){
            var product = nextProps.editProduct;
            this.setState({
                id: product.id,
                txtName: product.name,
                txtPrice: product.price,
                checkAvai : product.status
            })
        }
    }
    render(){
        return(
        <form onSubmit={(e)=>this.onSubmit(e)} >
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Enter product name" name="txtName" onChange={(e)=>this.onChange(e)} value={this.state.txtName}/>
            </div>
            <div className="form-group">
                <label>Price</label>
                <input type="number" className="form-control" placeholder="10$" name="txtPrice" onChange={(e)=>this.onChange(e)} value={this.state.txtPrice}/>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" name="checkAvai" onChange={(e)=>this.onChange(e)} checked={this.state.checkAvai}/>
                <label className="form-check-label" >Available</label>
            </div>
            <button type="submit" className="btn btn-primary">Save Product</button>
            <button onClick={()=>this.onComeback()} type="button" to='/product-list' className="btn btn-secondary ml-3">Comeback</button>
        </form>
        )
    }
    onComeback = ()=>{
        var history = this.props.history;
        history.goBack();
    }
    onChange = (e)=>{
        var target = e.target;
        var name = target.name;
        var value = target.type==='checkbox'?target.checked : target.value;
        this.setState({
            [name]:value
        })
    }
    onSubmit = (e)=>{
        e.preventDefault();
        var id = this.props.match.params.id;
        if(!id){
            var product = {
                name: this.state.txtName,
                price: this.state.txtPrice,
                status: this.state.checkAvai
            }
            
            var post = async(product)=>{
                await this.props.AddProduct(product);
                this.props.history.goBack();
            }
            post(product);
        }else{
            var product = {
                id: id,
                name: this.state.txtName,
                price: this.state.txtPrice,
                status: this.state.checkAvai
            }
            this.props.onUpdateProduct(product);
            this.props.history.goBack();
        }

    }
}
const mapStateToProps = (state)=>{
    return{
        editProduct : state.editProduct
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return{
        AddProduct : (product)=>{
            dispatch(actions.actionAddProductRequest(product))
        },
        onEditProduct: (id) =>{
            dispatch(actions.actionEditProductRequest(id))
        },
        onUpdateProduct: (product) =>{
            dispatch(actions.actionUpdateProductRequest(product))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddEditPage);
import React from 'react'
import {Link} from 'react-router-dom'
import callApi from '../utils/callApi';
import {connect} from 'react-redux'
import * as actions from '../actions/actions'
class ProductListPage extends React.Component{
    componentDidMount(){
        this.props.productList();
    }
    
    render(){
        var products = this.props.products;

        return(
            <div>
                <Link to="/product/add" className="btn btn-primary" >Thêm sản phẩm</Link>
                <table className="table table-bordered table-dark mt-2">
                    <thead>
                        <tr>
                            <th scope="col">Stt</th>
                            <th scope="col">Id</th> 
                            <th scope="col">Name</th>
                            <th scope="col">Price</th> 
                            <th scope="col">Status</th> 
                            <th scope="col">Execute</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showProduct(products)}
                    </tbody>
                </table>
            </div>
        )
    }

    showProduct = (products)=>{
        var result = null;
        if(products.length>0){
            result = products.map((product, index)=>{
                return( 
                <tr key={index}>
                    <td scope="row">{index}</td>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}.000.000 vnđ</td>
                    <td>
                        <div className={product.status?" btn btn-success":"btn btn-warning"} >
                            {product.status?"Còn hàng":"Hết hàng"}
                        </div>
                    </td>
                    <td>
                        <Link to={`/product/edit/${product.id}`} className="btn btn-primary"  >Sửa</Link> 
                        <button className="btn btn-danger ml-3" onClick = {()=>this.onDeleteProduct(product.id)} >Xóa</button>
                    </td>
                </tr>)
            })
        }
        return result;
    }

    onDeleteProduct = (id)=>{
        this.props.onDeleteProduct(id)
    }
    // onEditProduct = (id)=>{
    //     this.props.history.push(`/product/edit/${id}`);
    // }
}
const mapStateToProps=(state)=>{
    return({
        products: state.productList
    })
}

const mapDispatchToProps = (dispatch, props)=>{
    return({
        productList  : ()=>{
            return(dispatch(actions.actionProductListRequest()))
        },
        onDeleteProduct: (id)=>{
            return(dispatch(actions.actionDeleteProductRequest(id)))
        },
        onEditProduct: (id)=>{
            return(dispatch(actions.actionEditProductRequest(id)))
        }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)
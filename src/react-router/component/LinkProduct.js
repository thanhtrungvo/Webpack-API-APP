import  React from 'react'
import {Link, Route} from 'react-router-dom'


class ProductItem extends React.Component{

    render(){
        var match = this.props.match;
        console.log(match)
        return(
            <div className="card border-success mb-3 col-sm-4">
                <div className="card-header">{match.params.slug}</div>
            </div>
        )
    }
}
class LinkProduct extends React.Component{
    showProducts = (products)=>{
        var result = null;
        var match = this.props.match
        if(products.length > 0){
            result =  products.map((product, index)=>{
                return(
                    <div className="card border-success mb-3 col-sm-4" key={index} >
                        <div className="card-header">{product.id}</div>
                        <div className="card-body text-success">
                            <Link to={`${match.url}/${product.slug}`} className="card-title"> {product.name} </Link>
                            <p className="card-text"> {product.price} </p>
                        </div>
                    </div>
                )
            })
        }
        return result;
    }

    render(){
        var products = [
            {id:1, name: "Iphone X", price: 35000000, slug:"iphone" },
            {id:2, name: "Oppo F1", price: 15000000, slug:"oppo" },
            {id:3, name: "Dell M4800", price: 15400000, slug:"dell" },
        ]
        var match = this.props.match;
        var location = this.props.location;
        console.log(location)
        return(
            <div className="container" >
                <h1>Danh sách sản phẩm</h1>
                <div className="row">
                    {this.showProducts(products)}

                    <div className="col-sm-12" >
                        <Route path={`${match.url}/:slug`} component={ProductItem}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default LinkProduct;
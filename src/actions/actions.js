import * as actionTypes from '../contants/actionTypes'
import callApi from '../../../React/ReactJS file/ReactRouterConnectAPI/ReactRouter/src/utils/ApiCaller';

// Product List
export const actionProductList=(products)=>{
    
    return({
        type: actionTypes.PRODUCT_LIST,
        products: products
    })
}

export const actionProductListRequest=()=>{
    return(
        (dispath=>{
            return callApi('/products','GET',null).then(res=>{
              dispath(actionProductList(res.data))  
            })
        })
    )
}

// DELETE PRODUCT 
export const actionDeleteProduct = (id)=>{
    return{
        type: actionTypes.DELETE_PRODUCT,
        id:id
    }
}
export const actionDeleteProductRequest = (id)=>{
    return(
        (dispatch)=>{
            return(
                callApi(`/products/${id}`,'DELETE',null).then(res=>{
                    dispatch(actionDeleteProduct(id))
                })
            )
        }
    )
}
//ADD PRODUCT
export const actionAddProduct = (product)=>{
    return{
        type: actionTypes.ADD_PRODUCT,
        product: product
    }
}
export const actionAddProductRequest = (product)=>{
    return(
        (dispatch)=>{
            return(
                callApi('/products','POST',product).then(res=>{
                    dispatch(actionAddProduct(res.data))
                })
            )
        }
    )
}

//EDIT PRODUCT
export const actionEditProductRequest = (id)=>{
    return(
        (dispatch)=>{
            return(
                callApi(`products/${id}`, 'GET', null).then(res=>{
                    dispatch(actionEditProduct(res.data))
                })
            )
        }
    )
}

export const actionEditProduct=(product)=>{
    return{
        type: actionTypes.EDIT_PRODUCT,
        product: product
    }
}
// UPDATE PRODUCT

export const actionUpdateProductRequest = (product) =>{
    return(
        (dispatch)=>{
            callApi(`/products/${product.id}`,'PUT', product).then(res=>{
                dispatch(actionUpdateProduct(res.data))
            })
        }
    )
}
export const actionUpdateProduct = (product) =>{
    return({
        type: actionTypes.UPDATE_PRODUCT,
        product: product
    })
}
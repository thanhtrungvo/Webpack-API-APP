import {combineReducers} from 'redux'
import productList from './productList'
import editProduct from './editProduct'
const appReducers = combineReducers({
    productList,
    editProduct
    
})
export default appReducers;
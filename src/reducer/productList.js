const initialState = [];
import * as funct from '../function/function'
import * as actionTypes from '../contants/actionTypes'

const productList = (state = initialState, action)=>{
    switch(action.type){
        case(actionTypes.PRODUCT_LIST):{
            state = action.products;
            return [...state]
        }
        case(actionTypes.DELETE_PRODUCT):{
            var id = action.id;
            var index = funct.FindIndex(state,id)
            if(index >= 0){
                state.splice(index,1);
            }
            return [...state];
        }
        case(actionTypes.ADD_PRODUCT):{
            var product = action.product;
            state.push(product);
            return[...state]
        }
        case(actionTypes.UPDATE_PRODUCT):{
            var index = funct.FindIndex(state, action.product.id);
            if(index >= 0){
                state[index] = action.product;
            }
            return [...state];
        }
        default: return [...state]
    }
}

export default productList;
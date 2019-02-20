import * as actionTypes from '../contants/actionTypes';
const initialState = 
    {
        id: "300",
        name: "Manchester",
        price: 50,
        status: true
    }

const EditProduct = (state = initialState, action)=>{
    switch(action.type){
        case(actionTypes.EDIT_PRODUCT):{
            state = action.product
            return {...state};
        }
        default: return {...state};
    }
}

export default EditProduct;
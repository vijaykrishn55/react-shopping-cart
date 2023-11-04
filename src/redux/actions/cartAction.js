import { ADD_TO_CART,REMOVE_FROM_CART,CHECKOUT } from "./actionTypes";

export const add_to_cart=(data)=>
{
    return{
        type:ADD_TO_CART,
        payload:data,
    }

}
export const remove_from_cart=(data_id)=>
{
    return{
        type:REMOVE_FROM_CART,
        payload:data_id,

    }

}
export const checkout=()=>
{
    return{
        type:CHECKOUT,
    }
}
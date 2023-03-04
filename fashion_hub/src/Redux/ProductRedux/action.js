import axios from "axios";
import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST,POST_PRODUCT_SUCCESS,PATCH_PRODUCT_SUCCESS } from "./actiontypes"

export const getProductSuccess=(payload)=>{
    return {type:GET_PRODUCT_SUCCESS,payload};
};


export const productRequest=()=>{
    return {type:PRODUCT_REQUEST};
}

export const productFailure=()=>{
    return {type:PRODUCT_FAILURE};
}

export const postProductSuccess=()=>{
    return {type:POST_PRODUCT_SUCCESS};
}

export const getProduct=(params)=>(dispatch)=>{
    dispatch(productRequest());
    axios.get("https://fashion-hub-r5a1.onrender.com/product",params).then((res)=>{
        dispatch(getProductSuccess(res.data));
        // console.log(res.data);
    }).catch(()=>{
        dispatch(productFailure());
    })
}

export const addProduct=(payload)=>(dispatch)=>{
    dispatch(productRequest());
    axios.post("https://fashion-hub-r5a1.onrender.com/product", payload).then(()=>{
        dispatch(postProductSuccess());
    }).catch(()=>{
        dispatch(productFailure());
    })
}

export const editProduct=(id,newData)=>(dispatch)=>{
    dispatch(productRequest());
    axios.patch(`https://fashion-hub-r5a1.onrender.com/product/${id}`,newData).then(()=>{
        dispatch({type:PATCH_PRODUCT_SUCCESS})
    }).catch(()=>{
        dispatch(productFailure());
    })
}
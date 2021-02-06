import {GET_IMAGES, PUT_IMAGES} from "./constants";

export const getImages=()=>{
    return{
        type:GET_IMAGES,
    }
}

export const putImages=(data:any)=>{
    return{
        type:PUT_IMAGES,
        payload:data
    }
}
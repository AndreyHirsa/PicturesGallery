import {GET_IMAGES, PUT_IMAGES} from "../actions/constants";

const imagesState:any=[]
export const imagesReducer=(state=imagesState,action:any)=>{
    switch (action.type){
        case PUT_IMAGES:
            return action.payload
        default:return state
    }
}
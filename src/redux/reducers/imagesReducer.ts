import {PUT_IMAGES} from "redux/actions/constants";
import {ImagesActionsType} from "interfaces/IImagesActions";

const imagesState: string[] = [];

export const imagesReducer = (state = imagesState, action: ImagesActionsType) => {
    switch (action.type) {
        case PUT_IMAGES:
            return action.payload;
        default:
            return state;
    }
}
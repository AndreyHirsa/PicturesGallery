import {PUT_IMAGES} from "redux/actions/constants";

export interface IPutImages {
    type: typeof PUT_IMAGES
    payload: {
        data: string[]
    }
}

export type ImagesActionsType = IPutImages;

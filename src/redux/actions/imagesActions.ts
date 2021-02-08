import { ImagesActionsType } from 'interfaces/IImagesActions';
import { GET_IMAGES, PUT_IMAGES } from './constants';

export const getImages = ():ImagesActionsType => ({
    type: GET_IMAGES,
});

export const putImages = (data:string[]):ImagesActionsType => ({
    type: PUT_IMAGES,
    payload: data,
});

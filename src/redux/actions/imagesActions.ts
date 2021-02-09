import { ImagesActionsType, IPutImages } from 'interfaces/IImagesActions';
import { GET_IMAGES, PUT_IMAGES } from './constants';

export const getImages = ():ImagesActionsType => ({
    type: GET_IMAGES,
});

export const putImages = (data:IPutImages['payload']):ImagesActionsType => ({
    type: PUT_IMAGES,
    payload: data,
});

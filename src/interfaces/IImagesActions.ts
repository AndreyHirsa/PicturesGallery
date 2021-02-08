import { GET_IMAGES, PUT_IMAGES } from 'redux/actions/constants';

export interface IGetImages{
  type:typeof GET_IMAGES
}

export interface IPutImages {
  type: typeof PUT_IMAGES;
  payload: string[];
}

export type ImagesActionsType = IPutImages | IGetImages;

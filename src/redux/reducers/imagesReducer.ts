import { PUT_IMAGES } from 'redux/actions/constants';
import { ImagesActionsType } from 'interfaces/IImagesActions';

export const imagesInitialState: string[] = [];

export const imagesReducer = (
    state = imagesInitialState,
    action: ImagesActionsType,
):typeof imagesInitialState => {
    switch (action.type) {
    case PUT_IMAGES:
        return action.payload;
    default:
        return state;
    }
};

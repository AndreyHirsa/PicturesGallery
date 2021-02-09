import { RootState } from 'interfaces/RootStateType';
import { createSelectorHook } from 'react-redux';
import { errorMessageInitialState } from 'redux/reducers/errorMessageReducer';
import { imagesInitialState } from 'redux/reducers/imagesReducer';
import { signUpInitialState } from 'redux/reducers/signUpReducer';
import { userInitialState } from 'redux/reducers/userStateReducer';

const useSelector = createSelectorHook<RootState>();
export const useUserState = (): typeof userInitialState =>
    useSelector((state) => state.userStateReducer);
export const useErrorMessageState = (): typeof errorMessageInitialState =>
    useSelector((state) => state.errorMessageReducer);
export const useImagesState = (): typeof imagesInitialState =>
    useSelector((state) => state.imagesReducer);
export const useSignUpState = (): typeof signUpInitialState =>
    useSelector((state) => state.signUpReducer);

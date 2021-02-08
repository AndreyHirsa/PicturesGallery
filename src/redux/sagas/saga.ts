import {
    call,
    CallEffect,
    ForkEffect,
    put,
    PutEffect,
    takeEvery,
} from 'redux-saga/effects';
import { GET_IMAGES, LOG_IN, SIGN_UP } from 'redux/actions/constants';
import { logInFailure, signUpFailure } from 'redux/actions/errorMessageActions';
import { logInSuccess } from 'redux/actions/userStateActions';
import { rsf } from 'services/firebaseService';
import { putImages } from 'redux/actions/imagesActions';
import { signUpSuccess } from 'redux/actions/signUpActions';
import { ISignUp, SignUpActionsType } from 'interfaces/ISignUpActions';
import { ILogIn, UserStateActionsType } from 'interfaces/IUserStateActions';
import { ErrorMessageActionsType } from 'interfaces/IErrorMessageActions';
import { ImagesActionsType } from 'interfaces/IImagesActions';

function* createUserSaga({
    payload,
}: ISignUp): Generator<
  | CallEffect<unknown>
  | PutEffect<SignUpActionsType>
  | PutEffect<ErrorMessageActionsType>,
  void,
  string
> {
    try {
        yield call(
            rsf.auth.createUserWithEmailAndPassword,
            payload.email,
            payload.password
        );
        yield put(signUpSuccess());
    } catch (error) {
        yield put(signUpFailure(error.message));
    }
}

function* loginSaga({
    payload,
}: ILogIn): Generator<
  | CallEffect<unknown>
  | PutEffect<UserStateActionsType>
  | PutEffect<ErrorMessageActionsType>,
  void,
  Record<string, unknown>
> {
    try {
        const user = yield call(
            rsf.auth.signInWithEmailAndPassword,
            payload.email,
            payload.password
        );
        yield put(logInSuccess(user));
    } catch (error) {
        yield put(logInFailure(error.message));
    }
}

function* loadImages(): Generator<
  CallEffect<unknown> | PutEffect<ImagesActionsType>,
  void,
  string[]
  > {
    try {
        const data = yield call(rsf.database.read, 'pictures');
        yield put(putImages(Object.values(data)));
    } catch (error) {
        yield put(putImages([]));
    }
}

export function* userAuth(): Generator<ForkEffect<never>, void, unknown> {
    yield takeEvery(SIGN_UP, createUserSaga);
    yield takeEvery(LOG_IN, loginSaga);
    yield takeEvery(GET_IMAGES, loadImages);
}

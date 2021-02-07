import {takeEvery, call, put} from "redux-saga/effects";
import {GET_IMAGES, LOG_IN, SIGN_UP} from "redux/actions/constants";
import {logInFailure, signUpFailure} from "redux/actions/errorMessageActions";
import {logInSuccess} from "redux/actions/userStateActions";
import {rsf} from "services/firebaseService";
import {putImages} from "redux/actions/imagesActions";
import {signUpSuccess} from "../actions/signUpActions";

function* createUserSaga(data: any) {
    try {
        yield call(
            rsf.auth.createUserWithEmailAndPassword,
            data.payload.email,
            data.payload.password
        );
        yield put(signUpSuccess())
    } catch (error) {
        yield put(signUpFailure(error.message));
    }
}

function* loginSaga(data: any) {
    try {
        const user = yield call(
            rsf.auth.signInWithEmailAndPassword,
            data.payload.email,
            data.payload.password
        );
        yield put(logInSuccess(user));
    } catch (error) {
        yield put(logInFailure(error.message));
    }
}

function* loadImages() {
    try {
        const data = yield call(rsf.database.read, 'pictures');
        yield put(putImages(Object.values(data)));
    } catch (error) {
        yield put(putImages([]));
    }
}

export function* userAuth() {
    yield takeEvery(SIGN_UP, createUserSaga);
    yield takeEvery(LOG_IN, loginSaga);
    yield takeEvery(GET_IMAGES, loadImages)
}

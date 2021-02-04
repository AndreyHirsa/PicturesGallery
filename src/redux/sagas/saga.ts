import {
  LOG_IN,
  SIGN_UP,
  signUpSuccess,
  logInSuccess,
  signUpFailure,
  logInFailure,
  SIGN_OUT,
  signOutSuccess,
} from "redux/actions/actions";
import { takeEvery, call, put } from "redux-saga/effects";
import { rsf } from "services/firebaseService";


function* createUserSaga(data: any) {
  try {
    const user = yield call(
      rsf.auth.createUserWithEmailAndPassword,
      data.payload.email,
      data.payload.password
    );
    yield put(signUpSuccess(user));
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

function* signOutSaga() {
  try {
    const data = yield call(rsf.auth.signOut);
    yield put(signOutSuccess(data));
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

export function* userAuth() {
  yield takeEvery(SIGN_UP, createUserSaga);
  yield takeEvery(LOG_IN, loginSaga);
  yield takeEvery(SIGN_OUT, signOutSaga);
}

import { takeEvery, call, put } from "redux-saga/effects";
import { LOG_IN, SIGN_OUT, SIGN_UP } from "redux/actions/constants";
import { logInFailure, signUpFailure } from "redux/actions/errorMessageActions";
import { logInSuccess } from "redux/actions/logInActions";
import { signOutFailure } from "redux/actions/signOutActions";
import { rsf } from "services/firebaseService";

function* createUserSaga(data: any) {
  try {
    yield call(
      rsf.auth.createUserWithEmailAndPassword,
      data.payload.email,
      data.payload.password
    );
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
    yield call(rsf.auth.signOut);
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

export function* userAuth() {
  yield takeEvery(SIGN_UP, createUserSaga);
  yield takeEvery(LOG_IN, loginSaga);
  yield takeEvery(SIGN_OUT, signOutSaga);
}

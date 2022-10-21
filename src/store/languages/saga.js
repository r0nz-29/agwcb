import {call, put, takeEvery} from "redux-saga/effects";
import {GET_IMAGES, GET_LANGS, GET_RANDOM} from "./actionTypes";
import {_getImages, _getLangs, _getRandom} from "../../api";
import {
  getImagesFail,
  getImagesSuccess,
  getLangsFail,
  getLangsSuccess,
  getRandomFail,
  getRandomSuccess,
} from "./actions";

function* onGetLangs() {
  try {
    const languages = yield call(_getLangs);
    yield put(getLangsSuccess(languages));
  } catch (err) {
    yield put(getLangsFail(err));
  }
}

function* onGetRandom() {
  try {
    const languages = yield call(_getRandom);
    yield put(getRandomSuccess(languages));
  } catch (err) {
    yield put(getRandomFail(err));
  }
}

function* onGetImages({payload: language}) {
  try {
    const languages = yield call(_getImages, language);
    yield put(getImagesSuccess(languages));
  } catch (err) {
    yield put(getImagesFail(err));
  }
}

function* langsSaga() {
  yield takeEvery(GET_LANGS, onGetLangs);
  yield takeEvery(GET_RANDOM, onGetRandom);
  yield takeEvery(GET_IMAGES, onGetImages);
}

export default langsSaga;
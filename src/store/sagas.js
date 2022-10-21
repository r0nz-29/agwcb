import {all, fork} from "redux-saga/effects";
import langsSaga from "./languages/saga";

function* rootSaga() {
  yield all([
    fork(langsSaga),
  ]);
}

export default rootSaga;
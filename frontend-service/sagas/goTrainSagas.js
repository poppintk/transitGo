import { put, takeEvery, all } from "redux-saga/effects";

const delay = ms => new Promise(res => setTimeout(res, ms));

function* helloSaga() {
  console.log("Hello Sagas!");
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* goTrainSagas() {
  yield all([helloSaga()]);
}

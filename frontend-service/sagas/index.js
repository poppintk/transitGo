import { fork } from "redux-saga/effects";
import goTrainSagas from "./goTrainSagas";

export default function* rootSaga() {
  yield fork(goTrainSagas);
}

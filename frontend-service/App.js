import React, { Component } from "react";
import { initStore } from "./store/store";
import { Provider } from "react-redux";
import Home from "./components/Home";
import StationDetail from "./components/StationDetail";

const store = initStore();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

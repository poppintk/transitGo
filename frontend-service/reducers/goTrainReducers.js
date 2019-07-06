import { TEST_ACTION } from "../actions/goTrainActions";

const initState = { test: "abc" };

const goTrainReducers = (state = initState, action) => {
  console.log("reducer");
  switch (action.type) {
    case TEST_ACTION: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default goTrainReducers;

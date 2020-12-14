import keplerGlReducer from "kepler.gl/reducers";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {taskMiddleware} from "react-palm/tasks";

const reducer = combineReducers({
  keplerGl: keplerGlReducer//,
  // combine with any other redcucers below
  //app: appReducer
});

const store = createStore(reducer, {}, applyMiddleware(taskMiddleware));
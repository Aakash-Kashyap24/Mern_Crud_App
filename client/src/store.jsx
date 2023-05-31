import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import DataReducer from "./reducers/ProductReducer";



const reducer = combineReducers({

    Data:DataReducer
});



const middleware = [thunk];

const store = createStore(
    reducer,
   
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// import * as actions from './actions'; TODO

const state = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export  {
    state,
    // actions
};
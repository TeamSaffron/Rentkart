import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';


let middlewares = applyMiddleware(thunk);
const store = createStore(reducer, middlewares);

export default store;

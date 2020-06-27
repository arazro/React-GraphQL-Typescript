import { createStore, applyMiddleware, compose } from 'redux';
import { repositoryReducer } from '../Reducers/Reducer';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  markets: [],
  ticker: []
};
const middlewares = [thunkMiddleware];
export const store = createStore(
  repositoryReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
  ),
);
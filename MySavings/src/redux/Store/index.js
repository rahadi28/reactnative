import {combineReducers, createStore} from 'redux';
import {UserActiveReducer} from '../Reducers';

const AppReducer = combineReducers({
  UserActive: UserActiveReducer,
});

const RootReducer = (state, action) => {
  if (action === 'LOGOUT') {
    state = undefined;
  }
  return AppReducer(state, action);
};

const Store = createStore(RootReducer);

export default Store;

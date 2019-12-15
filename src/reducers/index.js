import {combineReducers} from 'redux';
import devs from './devReducer';
import pedidos from './pedidoReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  devs, pedidos, form: formReducer
});

export default rootReducer;

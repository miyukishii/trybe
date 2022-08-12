const combineReducers = require('redux');
// import meuReducer from './meuReducer';
// import meuOutroReducer from './meuOutroReducer';

const reducerCombinado = combineReducers({
    meuReducer,
    meuOutroReducer});
    
modelu.export = { reducerCombinado };
const Redux = require('redux');
// Importando o reducer combinado que fizemos logo acima
const { reducerCombinado } = require('./reducerCombinado');

const store = createStore(reducerCombinado);
// console.log(store.getState())
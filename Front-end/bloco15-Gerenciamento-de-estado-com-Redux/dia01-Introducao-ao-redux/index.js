const Redux = require('redux');

// vamos criar uma pequena store e vamos acessá-la, retornando o estado que guardamos nela e criando uma action para alterá-lo.

const fazerLogin = (email) => ({
    type: "LOGIN",
    email});  

const ESTADO_INICIAL = {
  login: false,
  email: "",
};

// O reducer recebe como primeiro parâmetro um state, sendo que seu retorno substituirá o state da store.

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
          ...state,
          login: !state.login,
          email: action.email,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

const store = Redux.createStore(reducer);

//Vamos verificar o output quando acessamos a store com a função getState().



store.subscribe(() => {
    console.log(store.getState());
  });

  store.dispatch(fazerLogin("alguem@email.com"));

// Mas e se precisarmos alterar o dado que está no estado? A peça que tem esta função é a action! Uma action é um objeto JavaScript que tem pelo menos uma propriedade type e é responsável por comunicar ao reducer uma mudança a ser feita na store. 
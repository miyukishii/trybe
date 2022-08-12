// Com o uso do Redux, será necessário em alguns momentos, você salvar dados que veio de forma assíncrona no Store. Só o Redux não será o suficiente, visto que ele suporta somente fluxo síncrono de dados.

// Logo, será necessário o uso de outros pacotes, entre ele o mais popular: redux-thunk.

// Este pacote provê uma interface simples para dar suporte a action crators que geram action assíncronas, tornando a app mais completa.

// Thunk é uma função que chama outra função que existe o disparo de ações, conseguindo retornar o objeto e não uma promise.

// thunk creator:
// function thunkCreator() {
//   (dispatch, getState) {

//   }
// }

// redux-thunk é um middleware, um interceptor, que captura todas as actions enviadas pela store antes de chegar a um reducer.

// Caso a action seja uma função, é chamado com dispatch e ainda é chamado o state.
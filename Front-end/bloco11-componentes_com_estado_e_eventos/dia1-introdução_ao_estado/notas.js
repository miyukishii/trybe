// Componentes são junções de diferentes pequenas peças reutilizáveis e com lógica isolada. São como funções JavaScript.
// Props são partes de um componente, são por elas que se passa os valores para os componentes, tornando-as reutilizáveis em diferentes contextos. São como parâmetros de uma funçao.
// Um estado representa um momento de um componente dinâmico.
// Se o seu componente é um relógio, o estado atual dele é a hora atual.
// O estado dos componentes é o que dá dinamismo às páginas do React.
// React só permite funções dentro da classe. 
// No React, cada componente cuida das suas informações.
// Eventos em React, são como eventListeners do JavaScript. 
// this é um objeto JavaScript que representa uma classe, um componente com tudo o que ele tem. O React cria este objeto e entrega para a gente.
// a função do React chamada constructor(), gera um elemento, é uma função interna e podemos redefiní-la. Para que seja renderizado a nossa lógica, devemos utilizar a funçaõ super(). Para usar o this dentro do constructor() é necessário chamar o super() antes.

// EXEMPLO:

// class App extends React.Component {
//     constructor(props) {
//       // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
//       super()
  
//       // Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor
//     }
  
//     render() {
//       return <span>Meu componente!</span>
//     }
//   }
  
//   export default App;


// State VS Props
// props são uma fomra de passar dados de pai para filho.São valores fixos que um componente recebe e não altera.
// state é reservado para dados que seu componente controla. É o estado do componente, serve para guardar valores do Compnente que mudam com o uso do mesmo.
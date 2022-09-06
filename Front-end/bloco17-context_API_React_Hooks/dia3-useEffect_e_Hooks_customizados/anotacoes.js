// A proposta do Hooks é trazer a componentes funcionais tudo o que componentes de classem fornecem. As funcionalidades providas pelo lifecycle methods são trazidas pelo useEffect.

// O useEffect foi desenvolvido para ser uma função que pode ser executada em diferentes momentos do ciclo de vida do componente.

// Para que isso aconteça o hook recebe, geralmente, doi parâmetros, uma callback e um array.

// useEffect(() => {}, []);

// Se temos uma função e não temos um array 
// useEffect(() => {});
// Esta função eexecutará toda vez que componente sofrer qualquer tipo de alteração e redenrizar. Pode causar loop infinito.

// Se temos uma função e um array vazio
// useEffect(() => {}, []);
// Neste caso, a função será executada similarmente ao 'componentDidMount', rodando apenas uma vez e na montagem do componente.

// Se temos uma função, e um array com um ou mais parâmetros:
// useEffect(() => {}, [variável1, variável2, variável3]);
// Se assemelhar ao componentDidUpdate, será executado sempre que houver mudança em alguma das variáveis especificadas.

// Se temos uma função retornando uma outra função, e o segundo parâmetro pode conter array populado ou não.
//   useEffect(() => {
//     return () => {}
// }, []);
// Você deve definir essa função sempre que precisar limpar algo criado por seu efeito (como algum _timer_, por exemplo). função presente no retorno se comporta como `componentWillUnmount`.
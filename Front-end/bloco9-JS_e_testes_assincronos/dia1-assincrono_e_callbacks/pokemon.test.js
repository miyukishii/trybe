// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./exercicio2.js')

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');
    function callback(err, result) {
        expect(err).toEqual(expectedError);
        done();
    }
  
    getPokemonDetails((pokemon) => pokemon.name === 'gato', callback);
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    const expectedResult = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';
    function callback(err, result) {
        expect(result).toEqual(expectedResult)
        done();
    }
  
    getPokemonDetails((pokemon) => pokemon.name === 'Bulbasaur', callback);
  });
});
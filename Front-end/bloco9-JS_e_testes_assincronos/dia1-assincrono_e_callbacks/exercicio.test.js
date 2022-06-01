const uppercase = require('./exercicio.js')

describe('Testa a função uppercase', () => {
  it('Testa se a função uppercase, retorna uma string em letras maiúsculas', (done) => {
    uppercase('oi', (func) => {
      try {
        expect(func).toBe('OI');
        done()
      } catch (error) {
        done(error);
      }
    })
  });
});

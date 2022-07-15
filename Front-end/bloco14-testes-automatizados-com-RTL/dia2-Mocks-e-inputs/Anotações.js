// Mock function, umas das principais ferramentas que nos permitem simular o comportamento de funções reais apenas no escopo do teste.
// É importante para ter uma boa cobertura de teste aumentando a confiabilidade da aplicação, controlando todos os seus comportamentos.


// O objectivo de mockar uma finção, módulo ou requisição é permitir a quem desenvolve ter controle sobre todo o funcionamento de seus testes.

// método jest.fn() é a forma mais simples de mockar algo, transformando a função em uma simulação.

// com o método mockReturnValue(value) podermos especificar qual vai ser o retorno padrão da função.

/// o método mockReturnValueOne(value) sobrepõe o mockReturnValue(value).

// Diferente do jest.fn() que mocka uma função por vez, tem o método jest.mock() que consegue mockar todo um pacote de dependências ou módulo de uma vez.
// ex: jest.mock("./math");

// o método mockImplementation(func) aceita uma função que deve ser usada como implementação.

// o jest.spyOn() é capaz de verificar efeitos colaterais de uma função, 'espiando' a chamada da função simulada.
// ex:   const mockSomar = jest.spyOn(math, "somar");

// o método para resetar ou restaurar mocks:
// mock.mockCLear() -> útil quando deseja limpar os dados de uso de uma simulação entre dois expects.
// mock.mckReset() -> faz o que o mockClear() faz, remove qualquer retorno estipualado ou implementação, útil quando deseja resetar uma simulação para seu estado inicial.
// mock.mockRestore() -> faz tudo o que o mockReset() faz, restaura implementação origial, útil para quando quer simular funções em certos testes e restaurar implementação original em outros.

// ex:   math.somar = jest.fn().mockImplementation((a, b) => a - b);

// clicar no input, dgitar no input, e ver se apertar no botão é realizado requisição.
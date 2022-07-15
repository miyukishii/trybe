const service = require('./service');
const { it } = require('@jest/globals');

describe("Testing Service's Functions", () => {
  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);

 it('Should render a random number between 0 and 100', () => {
    service.randomNumberRender = jest.fn().mockReturnValue(10);

    expect(service.randomNumberRender()).toBe(10);
    expect(service.randomNumberRender).toHaveBeenCalled();
    expect(service.randomNumberRender).toHaveBeenCalledTimes(1);
  });

  it('Should divide the first parameter by the second parameter', () => {
    // 2 - Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez.

    service.randomNumberRender = jest.fn().mockImplementation((a, b) => a / b);

    expect(service.randomNumberRender(4, 2)).toBe(2);
    expect(service.randomNumberRender).toHaveBeenCalled();
    expect(service.randomNumberRender).toHaveBeenCalledTimes(1);
  });

  it('Should multiply the 3 parameters', () => {
    // 3/1 - Utilize o mock e desenvolva uma nova implementação que receba três parâmetros
    
    service.randomNumberRender = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.randomNumberRender(2, 3, 2)).toBe(12);
    expect(service.randomNumberRender).toHaveBeenCalled();
    expect(service.randomNumberRender).toHaveBeenCalledTimes(1);
    expect(service.randomNumberRender).toHaveBeenCalledWith(2, 3, 2);
  });

  it('Should return the double of he parameter', () => {
    // 3/2 - Resete sua implementação e crie uma nova, que receba apenas um parâmetro e retorne o dobro.
    
    service.randomNumberRender.mockReset();
    expect(service.randomNumberRender).toHaveBeenCalledTimes(0);

    service.randomNumberRender = jest.fn().mockImplementation((a) => a * 2);

    expect(service.randomNumberRender(2)).toBe(4);
    expect(service.randomNumberRender).toHaveBeenCalled();
    expect(service.randomNumberRender).toHaveBeenCalledTimes(1);
    expect(service.randomNumberRender).toHaveBeenCalledWith(2);
  });

  it('Should return a low case string', () => {
    // 4/1 - Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa.

    expect(service.UpperCaseString('meia')).toBe('MEIA');
    expect(service.randomNumberRender).toHaveBeenCalledTimes(1);

    service.UpperCaseString = jest.spyOn(service, "UpperCaseString" ).mockImplementation((string) => string.toLowerCase());

    expect(service.UpperCaseString('MEIA')).toBe('meia');
    expect(service.randomNumberRender).toHaveBeenCalledTimes(1);
  });

  it('Should return the last letter from a string', () => {
    // 4/2 - Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string.

    service.returnFirstLetter =jest.fn().mockImplementation((string) => string[string.length - 1]);

    expect(service.returnFirstLetter('meia')).toBe('a');
    expect(service.returnFirstLetter).toHaveBeenCalledTimes(1);
  });

  it('Should concat three strings', () => {
    // 4/3 - Implemente, na terceira função: ela deve receber três strings e concatená-las.

    service.concatStrings =jest.fn().mockImplementation((first, second, third) => first.concat(second.concat(third)));

    expect(service.concatStrings("pijama", "de", "bolinhas")).toBe('pijamadebolinhas');
    expect(service.concatStrings).toHaveBeenCalledTimes(1);
  });

  it('Should return a Upper Case String', () => {
    // 4/4 - Após criar os testes, restaure a implementação da primeira função.

    service.UpperCaseString.mockRestore();

    expect(service.UpperCaseString("lowercase")).toBe("LOWERCASE");
  });

  it('Should return request success', async () => {
    // 5/1- O primeiro deve interpretar que a requisição se resolveu e teve como valor "request success".
    service.fetchDog.mockResolvedValue("request success");
    service.fetchDog();

    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    await expect(service.fetchDog()).resolves.toBe("request success");
  });

  it('Should return request failed', async () => {
    // 5/1- O primeiro deve interpretar que a requisição se resolveu e teve como valor "request success".
    service.fetchDog.mockResolvedValue("request failed");
    service.fetchDog();

    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    await expect(service.fetchDog()).resolves.toBe("request failed");
  });
});
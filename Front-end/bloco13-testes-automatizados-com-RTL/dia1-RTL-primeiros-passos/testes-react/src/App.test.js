import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Tela de inserção de email', () => {
  it('Verifica se existe um input de email na tela', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('E-mail');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe("email");
  });

  it('Verifica se existem dois botões na tela', () => {
    render(<App />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
  });

  it('Verifica se o botão de enviar está sendo renderizado', () => {
    render(<App />);
    const sendButton = screen.getByTestId("id-send");
    expect(sendButton).toBeInTheDocument();
    expect(sendButton).toHaveValue('enviar');
  });

  it('Verifica que, ao digitar o email e clicar em Enviar, o email é renderizado', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('E-mail');
    const sendButton = screen.getByTestId('id-send');
    const userEmail = screen.getByTestId('id-email-user');

    //utilizar userEvent para interagir com os elementos
    userEvent.type(inputEmail, 'test@test.com');
    userEvent.click(sendButton);

    expect(inputEmail).toHaveValue('');
    expect(userEmail).toHaveTextContent('Valor: test@test.com')
  });
});

  // o render() renderiza qual componente a ser testado, é uma função.
  // o objeto screen através do seletores acessa um elemento
  // o seletor getBylBaelText vai no componente e pega uma label que tem o texto email e retorna o input relacionado a ela.
  // 1 etapa - acessa os elementos da tela
  // 2 etapa - interagir com os elementos ( se necessário )
  // 3 etapa -  fazer os teste.
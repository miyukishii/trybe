import { render, screen } from '@testing-library/react';
import App from './App';

describe('Teste do app Jokes', () => {
  test('Exibe o título Jokes na tela', () => {
    render(<App />);
    const linkElement = screen.getByText(/jokes/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Exibe o texto da piada na tela', async () => {
    const expectedJoke = "My wife told me to rub the herbs on the meat for better flavor. That's sage advice.";

    // global.fetch = jest.fn(() => Promise.resolve({
    //   json: () => Promise.resolve({joke: expectedJoke}),
    // }));

    global.fetch = jest.fn(async () => ({
      json: async () => ({joke: expectedJoke})
    }));

    render(<App />);
    const joke = await screen.findByRole('heading',{ level: 3});
    expect(joke).toBeInTheDocument();
    const renderedJoke = await screen.findByText(expectedJoke);
    expect(renderedJoke).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
  
  });
});


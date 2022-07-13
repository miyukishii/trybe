import React from 'react';
import './App.css';
import ValidEmail from './ValidEmail';

class App extends React.Component {
  state = {
    email: '',
    saveEmail:'',
  };

  handelChange = ({ target }) => {
    const { value } = target;
    this.setState({
      email: value,
    })
  }

  saveInput = () => {
    const { email } = this.state;
    this.setState({
      saveEmail: email,
      email: '',
    })
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <section>
        <form>
          <label htmlFor="email">E-mail
          <input type="email" id="email" name="email" value={ email } onChange={ this.handelChange } />
          </label>
          <button data-testid="id-send" type="button" value="enviar" onClick={ this.saveInput }>Enviar</button>
          <button type="button">Voltar</button>
        </form>
        <ValidEmail email={ saveEmail } />
      </section>
    );
  }
}

export default App;

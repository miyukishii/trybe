import React from 'react';
import './App.css';

// function handleClickButtonOne() {
//   console.log('Clicou no botão 1')
// }

// function handleClickButtonTwo() {
//   console.log('Clicou no botão 2')
// }

// function handleClickButtonThree() {
//   console.log('Clicou no botão 3')
// }

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };

    this.handleClickButtonOne = this.handleClickButtonOne.bind(this);
    this.handleClickButtonTwo = this.handleClickButtonTwo.bind(this);
    this.handleClickButtonThree = this.handleClickButtonThree.bind(this);
  }
    handleClickButtonOne() {
      console.log('"this" do botão 1 :', this);

      this.setState((estadoAnterior, _props) => ({
        clicksBtnOne: estadoAnterior.clicksBtnOne + 1
      }))
    }

    handleClickButtonTwo() {
      console.log('Clicou no botão 2');

      this.setState((estadoAnterior, _props) => ({
        clicksBtnTwo: estadoAnterior.clicksBtnTwo + 1
      }))
    }

    handleClickButtonThree() {
      console.log('Clicou no botão 3');

      this.setState((estadoAnterior, _props) => ({
        clicksBtnThree: estadoAnterior.clicksBtnThree + 1
      }))
    }
  render() {
    return (
      <div className='button-section'>
        <button onClick={this.handleClickButtonOne}>Clique aqui {this.state.clicksBtnOne}</button>
        <button onClick={this.handleClickButtonTwo}>Clique aqui {this.state.clicksBtnTwo}</button>
        <button onClick={this.handleClickButtonThree}>Clique aqui {this.state.clicksBtnThree}</button>
      </div>
    )
  }
}

export default App;

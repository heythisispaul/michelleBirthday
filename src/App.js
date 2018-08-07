import React, { Component } from 'react';
import './App.css';
import LoginWindow from './components/LoginWindow';
import BirthdayZone from './components/BirthdayZone';
import Love from './components/Love';

class App extends Component {

  state = {
    password: '',
    loggedIn: false,
    selected: 'love'
  }

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  }

  handleSubmit = () => {
    if (this.state.password == 'birthdayzone') {
      return this.setState({ loggedIn: true });
    }
    document.getElementById('passwordBox').classList.add('shakeAnimate');
    this.setState({ password: '' });
    setTimeout(() => {
      document.getElementById('passwordBox').classList.remove('shakeAnimate');
    }, 550);
  }

  toggleButton = (buttonVal) => {
    this.setState({ selected: buttonVal });
  }

  render() {

    return (
      <div id="container" className="containerBirthdayZone">
        {
          this.state.loggedIn && this.state.selected == 'brews' ? <BirthdayZone toggleButton={this.toggleButton} /> 
          : this.state.loggedIn && this.state.selected == 'love' ? <Love toggleButton={this.toggleButton} />
          : <LoginWindow handlePassword={this.handlePassword} passwordVal={this.state.password} handleSubmit={this.handleSubmit} />
        }
      </div>
    );
  }
}

export default App;

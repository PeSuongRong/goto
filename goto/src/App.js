import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Login from './components/user/login';
import Registration from './components/user/registration';
import Home from './components/homepage/home';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
        <Login />
        <Registration />
      </div>
    );
  }
}

export default App;

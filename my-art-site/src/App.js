import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
// import Nav from './components/Nav'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
      
    </div>
  );
}

export default App;

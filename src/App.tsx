import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my configuration of React, ESLint, Stylelint and Prettier in Visual Studio Code
          for React development using Typescript.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://create-react-app.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Create React App
        </a>
        <a
          className="App-link"
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Typescript
        </a>
        <a
          className="App-link"
          href="https://eslint.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn ESLint
        </a>
        <a
          className="App-link"
          href="https://prettier.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Prettier
        </a>
        <a
          className="App-link"
          href="https://stylelint.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Stylelint
        </a>
      </header>
    </div>
  );
}

export default App;

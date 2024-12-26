import React, { useEffect } from 'react';
import { App as Framework7App } from 'framework7-react';
import HomePage from '../pages/home';

const App = () => {
  useEffect(() => {
    const f7App = new Framework7App();
    f7App.init(); // инициализация после рендера
  }, []); // Пустой массив для однократной инициализации

  return (
    <Framework7App themeDark={false}>
      <HomePage />
    </Framework7App>
  );
};

export default App;

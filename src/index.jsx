import React from 'react';
import ReactDOM from 'react-dom';  // Для работы с новым API React 18
import App from '../src/components/app';  // Импортируем главный компонент приложения

// Создаем корневой элемент
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
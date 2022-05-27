import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ItemsProvider } from './contexts/collection_context';
import { FilterProvider } from './contexts/filter_context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ItemsProvider>
      <FilterProvider>
        <App /> 
      </FilterProvider>
    </ItemsProvider>
  </React.StrictMode>
);


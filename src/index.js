import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { coreTheme } from './theme/core';
import GlobalContextProvider from './context/global.context';

const theme = extendTheme({
  ...coreTheme,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </ChakraProvider>
);

reportWebVitals();

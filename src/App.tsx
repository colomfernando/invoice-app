import React from 'react';
import GlobalStyles from 'theme/GlobalStyles';
import { lightMode } from 'theme';
import Home from 'pages/index';
import Invoice from 'pages/invoice';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={lightMode}>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/invoice" element={<Invoice />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

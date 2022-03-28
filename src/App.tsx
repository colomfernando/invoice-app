import React from 'react';
import GlobalStyles from 'theme/GlobalStyles';
import { lightMode } from 'theme';
import Home from 'pages/index';
import Invoice from 'pages/invoice';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={lightMode}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import GlobalStyles from 'theme/GlobalStyles';
import { useSelector } from 'react-redux';
import { lightMode, darkMode } from 'theme';
import { State } from 'store/types';
import Home from 'pages/index';
import EditInvoice from 'pages/EditInvoice';
import CreateInvoice from 'pages/CreateInvoice';
import DetailsInvoice from 'pages/DetailsInvoince';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  const { theme } = useSelector((state: State) => state);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === 'lightMode' ? lightMode : darkMode}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invoice/:id/edit" element={<EditInvoice />} />
          <Route path="/invoice/:id" element={<DetailsInvoice />} />
          <Route path="/invoice/create" element={<CreateInvoice />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

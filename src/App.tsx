import React from 'react';
import GlobalStyles from 'theme/GlobalStyles';
import Home from 'pages/index';
import Invoice from 'pages/invoice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { MainPage } from '../src/pages/Main';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
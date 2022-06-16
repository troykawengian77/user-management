import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./page/Home'));
const Details = lazy(() => import('./page/Details'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App
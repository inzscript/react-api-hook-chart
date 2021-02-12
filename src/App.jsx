import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import CoinDetailPage from './pages/CoinDetailPage';
import CoinSummaryPage from './pages/CoinSummaryPage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={CoinSummaryPage} />
      </BrowserRouter>
      </div>
  );
}

export default App;

import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import CoinDetailPage from './pages/CoinDetailPage';
import CoinSummaryPage from './pages/CoinSummaryPage';
import Header from './components/Header';
import { WatchListContextProvider } from './contexts/watchListContext';

function App() {
  return (
    <div className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={CoinSummaryPage} />
        </BrowserRouter>
      </WatchListContextProvider>
      </div>
  );
}

export default App;

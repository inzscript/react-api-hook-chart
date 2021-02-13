import React, { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  console.log(localStorage.getItem("watchList").split(","));
  // Create a base list of Crypto Currency for Dropdown
  const [watchList, setWatchList] = useState(
    localStorage.getItem("watchList").split(",") || 
    [
      "bitcoin",
      "ethereum",
      "ripple",
      "litecoin",
    ]
  );

  // Add list of coins to local storage.
  useEffect(() => {
    localStorage.setItem("watchList", watchList);
    // add dependency to watchList
  }, [watchList]);

  // Remove coin from watchlist onClick event.
  const deleteCoin = (coin) => {
    setWatchList(
      watchList.filter((el) => {
        return el !== coin;
      })
    );
  };

  // Add coin to list
  const addCoin = (coin) => {
    // Check to see if the coin is not already in the list. if value > 0 the it's in the list.
    if (watchList.indexOf(coin) === -1) {
      setWatchList([...watchList, coin]);
    }
  };

  return (
      // Create the Provider to render props list
    <WatchListContext.Provider value={{ watchList, deleteCoin, addCoin }}>
      {props.children}
    </WatchListContext.Provider>
  );
};
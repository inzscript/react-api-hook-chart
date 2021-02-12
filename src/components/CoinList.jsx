import React, { useEffect, useState, useContext } from 'react';
import coinGecko from '../apis/coinGecko';
import axios from 'axios';
import { WatchListContext } from '../contexts/watchListContext';
import Coin from './Coin';


function CoinList() {
    const [coins, setCoins] = useState([]);
    // Destructure the watchlist props
    const { watchList, deleteCoin } = useContext( WatchListContext );
    // Loading screen State
    const [ isLoading, setIsLoading ] = useState(false);
    // console.log( watchList );
    useEffect (() => {
        const fetchData = async () => {
            setIsLoading(true);
            // GET call to coinGecko
            const response = await coinGecko.get("/coins/markets", {
                params: {
                    vs_currency: "usd",
                    // Use context to generate list of bitcoins
                    ids: watchList.join(","),
                },
            });
            setCoins(response.data);
            setIsLoading(false);
            console.log(response.data);
        }

        // check if list is not empty
        if (watchList.length > 0) {
            fetchData();
            // Set coins to an empty array.
        } else setCoins([]);

        // Include dependency list to include list of bitcoins to the new state and render the list.
    }, [watchList]);

    const renderCoins = () => {
        if (isLoading) {
          return <div>Loading...</div>;
        }

        return (
            <ul className="coinlist list-group mt-2">
                {coins.map((coin) => {
                    // Pass prop action for view and delete coin.
                    return <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin} />;
                })}
            </ul>

        )
    }

    return <div>{renderCoins()}</div>;
};

export default CoinList

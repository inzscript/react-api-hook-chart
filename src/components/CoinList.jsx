import React, { useEffect, useState, useContext } from 'react';
import coinGecko from '../apis/coinGecko';
import axios from 'axios';
import { WatchListContext } from '../contexts/watchListContext';

function CoinList() {
    const [coins, setCoins] = useState([]);
    // Destructure the watchlist props
    const { watchList } = useContext( WatchListContext );
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

        fetchData()
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default CoinList

import React, { useEffect, useState, useContext } from 'react';
import coinGecko from '../apis/coinGecko';
import axios from 'axios';

function CoinList() {
    const [coins, setCoins] = useState([])
    useEffect (() => {
        const fetchData = async () => {
            // GET call to coinGecko
            const response = await coinGecko.get("/coins/markets", {
                params: {
                    vs_currency: "usd",
                    ids: "bitcoin,ethereum"
                }
            })
            console.log(response.data);
        }

        fetchData()
    })
    return (
        <div>
            
        </div>
    )
}

export default CoinList

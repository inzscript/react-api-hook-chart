import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HistoryChart from '../components/HistoryChart';
import CoinData from '../components/CoinData';
import coinGecko from '../apis/coinGecko';

function CoinDetailPage() {
    const {id} = useParams();
    const [coinData, setCoinData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    // const formatData = (data) => {
    // return data.map((el) => {
    //     return {
    //     t: el[0],
    //     y: el[1].toFixed(2),
    //     };
    // });
    // };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            // Destructure the request information needed.
            const [day, week, year, detail] = await Promise.all([
                coinGecko.get(`/coins/${id}/market_chart/`, {
                    params: {
                        vs_currency: "usd",
                        days: "1",
                    },
                }),
                coinGecko.get(`/coins/${id}/market_chart/`, {
                    params: {
                        vs_currency: "usd",
                        days: "7",
                    },
                }),
                coinGecko.get(`/coins/${id}/market_chart/`, {
                    params: {
                        vs_currency: "usd",
                        days: "365",
                    },
                }),
                coinGecko.get("/coins/markets/", {
                    params: {
                        vs_currency: "usd",
                        ids: id,
                    },
                }),
            ]);
            console.log(day);
        
            setCoinData({
                day: day.data.prices,
                week: week.data.prices,
                year: year.data.prices,
                // Get the first element of the json data
                detail: detail.data[0],
            });
            setIsLoading(false);
        };
    
        fetchData();
    }, []);

    const renderData = () => {
        <div className="coinlist">
            <HistoryChart />
            <CoinData />
        </div>
    };

    return (
        <div>
            
        </div>
    )
}

export default CoinDetailPage

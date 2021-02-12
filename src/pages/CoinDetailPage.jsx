import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HistoryChart from '../components/HistoryChart';
import CoinData from '../components/CoinData';
import coinGecko from '../apis/coinGecko';

function CoinDetailPage() {
    const {id} = useParams();
    const [coinData, setCoinData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    // Convert Data from array of arrays => array of objects
    const formatData = (data) => {
    return data.map((el) => {
        return {
        t: el[0],
        // truncate to two demial places.
        y: el[1].toFixed(2),
        };
    });
    };

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
                day: formatData(day.data.prices),
                week: formatData(week.data.prices),
                year: formatData(year.data.prices),
                // Get the first element of the json data
                detail: detail.data[0],
            });
            setIsLoading(false);
        };
    
        fetchData();
    }, []);

    const renderData = () => {
        if (isLoading) {
            return <div>Loading....</div>;
        } 
        return ( 
            <div className="coinlist">
                {/* Send data prop */}
                <HistoryChart data={coinData}/>
                <CoinData />
            </div>
        );
    };

    return renderData();

};

export default CoinDetailPage

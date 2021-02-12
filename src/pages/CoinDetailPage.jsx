import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CoinDetailPage() {
    const {id} = useParams();
    const [coinData, setCoinData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    console.log( id );

    // const formatData = (data) => {
    // return data.map((el) => {
    //     return {
    //     t: el[0],
    //     y: el[1].toFixed(2),
    //     };
    // });
    // };

    return (
        <div>
            
        </div>
    )
}

export default CoinDetailPage

import React, { useState, useContext } from 'react';
import { WatchListContext } from '../contexts/watchListContext';

// Uses bootsrap dropdown
function AddCoin() {
    const [isActive, setIsActive] = useState(false);
    const { addCoin } = useContext(WatchListContext);
    const availableCoins = [
        "bitcoin",
        "ethereum",
        "ripple",
        "tether",
        "bitcoin-cash",
        "litecoin",
        "eos",
        "okb",
        "tezos",
        "cardano",
    ];

    // Add coin and close dropdown menu.
    const handleClick = (coin) => {
        addCoin(coin);
        setIsActive(false);
    };

    return (
        <div className="dropdown">
        <button
            // toggle button visible
            onClick={() => setIsActive(!isActive)}
            className="btn btn-primary dropdown-toggle"
            type="button"
        >
            Add Coin
        </button>
        {/* dynamically render to show dropdown list */}
        <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
            {/* Reiterate over list of coins */}
            {availableCoins.map((el) => {
            return (
                <a
                    onClick={() => handleClick(el)}
                    href="#"
                    className="dropdown-item"
                    >
                    {el}
                </a>
            );
            })}
        </div>
        </div>
    )
}

export default AddCoin

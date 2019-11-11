import React from 'react';
import './Coin.css';
import CoinTura from './1-lira-tura.png';
import CoinYazi from './1-lira-yazi.png';

const Coin = (props) => {
  return (
    <div className="Coin-container">
      <div className={`Coin ${props.donuyor ? 'Coin-rotate' : ''}`}>
        <img src={CoinTura} className={(props.side === 'yazi' ? 'Coin-back' : 'Coin-front')} alt="tura" />
        <img src={CoinYazi} className={(props.side === 'yazi' ? 'Coin-front' : 'Coin-back')} alt="yazi" />
      </div>
    </div>
  )
}

export default Coin;

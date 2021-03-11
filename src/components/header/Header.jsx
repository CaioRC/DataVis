import React from 'react';

import './Header.css';

import nobelCoin from '../../assets/nobelCoin.png'

const Header = () => (
    <div className="header">
        <div className="headerContent">
            <div className="headerInfo">
                <h1>Uma Breve história sobre o Prêmio Nobel</h1>
                <p>Desde 1901, um grupo seleto de pessoas recebe aquele que se tornou uma das distinções mais valorizadas no mundo: o Prêmio Nobel.</p>
            </div>
            <img className="nobelCoin" src={nobelCoin} alt="NobelPrizeCeremony" />
        </div>
    </div>
)
export default Header;
// https://live.staticflickr.com/8497/8262556134_d14d67c4e0_c.jpg
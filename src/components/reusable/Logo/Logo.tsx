import React from 'react';
import LogoStyles from './Logo.module.css';

let logo = require('../../../img/Woodyservicelogo.png');

export const Logo: React.FC = () => {
    return (
        <div className= {LogoStyles.main}>
            <div className= {LogoStyles.container}><img src= {logo} alt="logo" />
            </div>
        </div>
    )
}
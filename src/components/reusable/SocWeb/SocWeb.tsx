import React from 'react';
import SocWebStyles from './SocWeb.module.css';

let vk = require('../../../img/вк.png');
let telegram = require('../../../img/телеграм.png');
let whatsapp = require('../../../img/ватсапп.png');
let insta = require('../../../img/инста.png');
let vkWhite = require('../../../img/вкWhite.png');
let telegramWhite = require('../../../img/телеграмWhite.png');
let whatsappWhite = require('../../../img/ватсаппWhite.png');
let instaWhite = require('../../../img/инстаWhite.png');

interface IProps {
    isWhite?: boolean,
    isFooter?: boolean,
}

export const SocWeb: React.FC<IProps> = props => {
    return (
        <div className= {props.isFooter ? SocWebStyles.main + ' ' + SocWebStyles.top : SocWebStyles.main}>
            <div className= {SocWebStyles.container}>
                <a className= {SocWebStyles.link} href="https://vk.com/" target = '__blank'><img src= {props.isWhite ? vkWhite : vk} alt="" /></a>
                <a className= {SocWebStyles.link} href="https://telegram.org/" target = '__blank'><img src= {props.isWhite ? telegramWhite : telegram} alt="" /></a>
                <a className= {SocWebStyles.link} href="https://www.whatsapp.com/" target = '__blank'><img src= {props.isWhite ? whatsappWhite : whatsapp} alt="" /></a>
                <a className= {SocWebStyles.link} href="https://www.instagram.com" target = '__blank'><img src= {props.isWhite ? instaWhite : insta} alt="" /></a>
            </div>
        </div>
    )
}
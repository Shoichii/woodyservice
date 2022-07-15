import React from 'react';
import { Link } from 'react-router-dom';
import MenuStyles from './Menu.module.css';
let vDown = require('../../../img/footer/VectorDown.png');

interface IProps {
    isHorizontal: boolean,
    isWhite: boolean,
    elements?: JSX.Element[]
    miniMenu: boolean,
    openMenu?: (index: number) => void,
    menuArr?: Array<boolean>,
    isHeader: boolean,
    isHideHeader?:boolean,
}

export const Menu: React.FC<IProps> = props => {
    let menuStyles = props.isWhite ?
        (props.isHorizontal ? MenuStyles.menuList + " " + MenuStyles.white
            : MenuStyles.menuVerticalList + " " + MenuStyles.white)
        : (props.isHorizontal ? MenuStyles.menuList : props.isHideHeader ? MenuStyles.menuVerticalList +
            ' ' + MenuStyles.hideMenu : MenuStyles.menuVerticalList);

    let whatRepairStyles = props.isWhite ?
        MenuStyles.whatRepaier + " " + MenuStyles.white
        : MenuStyles.whatRepaier;

    return (
        <div style={{ marginLeft: props.miniMenu ? '0px' : '20px' }} className={props.miniMenu ? MenuStyles.text + " " + MenuStyles.rows : MenuStyles.text}>
            <div style={{ margin: props.miniMenu || props.isWhite ? '0px' : '10px' }}
                className={menuStyles}>
                <div onClick={() => {
                    if (props.openMenu) {
                        props.openMenu(0)
                    }
                }} className={MenuStyles.menuTitle}>
                    {!props.isHorizontal && <p>Меню</p>}
                    {props.miniMenu && <img src={vDown} alt="vectorDown" />}
                </div>
                <div className={props.isHeader ? MenuStyles.linksHeader : (props.miniMenu ? (props.menuArr?.[0] ? MenuStyles.links
                    : MenuStyles.links + ' ' + MenuStyles.closeMenu) : MenuStyles.links)}>
                    <Link to='/'>Главная</Link>
                    {props.isHorizontal && <Link to='/services'>Что ремонтируем</Link>}
                    <Link to='/aboutus'>О нас</Link>
                    <Link to='/reviews'>Отзывы</Link>
                    <Link to='/contacts'>Контакты</Link>
                </div>
                {props.elements && props.elements[0]}
            </div>
            {!props.isHorizontal && <div style={{ margin: props.miniMenu || props.isWhite ? '0px' : '10px auto' }} className={whatRepairStyles}>
                <div onClick={() => {
                    if (props.openMenu) {
                        props.openMenu(2)
                    }
                }} className={MenuStyles.whatRepaireTitle}>
                    <p>Ремонтируем</p>
                    {props.miniMenu && <img src={vDown} alt="vectorDown" />} 
                </div>
                <div className={props.miniMenu ? (props.menuArr?.[2] ? MenuStyles.whatRepaireData
                    : MenuStyles.whatRepaireData + ' ' + MenuStyles.closeWhatRepaireData) : MenuStyles.whatRepaireData}>
                    <p>Смартфоны</p>
                    <p>Планшеты</p>
                    <p>Ноутбуки и ПК</p>
                    <p>Игровые приставки</p>
                    <p>Видеокарты</p>
                    <p>Мелкобытовую технику</p>
                </div>
                {props.elements && props.elements[1]}
            </div>}
        </div>
    )
}
import React from 'react';
import { Menu } from '../../reusable/Menu/Menu';
import { SocWeb } from '../../reusable/SocWeb/SocWeb';
import MenuStyles from './MenuHeader.module.css';

interface IProps {
    isHorizontal: boolean,
    openMenu: boolean,
}

export const MenuHeader: React.FC<IProps> = props => {
    return (
        <div className={props.isHorizontal ? MenuStyles.menu : ( props.openMenu ? 
        MenuStyles.verticalMenu + ' ' + MenuStyles.verticalMenuOpen : MenuStyles.verticalMenu)}>
            <div className={props.isHorizontal ? MenuStyles.menuContainer : MenuStyles.verticalMenuContainer}>
                <Menu isHideHeader = {true} isHeader ={props.isHorizontal ? true : false} isWhite ={false} isHorizontal = {props.isHorizontal} miniMenu = {false} />
                {!props.isHorizontal && <div className= {MenuStyles.socWeb}>
                    <SocWeb />
                </div>}
            </div>
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import { Menu } from '../reusable/Menu/Menu';
import { SocWeb } from '../reusable/SocWeb/SocWeb';
import FooterStyles from './Footer.module.css';
const logo = require('../../img/Woodyservicelogo.png');
const send = require('../../img/footer/send.png');
const vDown = require('../../img/footer/VectorDown.png');

export const Footer: React.FC = () => {
    const [width, setWidth] = useState<number>(0);
    const [menu, setMenu] = useState<Array<boolean>>([false, false, true]);

    let openMenu = (index: number) => {
        setMenu(menu.map((item, i) => {
            if (i === index) {
                return true;
            } else {
                return false;
            }
        }))
    }

    let c = <p className={FooterStyles.c}>© 2022 WoodyService</p>;

    let contacts = <div className={FooterStyles.contacts}>
        <p onClick={() => openMenu(1)} className={FooterStyles.contactsTitle}>
            <p>Контакты</p>
            {width < 550 && <img src={vDown} alt="vectroDown" />}
        </p>
        <div className={width < 550 ? (menu[1] ? FooterStyles.contactsData 
        : FooterStyles.contactsData + ' ' + FooterStyles.closeContactsData) : FooterStyles.contactsData}>
            <p>г. Сургут, ул. Игоря Киртбая 11, ТЦ «Альфа»</p>
            <p>woodysurgut@yandex.ru</p>
            <p>+7 3462 593 000</p>
        </div>
    </div>

    let policy = <p className={FooterStyles.policy}>Политика конфеденциальности</p>

    let callUs = <div className={FooterStyles.callUs}>
        <div className={FooterStyles.callUsTitle}>
            Остались вопросы?<br /> Мы позвоним :)
        </div>
        <div className={FooterStyles.yourPhone}>
            <input type="text" placeholder='Номер телефона' />
            <button><img src={send} alt="send" /></button>
        </div>
        <div className={FooterStyles.text}>Нажимая на кнопку “отправить”,
            вы даёте согласие на обработку персональных данных</div>
        {width > 900 && policy}
    </div>

    let elements = [contacts, callUs];

    useEffect(() => {
        setWidth(document.documentElement.clientWidth);
        window.addEventListener('resize', () => {
            setWidth(document.documentElement.clientWidth);
        })
    }, [width])

    return (
        <div className={FooterStyles.main}>
            <div className={FooterStyles.container}>
                <div className={FooterStyles.logoInfo}>
                    <div className={FooterStyles.logo}>
                        <img src={logo} alt="" />
                    </div>
                    {width < 550 ? <SocWeb isFooter={true} isWhite={true} /> : <SocWeb isWhite={true} />}
                    {width >= 550 && c}
                    {width <= 900 && width >= 550 && policy}
                </div>
                <div className={FooterStyles.menu}>
                    {width > 900 ? <Menu
                        isWhite={true}
                        isHorizontal={false}
                        miniMenu={false}
                        isHeader ={false}
                    />
                        : width < 550 ? <Menu
                            isWhite={true}
                            isHorizontal={false}
                            elements={elements}
                            miniMenu={true}
                            openMenu={openMenu}
                            menuArr={menu}
                            isHeader ={false}
                        /> :
                            <Menu
                                isWhite={true}
                                isHorizontal={false}
                                elements={elements}
                                miniMenu={false}
                                isHeader ={false}
                            />}
                </div>
                {width > 900 && contacts}
                {width > 900 && callUs}
                {width < 550 && <div className={FooterStyles.lastRow}>
                    {c}
                    {policy}
                </div>}
            </div>
        </div>
    )
}
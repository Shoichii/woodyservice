import React, { useEffect, useState } from 'react';
import { SocWeb } from '../reusable/SocWeb/SocWeb';
import { TitleText } from '../reusable/TitleText/TitleText';
import OurContactsStyles from './OurContacts.module.css';
import { Button } from './../reusable/Button/Button';
const map = require("../../img/ourContacts/map.png");
const location = require("../../img/ourContacts/location.png");
const call = require("../../img/ourContacts/call.png");
const chat = require("../../img/ourContacts/chat.png");
const photo = require('../../img/ourContacts/photo.png');

export const OurContacts: React.FC = () => {
    let [width, setWidth] = useState<number>(0);
    let [showPhoto, setShowPhoto] = useState<boolean>(true);

    useEffect(() => {
        setWidth(document.documentElement.clientWidth);
        window.addEventListener('resize', () => {
            setWidth(document.documentElement.clientWidth);
        })
        if (width < 900) {
            setShowPhoto(false);
        } else {
            setShowPhoto(true);
        }

    }, [width])


    return (
        <div className={OurContactsStyles.main}>
            <div className={OurContactsStyles.container}>
                <div className={OurContactsStyles.title}>
                    <TitleText
                        title='Наши контакты'
                        showButton={false}
                        isWhite={false}
                        whiteSubtitle={false}
                    />
                </div>
                <div className={OurContactsStyles.ourContacts}>
                    <div id='map' className={OurContactsStyles.map}>
                        <img src={map} alt="карта" />
                    </div>
                    <div className={OurContactsStyles.contacts}>
                        <div className={OurContactsStyles.contactsContainer}>
                            <div className={OurContactsStyles.callUs}>
                                <p className={OurContactsStyles.boldTitle}>Свяжитесь с нами</p>
                                <div className={OurContactsStyles.contact}><img src={location} alt="" /> <p>г.Сургут ул. И.Киртбая 11, ТЦ "Alfa", 3 этаж</p> </div>
                                <div className={OurContactsStyles.contact}><img src={chat} alt="" /> <p>woodysurgut@yandex.ru</p> </div>
                                <div className={OurContactsStyles.contact}><img src={call} alt="" /> <p>+7 (3462) 59-30-00</p> </div>
                            </div>
                            <div className={OurContactsStyles.socWebs}>
                                <p className={OurContactsStyles.boldTitle}>Подписывайтесь на нас</p>
                                <div className={OurContactsStyles.subscribe}>
                                    <SocWeb />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={OurContactsStyles.request}>
                    {showPhoto && <div className={OurContactsStyles.photo}>
                        <img src={photo} alt="фото" />
                    </div>}
                    <div className={OurContactsStyles.submitRequest}>
                        <TitleText
                            title='Не забудьте оставить заявку'
                            showButton={false}
                            isWhite={false}
                            whiteSubtitle={false}
                        />
                        <div className={OurContactsStyles.twoFields}>
                            <input type="text" placeholder='Ваше имя' />
                            <input type="text" placeholder='Ваш номер телефона' />
                        </div>
                        <input className={OurContactsStyles.model} type="text" placeholder='Укажите производителя и модель устройтва' />
                        <textarea className={OurContactsStyles.problem} placeholder='Опишите проблему'></textarea>
                        <div className={OurContactsStyles.button}>
                            <Button />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
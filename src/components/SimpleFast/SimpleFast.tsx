import React, { useEffect, useState } from 'react';
import { Button } from '../reusable/Button/Button';
import { TitleText } from '../reusable/TitleText/TitleText';
import SimpleFastStyles from './SimpleFast.module.css';
let photo = require('../../img/SimpleFast/photo.png');

export const SimpleFast: React.FC = () => {
    const [width, setWidth] = useState<number>(0);
    const [showPhoto, setShowPhoto] = useState<Boolean>(true);

    useEffect(() => {
        setWidth(document.documentElement.clientWidth);
        if( width < 900) {
            setShowPhoto(false);
        } else {
            setShowPhoto(true)
        }
        window.addEventListener('resize', () => {
            setWidth(document.documentElement.clientWidth);
            if( width < 900) {
                setShowPhoto(false);
            } else {
                setShowPhoto(true)
            }
        })
    },[width]);

    return (
        <div className={SimpleFastStyles.main}>
            <div className={SimpleFastStyles.container}>
                <div className={SimpleFastStyles.title}>
                    <TitleText
                        title='Заказать ремонт у нас - просто и быстро'
                        isWhite={false}
                        whiteSubtitle={false}
                        showButton={false}
                    />
                </div>
                <div className={SimpleFastStyles.content}>
                    {showPhoto && <div className={SimpleFastStyles.photo}>
                        <img src={photo} alt="" />
                    </div>}
                    <div className={SimpleFastStyles.form}>
                        <p className={SimpleFastStyles.formTitle}>Заполните форму и мы свяжемся с Вами</p>
                        <div className={SimpleFastStyles.fields}>
                            <div className={SimpleFastStyles.fields1}>
                                <input type="text" placeholder='Ваше имя' />
                                <select name="" id="">
                                    <option>Выберите производителя</option>
                                </select>
                            </div>
                            <div className={SimpleFastStyles.fields2}>
                                <input placeholder='Ваш номер телефона' />
                                <select>
                                    <option>Выберите модель</option>
                                </select>
                            </div>
                        </div>
                        <div className={SimpleFastStyles.area}>
                            <textarea placeholder='Детальное описание проблемы'></textarea>
                        </div>
                        <div className={SimpleFastStyles.button}>
                            <Button buttonText='ОТПРАВИТЬ ЗАЯВКУ' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
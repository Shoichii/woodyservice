import React, { useEffect, useState } from 'react';
import { TitleText } from '../reusable/TitleText/TitleText';
import FeelCareStyles from './FeelCare.module.css';

let time = require("../../img/careIcons/time.png");
let phone = require("../../img/careIcons/phone.png");
let money = require("../../img/careIcons/money.png");
let pic = require("../../img/careIcons/2.png");

export const FeelCare: React.FC = () => {
    let [width, setWidth] = useState<number>(0);
    let [changeTextPlace, setChangeTextPlace] = useState<boolean>(false);
    let [showPic, setShowPic] = useState<boolean>(true);

    let icons = [time, phone, money];
    let titles = ['Платите только за сложное', 'Не тратьте время на дорогу', 'Оставайтесь на связи'];
    let subTitles = ['Берём деньги только за результат. А мелкий и несложный ремонт делаем бесплатно',
        'Мы сами заберём устройство, а после ремонта привезём обратно',
        'Предоставим резервный телефон на время ремонта, чтобы вас никто не потерял'];

    useEffect(() => {
        setWidth(document.documentElement.clientWidth);
        window.addEventListener('resize', () => {
            setWidth(document.documentElement.clientWidth);
        })
        if (width <= 1040) {
            setChangeTextPlace(true);
        } else {
            setChangeTextPlace(false);
        }

        if (width <= 650) {
            setShowPic(false);
        } else {
            setShowPic(true);
        }
    }, [width])

    return (
        <div className={FeelCareStyles.main}>
            <div className={FeelCareStyles.container}>
                {changeTextPlace && <TitleText title='Почувствуйте нашу заботу о вас'
                    showButton={false}
                    isWhite={true}
                    needCenter={true}
                    whiteSubtitle = {false} />}
                <div className={FeelCareStyles.pic}>
                    <div className={FeelCareStyles.picContainer}>
                        <img src={pic} alt="" />
                    </div>
                </div>
                <div className={FeelCareStyles.contant}>
                    <div className={FeelCareStyles.contantContainer} >
                        {!changeTextPlace && <TitleText title='Почувствуйте нашу заботу о вас'
                            showButton={false}
                            isWhite={true}
                            needCenter={true}
                            whiteSubtitle = {false} />}
                        <div className={FeelCareStyles.cards}>
                            {icons.map((item, index) => {
                                return (
                                    <div className={FeelCareStyles.card}>
                                        <div className={FeelCareStyles.cardContainer}>
                                            {showPic && <div className={FeelCareStyles.icon}>
                                                <img src={item} alt="" />
                                            </div>}
                                            <div className={FeelCareStyles.text}>
                                                <p className={FeelCareStyles.title}>{titles[index]}</p>
                                                <p className={FeelCareStyles.subTitle}>{subTitles[index]}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
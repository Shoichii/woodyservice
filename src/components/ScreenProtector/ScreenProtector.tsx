import React, { useCallback, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { TitleText } from '../reusable/TitleText/TitleText';
import ScreenProtectorStyles from './ScreenProtector.module.css';
import { Scrollbar } from 'swiper';

let smaller = require('../../img/scrreenProtector/smaller.png');
let bigger = require('../../img/scrreenProtector/bigger.png');

export const ScreenProtector: React.FC = () => {
    let [width, setWidth] = useState<number>(0);
    let [isSlider, setIsSlider] = useState<boolean>(false);
    let [mobile, setMobile] = useState<boolean>(false);

    let showSlider = useCallback((): void => {
        setWidth(document.documentElement.clientWidth);
        if (width <= 769) {
            setIsSlider(true);
        } else {
            setIsSlider(false);
        }

        if (width <= 600) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }, [width])


    let addElemWithoutSlider = <p className={ScreenProtectorStyles.discount}>
        Оставьте заявку и получите скидку 15% на наши
        <a href='#' className={ScreenProtectorStyles.any}> ЛЮБЫЕ</a> услуги</p>;

    let addElemWithSlider = <div className={ScreenProtectorStyles.mobileSlider}><Swiper className='swiper5'
    modules={[Scrollbar]}
    scrollbar = {{
        draggable: true,
    }}
    initialSlide = {2}
    centeredSlides = {true}
    breakpoints = {{
        320: {
            slidesPerView: 1.5,
        },
        420: {
            slidesPerView: 1.8,
        },
        520: {
            slidesPerView: 2.1,
        }
    }}
    >
        {[...Array(7)].map(() => {
            return (
                <SwiperSlide>
                    <div className= {ScreenProtectorStyles.mobileSlide}>
                        <img src={bigger} alt="" />
                    </div>
                </SwiperSlide>
            )
        })}
    </Swiper>
        <p className={ScreenProtectorStyles.discount}>
            Оставьте заявку и получите скидку 15% на наши
            <a href='#' className={ScreenProtectorStyles.any}> ЛЮБЫЕ</a> услуги</p></div>;

    let withoutSlider = <div className={ScreenProtectorStyles.photos}>
        <div className={ScreenProtectorStyles.photosBlock1}>
            <img src={smaller} alt="" />
            <img src={bigger} alt="" />
        </div>
        <div className={ScreenProtectorStyles.photosBlock2}>
            <img src={bigger} alt="" />
            <img src={smaller} alt="" />
        </div>
    </div>;

    let withSlider = <Swiper className='swiper4'
        slidesPerView={0.9}
        modules={[Scrollbar]}
        scrollbar={{
            draggable: true,
        }}
    >
        {[...Array(6)].map(item => {
            return (
                <SwiperSlide>
                    <div className={ScreenProtectorStyles.photos}>
                        <div className={ScreenProtectorStyles.photosBlock1}>
                            <img src={smaller} alt="" />
                            <img src={bigger} alt="" />
                        </div>
                        <div className={ScreenProtectorStyles.photosBlock2}>
                            <img src={bigger} alt="" />
                            <img src={smaller} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            )
        })}
    </Swiper>

    useEffect(() => {
        showSlider()
        window.addEventListener('resize', () => {
            showSlider()
        })
    }, [showSlider])

    return (
        <div className={ScreenProtectorStyles.main}>
            <div className={ScreenProtectorStyles.container}>
                <div className={ScreenProtectorStyles.request}>
                    <TitleText title='Защитите гаджет бронеплёнкой, чтобы носить его без чехла'
                        showButton={true}
                        buttonText='ЗАКАЗАТЬ УСЛУГИ'
                        isWhite={false}
                        smaller={true}
                        subTitle='Оклеим любое ваше устройство в защитную полиуретановую или текстурную плёнку. Оклеиваем телефоны, планшеты, ноутбуки, часы, наушники, приставки и… даже айкосы!'
                        addElem={mobile ? addElemWithSlider : addElemWithoutSlider}
                        whiteSubtitle = {false}
                    />
                </div>
                {!mobile && (isSlider ? withSlider : withoutSlider)}
            </div>
        </div>
    )
}
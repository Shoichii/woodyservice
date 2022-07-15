import React, { useEffect, useState } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TitleText } from '../reusable/TitleText/TitleText';
import RepairStyles from './Repair.module.css';
let q1 = require('../../img/Repair/1.png');
let q2 = require('../../img/Repair/2.png');
let q3 = require('../../img/Repair/3.png');
let q4 = require('../../img/Repair/4.png');
let q5 = require('../../img/Repair/5.png');
let q6 = require('../../img/Repair/6.png');
let q7 = require('../../img/Repair/7.png');
let q8 = require('../../img/Repair/8.png');
let white = require('../../img/Repair/white.png');

export const Repair: React.FC = () => {
    const [width, setWidth] = useState<number>(0);
    const [slider, setSlider] = useState<boolean>(false);

    let bgArr = [q1, q2, q3, q4, q5, q6, q7, q8];
    let names = ['Замена дисплея', 'Ремонт зарядного', 'Замена аккамулятора', 'Замена дисплея',
        'Ремонт фотокамеры', 'Замена дисплея', 'Замена дисплея', 'Общая диагностика'];
    let sliderNames = [names.filter((_, index) => index % 2 === 0), names.filter((_, index) => index % 2 !== 0)];

    useEffect(() => {
        setWidth(document.documentElement.clientWidth);
        if (width < 555) {
            setSlider(true);
        } else {
            setSlider(false);
        }
        window.addEventListener('resize', () => {
            setWidth(document.documentElement.clientWidth);
            if (width < 555) {
                setSlider(true);
            } else {
                setSlider(false);
            }
        })
    },[width])

    return (
        <div className={RepairStyles.main}>
            <div className={RepairStyles.container}>
                <TitleText
                    title='Мы предлагаем ремонт от А до я'
                    subTitle='Большой спектр услуг по ремонту и предотвращению поломок у смартфонов'
                    showButton={false}
                    isWhite={false}
                    whiteSubtitle={false}
                />

                {slider ? <div className={RepairStyles.detailsSlider}>
                    <Swiper className='swiper7'
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    centeredSlides = {false}
                    initialSlide = {0}
                    breakpoints = {{

                    }}
                    >
                        {sliderNames.map((item, index) => {
                            let sliceStart: number = -4;
                            let sliceEnd: number = 0;
                            sliceStart += 4;
                            sliceEnd += 4;
                            return (
                                <SwiperSlide>
                                    {bgArr.slice(sliceStart,sliceEnd).map((el, i) => {
                                        return (
                                            <div style={{ background: `url(${index === 0 ? el : bgArr[i + 4]})`, backgroundRepeat: 'no-repeat' }}
                                                className={RepairStyles.deviceSlider}>
                                                <div className={RepairStyles.deviceContainer}>
                                                    <img src={white} alt="" />
                                                    <p>{item[i]}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>

                    : <div className={RepairStyles.details}>{bgArr.map((item, index) => {
                        return (
                            <div style={{ background: `url(${item})`, backgroundRepeat: 'no-repeat' }}
                                className={RepairStyles.device}>
                                <div className={RepairStyles.deviceContainer}>
                                    <img src={white} alt="" />
                                    <p>{names[index]}</p>
                                </div>
                            </div>
                        )
                    })}</div>}
            </div>
        </div >
    )
}
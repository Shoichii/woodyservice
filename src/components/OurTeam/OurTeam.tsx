import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TitleText } from '../reusable/TitleText/TitleText';
import OurTeamStyles from './OurTeam.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../swiperCSS/swiperStyles.css';

let ava = require('../../img/ava.png');

export const OurTeam: React.FC = () => {
    let [slider, setSlider] = useState<boolean>(false);
    let [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        setWindowWidth(document.documentElement.clientWidth);
        window.addEventListener('resize', () => {
            setWindowWidth(document.documentElement.clientWidth);
        })

        if (windowWidth <= 650) {
            setSlider(true);
        } else {
            setSlider(false);
        }
    }, [windowWidth])

    return (
        <div className={OurTeamStyles.main}>
            <div className={OurTeamStyles.container}>
                <TitleText title='Знакомьтесь с нашей командой'
                    subTitle='У нас работают люди с большим опытом в сфере ремонта электроники. 
                Они не понаслышке знают, что такое кнопочные телефоны и древние деревянные компьютеры. 
                Суммарный опыт их работы 50 лет!'
                    showButton={false}
                    isWhite={false}
                    hideSubTitle={true}
                    whiteSubtitle = {false} />
                <div className={OurTeamStyles.team}>
                    {slider && <Swiper className='swiper2'
                        modules={[Navigation, Pagination, Mousewheel]}
                        navigation={true}
                        pagination={{ clickable: true }}
                        centeredSlides = {true}
                        loop = {true}
                        mousewheel = {true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            420: {
                                slidesPerView: 1.3,
                                spaceBetween: 10
                            },
                            520: {
                                slidesPerView: 1.5,
                                spaceBetween: 10
                            },
                            580: {
                                slidesPerView: 1.7,
                                spaceBetween: 10
                            },
                        }}
                    >
                        {[...Array(4)].map((item => {
                            return (
                                <SwiperSlide>
                                    <div className={OurTeamStyles.worker}>
                                        <div className={OurTeamStyles.ava}>
                                            <img src={ava} alt="" />
                                        </div>
                                        <div className={OurTeamStyles.nameCard}>
                                            <div className={OurTeamStyles.text}>
                                                <p className={OurTeamStyles.name}>Ильяс Павлов</p>
                                                <p className={OurTeamStyles.jobTitle}>директор сервиса</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }))}
                    </Swiper>}
                    {!slider && [...Array(4)].map((item => {
                        return (
                            <div className={OurTeamStyles.worker}>
                                <div className={OurTeamStyles.ava}>
                                    <img src={ava} alt="" />
                                </div>
                                <div className={OurTeamStyles.nameCard}>
                                    <div className={OurTeamStyles.text}>
                                        <p className={OurTeamStyles.name}>Ильяс Павлов</p>
                                        <p className={OurTeamStyles.jobTitle}>директор сервиса</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }))}
                </div>
            </div>
        </div >
    )
}
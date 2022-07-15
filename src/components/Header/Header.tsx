import React, { useEffect, useState } from 'react';
import HeaderStyles from './Header.module.css';
import { Logo } from './../reusable/Logo/Logo';
import { SocWeb } from '../reusable/SocWeb/SocWeb';
import { MenuHeader } from './MenuHeader/MenuHeader';
import { Order } from './Order/Order';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../swiperCSS/swiperStyles.css';
import { Mousewheel, Pagination } from 'swiper';

let bigExp = require('../../img/bigExp.png');
let goals = require('../../img/goals.png');
let guarantee = require('../../img/garantie.png');

export const Header: React.FC = () => {
    let [width, setWidth] = useState<number>(0);
    let [isFullMenu, setIsFullMenu] = useState<boolean>(true);
    let [showPhone, setShowPhone] = useState<boolean>(true);
    let [openMenu, setOpenMenu] = useState<boolean>(false);
    let [oneGoal, setOneGoal] = useState<boolean>(false);
    let [onSlider, setOnSlider] = useState<boolean>(false);
    let [sliderCenter, setSliderCenter] = useState<number>(0);

    let achivementsPic: Array<string> = [bigExp, goals, guarantee];
    let achivementsTitle: Array<string> = ['Большой опыт', 'Наша цель', 'Бессрочная гарантия'];
    let achivementsSubTitle: Array<string> = ['компания WoodyService основана в 2013 году',
        'стать лучшим сервисным центром в XMAO', 'каждому клиенту на любой вид техники'];



    useEffect((): void => {
        setWidth(document.documentElement.clientWidth)
        window.addEventListener('resize', () => setWidth(document.documentElement.clientWidth));
        if (width <= 960 && width > 642) {
            setOneGoal(true);
        } else {
            setOneGoal(false);
        }

        if (width < 646) {
            setOnSlider(true);
            setSliderCenter(- (760 - width) / 2);
        } else {
            setOnSlider(false);
            setSliderCenter(0);
        }

        if (width <= 768) {
            setIsFullMenu(false);
        } else {
            setIsFullMenu(true);
        }

        if (width <= 320) {
            setShowPhone(false);
        } else {
            setShowPhone(true);
        }


    }, [width])

    return (
        <div className={HeaderStyles.main}>
            <div className={HeaderStyles.header}>
                <div className={HeaderStyles.container}>
                    <Logo />
                    {isFullMenu ?
                        <MenuHeader openMenu={openMenu} isHorizontal={true} /> :
                        <MenuHeader openMenu={openMenu} isHorizontal={false} />}
                    {showPhone && <div className={HeaderStyles.phone}>
                        <p>+7 3462 593-000</p>
                    </div>}
                    {!isFullMenu && <div className={HeaderStyles.burgerMenu}>
                        <div onClick={() => setOpenMenu(!openMenu)} className={HeaderStyles.burgerWrap}>
                            <div className={openMenu ? HeaderStyles.burger + ' ' + HeaderStyles.openBurger
                                : HeaderStyles.burger}></div>
                        </div>
                    </div>}
                    {isFullMenu && <SocWeb />}
                </div>
            </div>
            <div className={HeaderStyles.order}>
                <Order width={width} setWidth={setWidth} />
            </div>
            <div className={HeaderStyles.achivements}>
                {onSlider && <Swiper style={{ left: sliderCenter + 'px' }} className='swiper1'
                    initialSlide={1}
                    slidesPerView={3}
                    spaceBetween={20}
                    centeredSlides={true}
                    slideToClickedSlide={true}
                    modules={[Mousewheel,Pagination]}
                    mousewheel = {true}
                    loop = {true}
                    pagination = {{
                        clickable: true
                    }}
                    navigation
                >
                    {achivementsPic.map((item, index) => {
                        return (
                            <SwiperSlide>
                                <div className={HeaderStyles.achivementsItem}>
                                    <div className={HeaderStyles.achivementsImg}>
                                        <img src={item} alt="" />
                                    </div>
                                    <div className={HeaderStyles.achivementsText}>
                                        <p className={HeaderStyles.achivementsTitle}>{achivementsTitle[index]}</p>
                                        <p className={HeaderStyles.achivementsSubTitle}>{achivementsSubTitle[index]}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>}
                <div className={HeaderStyles.achivementsContainer}>
                    {!onSlider &&
                        <><div className={HeaderStyles.achivementsContainerUp}>
                            {achivementsPic.map((item, index) => {
                                if (oneGoal && index === 2) {
                                    return false
                                }
                                return (
                                    <div className={HeaderStyles.achivementsItem}>
                                        <div className={HeaderStyles.achivementsImg}>
                                            <img src={item} alt="" />
                                        </div>
                                        <div className={HeaderStyles.achivementsText}>
                                            <p className={HeaderStyles.achivementsTitle}>{achivementsTitle[index]}</p>
                                            <p className={HeaderStyles.achivementsSubTitle}>{achivementsSubTitle[index]}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                            {oneGoal && <div className={HeaderStyles.achivementsContainerDown}>
                                <div className={HeaderStyles.achivementsItem}>
                                    <div className={HeaderStyles.achivementsImg}>
                                        <img src={achivementsPic[2]} alt="" />
                                    </div>
                                    <div className={HeaderStyles.achivementsText}>
                                        <p className={HeaderStyles.achivementsTitle}>{achivementsTitle[2]}</p>
                                        <p className={HeaderStyles.achivementsSubTitle}>{achivementsSubTitle[2]}</p>
                                    </div>
                                </div>
                            </div>}</>}

                </div>
            </div>
        </div >
    )
}
import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TitleText } from '../reusable/TitleText/TitleText';
import ReputationStyles from './Reputation.module.css';
import 'swiper/css';
import 'swiper/css/scrollbar';
import '../../swiperCSS/swiperStyles.css';
import { Mousewheel, Scrollbar } from 'swiper';

let quoteUp = require('../../img/reputation/quoteUP.png');
let quoteDown = require('../../img/reputation/quoteDOWN.png');
let ava1 = require('../../img/reputation/ava1.png');
let ava2 = require('../../img/reputation/ava2.png');
let ava3 = require('../../img/reputation/ava3.png');
let ava4 = require('../../img/reputation/ava4.png');
let ava5 = require('../../img/reputation/ava5.png');

export const Reputation: React.FC = () => {
    let [swiperWidth, setSwiperWidth] = useState<number>(0);
    let [containerWidth, setContainerWidth] = useState<number>(0);
    let [left, setLeft] = useState<number>(0);
    let swiper: RefObject<HTMLDivElement> = useRef(null);
    let container: RefObject<HTMLDivElement> = useRef(null);
    
    let initialPosition = useCallback(() => {
        if(swiper.current !== null && container.current !== null) {
            setSwiperWidth(swiper.current.clientWidth);
            setContainerWidth(container.current.clientWidth);
            setLeft( -(swiperWidth - containerWidth) / 2)
        } else {
            setSwiperWidth(0)
        }
    }, [swiperWidth, containerWidth,])

    let avas: Array<string> = [ava1, ava2, ava3, ava4, ava5];
    let slides = avas.length;
    let name: string = 'Юлия Михайлова';
    let review: string = `Отличный сервис! 
    Быстро, а главное профессионально ребята предоставляют услуги! 
    Вежливые все ещё и подарки дарят в виде скидок и так разных аксессуаров! 
    Не первый раз обращаюсь и всегда довольна результатом.`;

    useEffect(() => {
        initialPosition();

        window.addEventListener('resize', () => {
            initialPosition();
        })
    },[swiperWidth, containerWidth, initialPosition]);

    return (
        <div className={ReputationStyles.main}>
            <div ref = {container} className={ReputationStyles.container}>
                <div className={ReputationStyles.quoteUp}>
                    <img src={quoteUp} alt="" />
                </div>
                <div className={ReputationStyles.title}>
                    <TitleText title='МЫ ДОРОЖИМ СВОЕЙ РЕПУТАЦИЕЙ'
                        showButton={false}
                        isWhite={true}
                        whiteSubtitle = {false} />
                </div>
                <div ref = {swiper} style = {{left: left + 'px'}} className={ReputationStyles.swiper}>
                    <Swiper className='swiper3'
                    initialSlide= {slides % 2 === 0 ? (slides / 2) - 1 : (slides - 1) / 2  }
                    centeredSlides = {true}
                    modules = {[Mousewheel, Scrollbar]}
                    mousewheel = {true}
                    scrollbar = {{
                        draggable: true,
                    }}
                    breakpoints = {{
                        320:{
                            slidesPerView: 1.09
                        },
                        350:{
                            slidesPerView: 1.2
                        },
                        400:{
                            slidesPerView: 1.3
                        },
                        500:{
                            slidesPerView: 1.6
                        },
                        700:{
                            slidesPerView: 2.1
                        },
                        1000:{
                            slidesPerView: 3
                        },
                        1500:{
                            slidesPerView: 4.5
                        },
                        2200:{
                            slidesPerView: slides + 1
                        },
                        3000:{
                            slidesPerView: slides + 2
                        },
                        4300:{
                            slidesPerView: slides + 6
                        }
                    }}
                    
                    >
                        {avas.map(item => {
                            return (
                                <SwiperSlide>
                                    <div className={ReputationStyles.review}>
                                        <div className={ReputationStyles.reviewContainer}>
                                            <div className={ReputationStyles.avaTitle}>
                                                <div className={ReputationStyles.ava}>
                                                    <img src={item} alt="" />
                                                </div>
                                                <div className={ReputationStyles.title}>{name}</div>
                                            </div>
                                            <div className={ReputationStyles.reviewText}>{review}</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div className={ReputationStyles.quoteDown}>
                    <img src={quoteDown} alt="" />
                </div>
            </div>
        </div>
    )
}
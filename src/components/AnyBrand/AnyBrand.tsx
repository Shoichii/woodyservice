import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TitleText } from '../reusable/TitleText/TitleText';
import AnyBrandStyles from './AnyBrand.module.css';
const brands = require('../../img/anyBrand/brands.png');

export const AnyBrand: React.FC = () => {
    const brandsArr = [brands,brands,brands,brands];
    return (
        <div className={AnyBrandStyles.main}>
            <div className={AnyBrandStyles.container}>
                <div className={AnyBrandStyles.title}>
                    <TitleText
                        title={'Любой бренд нам по силам'}
                        subTitle={`Мы имеем большой опыт работы с техникой от различных брендов, 
                поэтому можете быть уверены в быстром и качественном ремонте. 
                В списке ниже представлена лишь часть брендов`}
                        showButton={false}
                        isWhite={true}
                        whiteSubtitle={true} />
                </div>
                <div className={AnyBrandStyles.slider}>
                    <Swiper className='swiper6'
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    breakpoints = {{
                        320: {
                            slidesPerView: 0.4,
                        },
                        420: {
                            slidesPerView: 0.5,
                        },
                        520: {
                            slidesPerView: 0.6,
                        },
                        620: {
                            slidesPerView: 0.7,
                        },
                        720: {
                            slidesPerView: 0.8,
                        },
                        820: {
                            slidesPerView: 0.9,
                        },
                        900: {
                            slidesPerView: 1,
                        },
                        920: {
                            slidesPerView: 0.9,
                        },
                        1000: {
                            slidesPerView: 1.02,
                        },
                    }}
                    >
                        {brandsArr.map(item => {
                            return (
                                <SwiperSlide>
                                    <div className={AnyBrandStyles.brand}>
                                        <img src= {item} alt="brands" />
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
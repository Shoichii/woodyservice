import React, { useEffect, useState } from 'react';
import { Button } from '../reusable/Button/Button';
import { TitleText } from '../reusable/TitleText/TitleText';
import BlogStyles from './Blog.module.css';

export const Blog: React.FC = () => {
    const [width, setWidth] = useState<number>(0);
    const [hideBlock, setHideBlock] = useState<boolean>(false);

    useEffect(() => {
        setWidth(document.documentElement.clientWidth);
        if (width < 900) {
            setHideBlock(true);
        } else {
            setHideBlock(false);
        }
        window.addEventListener('resize', () => {
            setWidth(document.documentElement.clientWidth);
            if (width < 900) {
                setHideBlock(true);
            } else {
                setHideBlock(false);
            }
        })
    }, [width])
    return (
        <div className={BlogStyles.main}>
            <div className={BlogStyles.container}>
                <div className={BlogStyles.title}>
                    <TitleText
                        title='Наш Полезный блог'
                        subTitle='Мы с радостью поделимся с Вами лайфхаками, советам и новостями на страницах коротких статей. 
                Никаких занудных и сухих фактов! Мы пишем понятным языком с капелькой юмора :)'
                        isWhite={false}
                        whiteSubtitle={false}
                        showButton={false}
                    />
                </div>
                <div className={BlogStyles.articles}>
                    <div className={BlogStyles.articleContainer}>
                        <div className={BlogStyles.article}>
                            <div className={BlogStyles.articleContent}>
                                <p className={BlogStyles.articleTitle}>Название статьи</p>
                                <p className={BlogStyles.articleDescription}>Описание....</p>
                                <a className={BlogStyles.articleReadMore} href="#">Читать</a>
                            </div>
                        </div>
                    </div>
                    <div className={BlogStyles.articleContainer}>
                        <div className={BlogStyles.article}>
                            <div className={BlogStyles.articleContent}>
                                <p className={BlogStyles.articleTitle}>Название статьи</p>
                                <p className={BlogStyles.articleDescription}>Описание....</p>
                                <a className={BlogStyles.articleReadMore} href="#">Читать</a>
                            </div>
                        </div>
                        {!hideBlock && <div className={BlogStyles.button + ' ' + BlogStyles.hideButton}>
                            <Button buttonText='Показать все' />
                        </div>}
                    </div>
                    {!hideBlock && <div className={BlogStyles.articleContainer}>
                        <div className={BlogStyles.article}>
                            <div className={BlogStyles.articleContent}>
                                <p className={BlogStyles.articleTitle}>Название статьи</p>
                                <p className={BlogStyles.articleDescription}>Описание....</p>
                                <a className={BlogStyles.articleReadMore} href="#">Читать</a>
                            </div>
                        </div>
                        <div className={BlogStyles.button}>
                            <Button buttonText='Показать все' />
                        </div>
                    </div>}
                </div>
                {hideBlock && <div className={BlogStyles.hideButton}>
                            <Button buttonText='Показать все' />
                        </div>}
            </div>
        </div>
    )
}
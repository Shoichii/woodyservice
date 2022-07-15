import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import TitleTextStyles from './TitleText.module.css';
import { Button } from './../Button/Button';

interface IProps {
    title: string,
    subTitle?: string,
    showButton: boolean,
    buttonText?: string,
    isWhite: boolean,
    needCenter?: boolean,
    hideSubTitle?: boolean,
    addElem?: ReactElement,
    smaller?: boolean,
    whiteSubtitle: boolean,
}

export const TitleText: React.FC<IProps> = props => {
    let [center, setCenter] = useState<boolean>(false);
    let [windowWidth, setWindowWidth] = useState<number>(0);
    let [hideOrShow, setHideOrShow] = useState<boolean>(false);
    let [hidden, setHidden] = useState<boolean>(true);
    let [word, setWord] = useState<string>('развернуть');
    let [subTitle, setSubTitle] = useState<string>('');

    let blackOrWhite = props.isWhite ? TitleTextStyles.title + " " + TitleTextStyles.white
    : TitleTextStyles.title;
    let blackOrWhiteSmaller = props.isWhite ? TitleTextStyles.title + " " + TitleTextStyles.white + " " +
    TitleTextStyles.titleSmaller
    : TitleTextStyles.title + " " + TitleTextStyles.titleSmaller;


    let hideString =  useCallback<(hide: boolean) => void>((hide: boolean) => {
        if (hide) {
            if (props.subTitle) {
                let subTitleArray = props.subTitle.split(' ');
                setSubTitle(subTitleArray.slice(0, subTitleArray.indexOf('Они') + 1).join(' ') + "...")
            }
        } else {
            if (props.subTitle) {
                setSubTitle(props.subTitle)
            }
        }
    },[props.subTitle])


    let show = () => {
        if (!hidden) {
            setWord('развернуть');
            setHidden(true);
            hideString(true)
        } else {
            setWord('свернуть');
            setHidden(false);
            hideString(false)
        }


    }

    useEffect(() => {
        hideString(false)

        if (props.needCenter) {
            window.addEventListener('resize', () => {
                setWindowWidth(document.documentElement.clientWidth);
            })
            if (windowWidth <= 1200) {
                setCenter(true);
            } else {
                setCenter(false);
            }
        }

        if (props.hideSubTitle) {

            window.addEventListener('resize', () => {
                setWindowWidth(document.documentElement.clientWidth);
            })
            if (windowWidth <= 650) {
                setWord('развернуть');
                setHidden(true);
                hideString(true);
                setHideOrShow(true);
            } else {
                setWord('свернуть');
                setHidden(false);
                hideString(false);
                setHideOrShow(false);
            }
        }
    }, [props.needCenter, windowWidth, props.hideSubTitle, props.subTitle, hideString])

    return (
        <div className={center ? TitleTextStyles.main + " " + TitleTextStyles.mainCenter :
            TitleTextStyles.main}>
            <p className={props.smaller ? blackOrWhiteSmaller : blackOrWhite}>{props.title}</p>
            {props.subTitle && <p style={{color: props.whiteSubtitle ? '#fff' : '#000'}} className={hideOrShow ? hidden ? TitleTextStyles.subTitleHide : TitleTextStyles.subTitleHide + " " + 
            TitleTextStyles.subTitleShow :
            TitleTextStyles.subTitle}>
                {subTitle}
                {hideOrShow && <span onClick={show} className={TitleTextStyles.hide}> {word}</span>}
            </p>}
            {props.addElem}
            {props.showButton && <Button/>}
        </div>
    )
}
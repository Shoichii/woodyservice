import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import OrderStyles from './Order.module.css';
import { TitleText } from '../../reusable/TitleText/TitleText';
import { BreadCrumbs } from './BreadCrumbs/BreadCrumbs';

let bigPhoto: string = require('../../../img/bigPhoto.png')
let photo: string = require('../../../img/photo.png');
let rect10: string = require('../../../img/Rectangle10.png');
let photoPlug: string = require('../../../img/photoPlug.png');

interface IProps {
    width: number,
    setWidth: Dispatch<SetStateAction<number>>,
}

export const Order: React.FC<IProps> = props => {
    const { width, setWidth } = props;
    const [amountDevices, setAmountDevices] = useState<boolean>(false);
    const [showPhoto, setShowPhoto] = useState<boolean>(true);
    const [whatPage, setWhatPage] = useState<string>('');

    let servicesTitle: string = 'Чиним 90% поломок у 90% смартфонов';
    let servicesSubtitle: string = 'Отремонтируем любой смартфон от 5 минут с бессрочной гарантией на работу';
    let url: string[] = document.URL.split('/');

    useEffect(() => {
        if (url[url.length - 1] === "") {
            setWhatPage("");
        } else if (url[url.length - 1] === "services") {
            setWhatPage("services");
        }

        window.addEventListener('resize', () => setWidth(document.documentElement.clientWidth));
        if (width <= 1120) {
            setAmountDevices(true);
        } else {
            setAmountDevices(false);
        }

        if (width <= 570) {
            setShowPhoto(false);
        } else {
            setShowPhoto(true);
        }
    }, [width, setWidth, url])

    return (
        <div className={OrderStyles.orderContainer}>
            <div className={OrderStyles.text}>
                {url[url.length - 1] === "services" && <div className={OrderStyles.breadcrumbs}>
                    <BreadCrumbs />
                </div>}
                <TitleText title={url[url.length - 1] === "services" ?
                    servicesTitle
                    : 'Добрый сервис по ремонту электроники'}
                    subTitle={url[url.length - 1] === "services" ?
                        servicesSubtitle
                        : 'Профессионально ремонтируем любую электронную технику в городе Сургут от 10 минут'}
                    showButton={true}
                    isWhite={false}
                    whiteSubtitle={false} />
            </div>
            <div className={OrderStyles.photos}>
                {showPhoto && <div className={whatPage === "" ? OrderStyles.firstPhoto :
                    OrderStyles.firstPhoto + " " + OrderStyles.firstPhotoServisec}>
                    {amountDevices && <p className={OrderStyles.nextPhotosRect}>
                        <div className={OrderStyles.imgText}>
                            <p>Мы отремонтировали</p>
                            <p><span>&#62;33600</span> устройств</p>
                        </div>
                        <img src={rect10} alt="rect10" />
                    </p>}
                    <img src={whatPage === "" || amountDevices ? bigPhoto : photoPlug} alt="bigPhoto" />
                </div>}
                {whatPage === "" && <div className={OrderStyles.nextPhotos}>
                    {!amountDevices && <p className={OrderStyles.nextPhotosRect}>
                        <div className={OrderStyles.imgText}>
                            <p>Мы отремонтировали</p>
                            <p><span>&#62;33600</span> устройств</p>
                        </div>
                        <img src={rect10} alt="rect10" />
                    </p>}
                    {!amountDevices && <img src={photo} alt="photos" />}
                </div>}
            </div>
        </div>
    )
}
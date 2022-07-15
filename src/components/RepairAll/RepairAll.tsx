import React from 'react';
import { TitleText } from '../reusable/TitleText/TitleText';
import RepairAllStyles from './RepairAll.module.css';

let rect1 = require('../../img/repaierBlocks/Rect1.png');
let rect2 = require('../../img/repaierBlocks/Rect2.png');
let rect3 = require('../../img/repaierBlocks/Rect3.png');
let rect4 = require('../../img/repaierBlocks/Rect4.png');
let rect5 = require('../../img/repaierBlocks/Rect5.png');
let rect6 = require('../../img/repaierBlocks/Rect6.png');
let mobile = require('../../img/devices/mobile.png');
let tablet = require('../../img/devices/tablet.png');
let pc = require('../../img/devices/pc.png');
let gamepad = require('../../img/devices/gamepad.png');
let videocard = require('../../img/devices/videocard.png');
let tv = require('../../img/devices/tv.png');

export const RepairAll: React.FC = () => {

    let imgs: Array<string> = [rect1, rect2, rect3, rect4, rect5, rect6];
    let devices: Array<string> = [mobile, tablet, pc, gamepad, videocard, tv];
    let titles: Array<string> = ['Мобильные устройства', 'Планшеты', 'Ноутбуки и компьютеры',
        'Игровые приставки и геймпады', 'Видеокарты', 'Бытовая техника'];
    let subTitles = ['Ремонтируем любые бренды смартфонов: iPhone, Samsung, Xiaomi, Huawei, ZTE, OPPO и от других производителей',
        'Заменим разбитое стекло, старую батарею, разъем зарядки, а также произведём ремонт любой другой поломки на вашем устройстве',
        'Ремонтируем обычные и игровые ноутбуки, компьютеры, моноблоки, MacBook и iMac. Мы справимся с самыми сложными поломками',
        'Если ваша приставка тормозит — не беда, мы почистим её и заменим термопасту. А если не включается обязательно оживим',
        'Восстанавливаем видеокарты на профессиональном оборудовании. Даже если они использовались для майнинга',
        'Быстро и качественно ремонтируем телевизоры, пылесосы, фены, музыкальные колонки и другую электронику']

    return (
        <div className={RepairAllStyles.main}>
            <div className={RepairAllStyles.container}>
                <TitleText title={'Ремонтируем всё — от Патифона до Айфона'}
                    subTitle={'Мы за 8 лет научились ремонтировать 90% всех возможных поломок у 90% видов техники '}
                    showButton={false} 
                    isWhite= {false} 
                    needCenter = {true}
                    whiteSubtitle = {false}/>
                <div className={RepairAllStyles.blocksContainer}>
                    <div className={RepairAllStyles.blocks}>
                        {imgs.map((item, index) => {
                            return (
                                <div style={{ background: `url(${item})` }} className={RepairAllStyles.block}>
                                    <div className={RepairAllStyles.blockContainer}>
                                        <p className={RepairAllStyles.title}>{titles[index]}</p>
                                        <div className={RepairAllStyles.blockContent}>
                                            <div className={RepairAllStyles.image}>
                                                <img src={devices[index]} alt="" />
                                            </div>
                                            <div className={RepairAllStyles.textButton}>
                                                    <p className={RepairAllStyles.subTitle}>{subTitles[index]}</p>
                                                    <p className={RepairAllStyles.button}><a href="#">Подробнее</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}
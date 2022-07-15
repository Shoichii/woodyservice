import React from 'react';
import MainPageStyles from './MainPage.module.css';
import { Header } from './../Header/Header';
import { RepairAll } from './../RepairAll/RepairAll';
import { FeelCare } from './../FeelCare/FeelCare';
import { OurTeam } from '../OurTeam/OurTeam';
import { Reputation } from './../Reputation/Reputation';
import { ScreenProtector } from './../ScreenProtector/ScreenProtector';
import { AnyBrand } from './../AnyBrand/AnyBrand';
import { OurContacts } from './../OurContacts/OurContacts';
import { AnswerQuestions } from '../AnswerQuestions/AnswerQuestions';
import { Footer } from '../Footer/Footer';

export const MainPage: React.FC = () => {
    return (
        <div className={MainPageStyles.main}>
            <Header />
            <RepairAll/>
            <FeelCare/>
            <OurTeam/>
            <Reputation/>
            <ScreenProtector/>
            <AnyBrand/>
            <OurContacts/>
            <AnswerQuestions/>
            <Footer/>
        </div>
    )
}
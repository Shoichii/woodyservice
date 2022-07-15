import React from 'react';
import { AnswerQuestions } from '../AnswerQuestions/AnswerQuestions';
import { AnyBrand } from '../AnyBrand/AnyBrand';
import { Blog } from '../Blog/Blog';
import { FeelCare } from '../FeelCare/FeelCare';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { OurContacts } from '../OurContacts/OurContacts';
import { OurTeam } from '../OurTeam/OurTeam';
import { Repair } from '../Repair/Repair';
import { Reputation } from '../Reputation/Reputation';
import { ScreenProtector } from '../ScreenProtector/ScreenProtector';
import { SimpleFast } from '../SimpleFast/SimpleFast';
import ServicesPageStyles from './ServicesPage.module.css';

export const ServicesPage: React.FC = () => {
    return (
        <div>
            <Header/>
            <Repair/>
            <SimpleFast/>
            <Blog/>
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
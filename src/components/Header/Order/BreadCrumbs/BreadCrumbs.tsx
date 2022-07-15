import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumbsStyles from './BreadCrumbs.module.css';

export const BreadCrumbs: React.FC = () => {
    let crumb: string = '';
    let url: string = document.URL.split('/')[3];
    switch (url) {
        case 'services':
            crumb = 'Ремонт телефонов';
            break;
    }
    return (
        <div className= {BreadCrumbsStyles.main}>
            <p className= {BreadCrumbsStyles.first}><Link to = '/'>Главная 
            <span className= {BreadCrumbsStyles.arrow}>&#8594;</span></Link></p>
            <p className= {BreadCrumbsStyles.second}>{crumb}</p>
        </div>
    )
}
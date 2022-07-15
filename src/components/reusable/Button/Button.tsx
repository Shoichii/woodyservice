import React from 'react';
import ButtonStyles from './Button.module.css';

interface IProps {
    buttonText?: string,
}

export const Button: React.FC<IProps> = props => {
    return (
        <p className={ButtonStyles.button}>
            <a href="#">{props.buttonText === undefined ?
                <span>ЗАКАЗАТЬ РЕМОНТ</span> : <span>{props.buttonText}</span>}
            </a>
        </p>
    )
}
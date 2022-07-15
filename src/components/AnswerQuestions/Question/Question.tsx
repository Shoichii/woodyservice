import React from 'react';
import QuestionStyle from './Question.module.css';
let bgDefault = require('../../../img/answerQuestions/bgDefault.png');
let bg1 = require('../../../img/answerQuestions/bg1.png');
let bg2 = require('../../../img/answerQuestions/bg2.png');
let vectorDown = require('../../../img/answerQuestions/VectorDown.png');
let vectorUp = require('../../../img/answerQuestions/VectorUp.png');

interface IProps {
    question: string,
    answer: string,
    index: number,
    open: boolean,
    openHandle: (index: number) => void,
}

export const Question: React.FC<IProps> = props => {
    let bg = {
        background: props.index === 1 ? `url(${bg1})` : props.index === 3 ? `url(${bg2})` : `url(${bgDefault})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: props.open ? '0px 95px' : '0px 0px',
        transition: 'all 1s',
    }

    return (
        <div className= {QuestionStyle.main}>
            <div onClick={() => props.openHandle(props.index)} style = {bg} className= {QuestionStyle.question}>
                    <div className= {QuestionStyle.questionText}>
                    <p className= {props.open ? QuestionStyle.white + ' ' + QuestionStyle.noWhite 
                    : QuestionStyle.white}>{props.question}</p>
                    <img src={props.open ? vectorUp : vectorDown} alt="vectorDown" />
                    </div>
            </div>
            <div className= {props.open ? QuestionStyle.answer + ' ' + QuestionStyle.openAnswer : QuestionStyle.answer}>
                <p>{props.answer}</p>
            </div>
        </div>
    )
}
import React, { useState } from 'react';
import { TitleText } from '../reusable/TitleText/TitleText';
import AnswerQuestionsStyles from './AnswerQuestions.module.css';
import { Question } from './Question/Question';

export const AnswerQuestions: React.FC = () => {
    const [open, setOpen] = useState<Array<boolean>>([false,false,true,false]);

    let openHandle = (index: number): void => {
        setOpen(open.map((item, i) => {
            if(index === i) {
                return true;
            } else {
                return false;
            }
        }))
    }

    let questions = ['Что значит «честная гарантия»?', 'Что значит «честная гарантия»?',
        'Что значит «честная гарантия»?', 'Что значит «честная гарантия»?'];
    let answers = ['Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов способствует повышению качества направлений прогрессивного развития. Но постоянное информационно-пропагандистское обеспечение нашей деятельности требует анализа дальнейших направлений развития.',
    'Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов способствует повышению качества направлений прогрессивного развития. Но постоянное информационно-пропагандистское обеспечение нашей деятельности требует анализа дальнейших направлений развития.',
    'Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов способствует повышению качества направлений прогрессивного развития. Но постоянное информационно-пропагандистское обеспечение нашей деятельности требует анализа дальнейших направлений развития.',
    'Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов способствует повышению качества направлений прогрессивного развития. Но постоянное информационно-пропагандистское обеспечение нашей деятельности требует анализа дальнейших направлений развития.'];
    return (
        <div className={AnswerQuestionsStyles.main}>
            <div className={AnswerQuestionsStyles.container}>
                <div className={AnswerQuestionsStyles.title}>
                    <TitleText
                        title='Отвечаем на ваши вопросы'
                        showButton={false}
                        isWhite={false}
                        whiteSubtitle={false}
                    />
                </div>
                <div className={AnswerQuestionsStyles.questions}>
                    {questions.map((item,index) => {
                        return (
                            <Question
                        question={item}
                        answer={answers[index]}
                        open = {open[index]}
                        openHandle = {openHandle}
                        index = {index}
                    />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
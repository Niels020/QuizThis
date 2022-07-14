
import Answer from './Answer'
import { decodeHTML } from '../utils'
import React, {useState} from 'react'


export default function QuizElement(props) {
    const [answerElements, setAnswerElements] = useState(getAnswerElements())    



    function getAnswerElements() { 
        return props.allAnswers.map((answer, index) => {
            return {
                id: index + props.id,
                answer: answer,
                selected: false,
                correct: answer === props.correctAnswer
            }
    })}



    const renderAnswers = answerElements.map(element => {
        return (
            <Answer 
                key={element.id}
                id={element.id}
                answer={element.answer}
                correct={element.correct}
                selected={element.selected}
                checkAnswers={props.checkAnswers}
                selectAnswer={selectAnswer}
            />
        )
    })



    function selectAnswer(id) {
        setAnswerElements(prevAnswerEl => prevAnswerEl.map(answer => {
                return answer.id === id ? 
                {...answer, selected: !answer.selected} : 
                {...answer, selected: false}
            })
        )
    }


    return (
        <div>

            <h4 className='quizElement--question'>
                {decodeHTML(props.question)}
            </h4>

            <div className='answers-container'> 
                { renderAnswers }
            </div>
            
        </div>
    )
}
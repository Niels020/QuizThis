import React from 'react'
import Answers from './Answers'
import { nanoid } from 'nanoid'

export default function Quiz(props) {
    const { data: {incorrect_answers, correct_answer}, data, checkCorrect} = props
    const [answerElements, setAnswerElements] = React.useState(getAnswerElements())

    

    function getAnswerElements() {
        const allAnswers = incorrect_answers.concat(correct_answer)
        
        const answerElements = allAnswers.map(element => {
            return {
                answer: element,
                correctAnswer: element === correct_answer,
                selected: false,
                id: nanoid()
            }
        })
        return answerElements
    }

    

    const renderAnswerElements = answerElements.map(element => {
        return (
            <Answers 
                key={element.id}
                id={element.id}
                answer={element.answer}
                correctAnswer={element.correctAnswer}
                selected={element.selected}
                selectAnswer={selectAnswer}
                checkCorrect={checkCorrect}
            />
        )
    })



    function selectAnswer(id) {
        setAnswerElements(prevElements => {
            return prevElements.map(element => {
                return element.id === id ? 
                {...element, selected: !element.selected} : 
                {...element, selected: false}
            })
        })
    }



    return (
        <div>
            <h3>{data.question}</h3>
            {renderAnswerElements}
        </div>
    )
}
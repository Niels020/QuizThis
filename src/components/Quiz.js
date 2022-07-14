import React, {useState} from 'react'
import QuizElement from './QuizElement'

export default function Quiz(props) {
    const [checkAnswers, setCheckAnswers] = useState(false)

    const renderQuizElement = props.data.map((element, index) => {
        return (
            <QuizElement 
                key={getId(index)}
                id={getId(index)}
                question={element.question}
                allAnswers={element.allAnswers}
                correctAnswer={element.correctAnswer}
                checkAnswers={checkAnswers}
            />
        )
    })

    function getId(index) {
        return (index + 1) * 10
    }


    return (
        <div className='quiz--container'>

            { renderQuizElement }

            <div className='quiz--button-container'>
                <button 
                    className='quiz--button button'
                    onClick={() => {
                        setCheckAnswers(true)
                    }}
                    >CHECK THIS QUIZZZ
                </button> 

                <button 
                    className='quiz--button button'
                    onClick={props.returnToStart}
                    >return
                </button>
            </div>
            
        </div>
    )
}


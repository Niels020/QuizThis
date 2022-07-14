import React, {useState, useEffect} from 'react'
import Quiz from './components/Quiz'
import StartScreen from './components/StartScreen'
import { shuffle } from './utils'

  
  
export default function App() {

    const [startGame, setStartGame] = useState(false)
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [data, setData] = useState([])
    const [startSettings, setStartSettings] = useState({
        difficulty: '',
        category: ''
    })



    function handleStartSettings(event) {
        setStartSettings(prevStartSettings => {
            return {
                ...prevStartSettings,
                [event.target.name]: event.target.value
            }
        })
    }



    useEffect(() => {

        const optionsUrl = startSettings.difficulty + startSettings.category

        fetch(`https://opentdb.com/api.php?amount=5${optionsUrl}&type=multiple`)
            .then(res => res.json())
            .then(
                (res) => {
                    setIsLoaded(true)
                    setData(res.results)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
            })
    },[startSettings])



    function handleData(data) {
        const quizData = data.map(el => {
            return {
                question: el.question,
                allAnswers: getShuffledAnswers(el.incorrect_answers, el.correct_answer),
                correctAnswer: el.correct_answer
            }
        })
        return quizData
    }



    function getShuffledAnswers(incorrectAnswers, correctAnswer) {
        const allAnswers = incorrectAnswers.concat(correctAnswer)
        const allShuffledAnswers = shuffle(allAnswers)
        return allShuffledAnswers
    }
    


    if(!startGame) {

        return (
            <div>
                <StartScreen 
                    startQuiz={() => setStartGame(true)}
                    handleStartSettings={handleStartSettings}
                    startSettings={startSettings}
                />
            </div>
        )
    } else {

        if(error) {
            return <div>error. please refresh</div>
        } else if(!isLoaded) {
            return <div>loading...</div>
        } else {
            return (

                <div>
                    <Quiz 
                        data={handleData(data)}
                        returnToStart={() => {
                            setStartGame(false)
                            setStartSettings({
                                difficulty: '',
                                category: ''
                            })
                        }}
                    />
                </div>

            )
        }
    }
}

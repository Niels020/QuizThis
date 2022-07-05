import React from 'react'
import Quiz from './components/Quiz'
import StartScreen from './components/StartScreen'
import ScoreDisplay from './components/ScoreDisplay'
import { nanoid } from 'nanoid'
  
    
export default function App() {
    const [startGame, setStartGame] = React.useState(false)
    const [error, setError] = React.useState(null)
    const [isLoaded, setIsLoaded] = React.useState(false)
    const [quizData, setQuizData] = React.useState([])
    const [startSettings, setStartSettings] = React.useState({
        difficulty: '',
        category: ''
    })
    const [checkCorrect, setCheckCorrect] = React.useState(false)



    React.useEffect(() => {
        function getData() {
            if(!startGame) return

            const optionsUrl = startSettings.category + startSettings.difficulty

            fetch(`https://opentdb.com/api.php?amount=5${optionsUrl}&type=multiple`)
                .then(res => res.json())
                .then(
                    (res) => {
                        setIsLoaded(true)
                        setQuizData(res.results)
                    },
                    (error) => {
                        setIsLoaded(true)
                        setError(error)
                    })
        }
        getData()   
    },[startGame, startSettings])



    function handleOptions(event) {
        setStartSettings(prevStartSettings => {
            return {
                ...prevStartSettings,
                [event.target.name]: event.target.value
            }
        })
    }

    

    const renderQuizElement = quizData.map(dataElement => {
        return (
            <Quiz
                key={nanoid()}
                data={dataElement}
                checkCorrect={checkCorrect}
            />
        )
    })

    

    if(!startGame) {
        return (
            <div>
                <StartScreen 
                    startQuiz={() => setStartGame(true)}
                    handleOptions={handleOptions}
                    startSettings={startSettings}
                />
            </div>
        )
    } else {
        if(error) {
            return <div>error handling</div>
        } else if(!isLoaded) {
            return <div>loading...</div>
        } else {
            return (
                <div>
                    {renderQuizElement}
                    <ScoreDisplay 
                        checkCorrect={() => {
                            setCheckCorrect(true)
                        }}
                        returnToStart={() => {
                            setStartGame(false)
                            setIsLoaded(false)
                            setError(null)
                            setCheckCorrect(false)
                        }}
                    />
                </div>
            )
        }
    }
}


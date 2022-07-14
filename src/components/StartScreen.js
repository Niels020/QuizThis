export default function StartScreen(props) {
    return (
        <div className='startScreen'>

            <h1 className='startScreen--title'>
                Welcome to Quiz This!
            </h1>
           
            
            <form>
                <div>
                    <h3>Choose your difficulty...</h3>
                
                    <select
                        className='startScreen--form--select'
                        id='difficulty'
                        onChange={props.handleStartSettings}
                        value={props.startSettings.difficulty}
                        name='difficulty'
                    >
                        <option value=''>all difficulties</option>
                        <option value='&difficulty=easy'>easy</option>
                        <option value='&difficulty=medium'>medium</option>
                        <option value='&difficulty=hard'>hard</option>
                    </select>
                </div>
                
                <div>
                    <h3>Pick a category...</h3>

                    <select
                        className='startScreen--form--select'
                        id='category'
                        onChange={props.handleStartSettings}
                        value={props.startSettings.category}
                        name='category'
                    >
                        <option value=''>all categories</option>
                        <option value='&category=9'>General Knowledge</option>
                        <option value='&category=17'>Science & Nature</option>
                        <option value='&category=26'>Celebrities</option>
                        <option value='&category=21'>Sports</option>
                        <option value='&category=23'>History</option>
                        <option value='&category=24'>Politics</option>
                    </select> 
                </div>


                
                <div>
                    <h2>And let the games begin!</h2>

                    <button 
                        className='startScreen--form--button button'
                        onClick={props.startQuiz}
                        >START THE GAME ALREADY!!!
                    </button>
                </div>
            </form>
        </div>
    )
}
export default function StartScreen(props) {
    return (
        <div>
            <h1>Quizzical</h1>
            <h4>Some description here</h4>
            
            <form>
                <select
                    id='difficulty'
                    onChange={props.handleOptions}
                    value={props.startSettings.difficulty}
                    name='difficulty'
                >
                    <option value=''>all</option>
                    <option value='&difficulty=easy'>easy</option>
                    <option value='&difficulty=medium'>medium</option>
                    <option value='&difficulty=hard'>hard</option>
                </select>
                <select
                    id='category'
                    onChange={props.handleOptions}
                    value={props.startSettings.category}
                    name='category'
                >
                    <option value=''>all</option>
                    <option value='&category=9'>General Knowledge</option>
                    <option value='&category=17'>Science & Nature</option>
                    <option value='&category=26'>Celebrities</option>
                    <option value='&category=21'>Sports</option>
                    <option value='&category=23'>History</option>
                    <option value='&category=24'>Politics</option>
                </select>
            </form>

            <button 
                onClick={props.startQuiz}
                >start the game already!!!
            </button>
        </div>
    )
}
export default function ScoreDisplay(props) {
    return (
        <div>
            <button 
                onClick={props.checkCorrect}
                >check this shizz
            </button>
            <button 
                onClick={props.returnToStart}
                >return to start
            </button>
        </div>
    )
}
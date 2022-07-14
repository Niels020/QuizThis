import { decodeHTML } from '../utils'

export default function Answer(props) {

    const styles = {
        backgroundColor: getColor()
    }

    function getColor() {
        if(!props.checkAnswers) {
            return props.selected ? 'lightblue' : 'white'
        }
        else {
            if(props.selected && props.correct) {
                return 'green'
            }
            else if(props.correct) {
                return 'lightgreen'
            }
            else if(props.selected) {
                return 'red'
            }
            else return 'white'
        }
    }

    return (
        <div 
            className='answer-container'
            style={styles}
            onClick={() => props.selectAnswer(props.id)}
        >
            <h5 className='answer'>
                {decodeHTML(props.answer)}
            </h5>
        </div>
    )
}
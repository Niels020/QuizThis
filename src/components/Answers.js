export default function Answers(props) {
    const styles = {
        backgroundColor: props.selected ? 'red' : 'white'
    }
    
    return (
        <div>
            <div
            onClick={() => props.selectAnswer(props.id)}
            style={styles}
            ><h5>{props.answer}</h5></div>
        </div>
    )
}
//  Fisher-Yates (aka Knuth) Shuffle algorithm.
export function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}
   
// https://stackoverflow.com/questions/18749591/encode-html-entities-in-javascript 
export function decodeHTML(text) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
}
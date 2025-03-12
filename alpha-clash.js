function addKeyboardEventHandler(event){
    const playerPressed = event.key;
    if (playerPressed === "Escape"){
        gameOver();
    } 


    const currentAlphabet = document.getElementById('current-alphabet');
    const innerAlphabet = currentAlphabet.innerText;
    const expectedAlphabet = innerAlphabet.toLowerCase();

    if (playerPressed === expectedAlphabet){
        const value = getTextElementValueById('current-score');
        // score increment
        const newScore = value + 1;
        // set score
        const Score = setTextElementValue('current-score',newScore)

        removeBackgroundColor(expectedAlphabet);
        continueGame();
    }
    else{
        // get life
        const lifeValue = getTextElementValueById('current-life')
        // life decrement
        const newLife = lifeValue - 1;
        // set life score
        const lifeScore = setTextElementValue('current-life',newLife)

        if (newLife === 0){
            gameOver();
        }
      

    }
    // for getting correct alphabet, game goes on



}


document.addEventListener('keyup',addKeyboardEventHandler)

function continueGame(){
    const alphabet = getRandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    setBackgroundColor(alphabet);
}
function play(){
    showElementById('play-ground');
    hideElementById('start-page')
    hideElementById('last-page');

    setTextElementValue('current-score',0)
    setTextElementValue('current-life',5)

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('last-page');
    const finalscore = getTextElementValueById('current-score');
    setTextElementValue('final-score',finalscore)

    const currentAlpha = getElementAlphabet('current-alphabet');
    removeBackgroundColor(currentAlpha);


}
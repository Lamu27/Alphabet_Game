function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
}

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}

function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');
}
function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500')
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementValue = parseInt(elementText);
    return elementValue
} 

function setTextElementValue(elementId,elementValue){
    const element = document.getElementById(elementId);
    element.innerText = elementValue;

}

function getElementAlphabet(elementId){
    const alphabetE = document.getElementById(elementId);
    const alphabetText = alphabetE.innerText;
    return alphabetText;
}
function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetElement = alphabetString.split('');

    const randomGenerated = Math.random()*25;
    const randomIndex = Math.round(randomGenerated);
    const alphabet = alphabetElement[randomIndex];
    return alphabet;

}

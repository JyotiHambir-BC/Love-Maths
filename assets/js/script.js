
document.addEventListener("DOMContentLoaded", function() {

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            }
            else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    runGame("addition");
})

/**
 * the main game "loop", called when the script is first loaded
 * and after the user answers has been processed
 */
function runGame(gameType) {
    //create two random numbers between 0 to 25
    let num1 = Math.floor(Math.random()*25) +1;
    let num2 = Math.floor(Math.random()*25) +1;

    if(gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    }
    else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}.Aborting!`;
    }
}

/**
 * Check the answer against the first Element in the returned calculateCorrectAnswer Array.
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if(isCorrect){
        alert(`Hey!.. You got it right! :D`);
        incrementScore();
    }
    else{
        alert(`Awww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }
    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc.)
 * directly from the DOM, and returns the correct answer.
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if(operator === "+"){
        return [operand1 + operand2, "addition"];
    }
    else{
        alert(`Unimplemented Operator ${operator}`);
        throw `Unimplemented Operaor ${operator}. Aborting!`;
    }
}

/**
 * Get the current score from the DOM and increament it by 1.
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * Get the current score tallt of the incorrect answers from the DOM and increament it by 1.
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion() {


}

function displayMultiplyQuestion() {


}

function displayDivisionQuestion() {


}